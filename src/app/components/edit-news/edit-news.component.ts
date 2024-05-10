import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { iNews } from '../../Models/iNews';
import { ApiInewsService } from '../../services/api-inews.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiIauthorService } from '../../services/api-iAuthor.service';
import { iAuthor } from '../../Models/iAuthor';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-news',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-news.component.html',
  styleUrl: './edit-news.component.css'
})
export class EditNewsComponent {
  news! : iNews; 
  newsId! : number;
 authors : iAuthor[];
 validationMsg : string;
 selectedFile: File = new File([], ''); 
 image : any;
 //formattedPublicationDate! : string;


constructor(private _apiInewsService : ApiInewsService,
  private _router : Router, private route : ActivatedRoute,
private _apiIauthorService : ApiIauthorService, private router : Router)  // private datePipe: DatePipe 
{
  this.authors = [];
  this.validationMsg = '';
}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.newsId = params['id'];
     // console.log(this.authorId);

     this._apiInewsService.getById(this.newsId).subscribe({
      next : (res) => {console.log(res);
        this.news = res;
        console.log(this.news);
        
      //  this.formattedPublicationDate = this.datePipe.transform(this.news.publicationDate, 'yyyy-MM-dd');
      //  this.news.publicationDate = this.datePipe.transform(new Date(this.news.publicationDate), 'yyyy-MM-dd')
       
        console.log(this.news.publicationDate);
        console.log(this.news.authorId);
        
      },
      error : (err) => {console.log(err);
      }
     });

     this._apiIauthorService.getAll().subscribe({
      next : (res) => {
        this.authors = res;
        console.log(this.authors);
      },
      error : (err) => {
        console.log(err);
      }
     });


    });
  }

  onFileSelected (event: any) {
    let reader = new FileReader();
    this.selectedFile = event.target.files[0]; 
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      this.image = reader.result;
      }
      };


  edit()
  {

    // new 
    const fileData = new FormData();
    fileData.append('file', this.selectedFile, this.selectedFile.name);
      this._apiInewsService.uploadImg(fileData).subscribe({
        next : (res) => {
          console.log("response should contain img path");
          console.log(res);
          console.log(res.path);
          // console.log(res.values);
        this.news.image = res.path;
// save obj 
        
this._apiInewsService.update(this.news).subscribe({
  next : (res) => {
    console.log("update next entered");
    console.log(res);
  this.router.navigateByUrl('/news');
  },
  error : (err) => {
    console.log(err);
    this.validationMsg = err.error;
  //  this.validationMsgDiv.nativeElement.html = err.error;
  }
  
})
      },
      error : (err) => {
        console.log(err);
        this.validationMsg = err.error;
      //  this.validationMsgDiv.nativeElement.html = err.error;
      }
    }
    );

    console.log(this.news.authorId);
    
    this._apiInewsService.update(this.news).subscribe({
      next : (res) => {console.log(res);
        // this._router.navigateByUrl('authors');    no work !!!!!!!!! 
      },
      error : (err) => {console.log(err);
      this.validationMsg = err.error;

      }
    })
  }
}
