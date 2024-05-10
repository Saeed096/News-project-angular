import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ViewChild , ElementRef } from '@angular/core';
import { iNews } from '../../Models/iNews';
import { ApiInewsService } from '../../services/api-inews.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router'; 


@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  @ViewChild('searchInput') searchInput! : ElementRef 
  @ViewChild('modalDiv') modalDiv! : ElementRef 
  filteredNews! : iNews[];
  allNews! : iNews[];
deletedNewsTitle! : string;
deletedNewsId! : number;


  constructor(private _apiInewsService : ApiInewsService,
    private _router : Router
  ) {
    
  }

  ngOnInit(): void {
    this._apiInewsService.getAll().subscribe({
      next: (res) => {console.log(res);
        this.allNews = this.filteredNews = res;
        console.log(this.filteredNews);
      },   // 
      error: (err) => {console.log(err);}
      });
      console.log(this.filteredNews);
      
   // this.orderItemDetails = new OrderItemVm();  
  }
   
  search()
  {
        this.filteredNews = this.filteredNews.filter(n => n.title.includes(this.searchInput.nativeElement.value)) 
  }

  reset()
  {
    this.filteredNews = this.allNews; 
    this.searchInput.nativeElement.value = '';
  }


  deleteNews(id : number , title : string)
  {
   this.modalDiv.nativeElement.classList.remove('d-none')
   //  this.removeClicked = true;
     this.deletedNewsTitle = title;
     this.deletedNewsId = id;
     this._router.navigate(['news']);   // send prd name 
     //  this._ActivatedRoute.snapshot.paramMap.get('name');
     //  console.log(this._ActivatedRoute.snapshot.paramMap.get('name'));
  }

  confirmDelete()
  {
    this.modalDiv.nativeElement.classList.add('d-none')
 this._apiInewsService.delete(this.deletedNewsId).subscribe({
next : (res) => {console.log(res)

},
error : (err) => console.log(err)
 });
 this.filteredNews = this.filteredNews.
 filter(n => n.id != this.deletedNewsId)
 this._router.navigate(['news'])
}
  }
