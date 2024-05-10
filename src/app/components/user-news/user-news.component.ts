import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, input, output } from '@angular/core'; 
import { iNews } from '../../Models/iNews';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router'; 
import { UserCardDirective } from '../../Directives/user-card.directive';
import { ApiInewsService } from '../../services/api-inews.service';

@Component({
    selector: 'app-user-news',
    standalone: true,
    templateUrl: './user-news.component.html',
    styleUrl: './user-news.component.css',
    imports: [CommonModule, FormsModule, UserCardDirective,
        RouterLink]       
})
export class UserNews implements OnChanges, OnInit {
   today: Date;
  @Input() sentAuthorId : number; 
 
filteredNews : iNews[];

constructor(private _router : Router, private _apiInewsService : ApiInewsService,
  private _ActivatedRoute : ActivatedRoute
) {
    this.sentAuthorId = 0; 
    this.filteredNews = []; 
    this.today = new Date();
   
  }
  ngOnInit(): void {
    this._apiInewsService.getAll().subscribe({
      next: (res) => {console.log(res);
        console.log(this.filteredNews);
        this.filteredNews = res;
      },   
      error: (err) => {console.log(err);}
      });
      console.log(this.filteredNews);
      
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    if(this.sentAuthorId == 0)
      {      
        this._apiInewsService.getAll().subscribe({
          next: (res) => {this.filteredNews = res},
          error: (err) => {console.log(err);}
          });
      }
    else 
    {
      this._apiInewsService.getAll().subscribe({
        next : (res) => this.filteredNews = res.filter(n => n.authorId == this.sentAuthorId),
        error : (err) => console.log(err)});
    }
  }

  trackByFunc(index : number , news : iNews)
  {
    return news.id;       
  }


   showDetails(id : number)
   {
    this._router.navigate(['details', id]) 
   }


//    isTodayPublication(publicationDate: Date): boolean {
// //    const pubDate = new Date(publicationDate);

//     const today = new Date();
    
//     return publicationDate.toDateString() === today.toDateString();
//   }


  isToday(date: Date): boolean {
    // Set hours, minutes, seconds, and milliseconds to 0 to compare only dates
    const todayStart = new Date(this.today);
    todayStart.setHours(0, 0, 0, 0);

    const dateStart = new Date(date);
    dateStart.setHours(0, 0, 0, 0);

    return todayStart.getTime() === dateStart.getTime();
  }

}


