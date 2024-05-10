import { Component } from '@angular/core';
import { iNews } from '../../Models/iNews';
import { ApiInewsService } from '../../services/api-inews.service';
import { Router } from '@angular/router';
import { ApiIauthorService } from '../../services/api-iAuthor.service';
import { iAuthor } from '../../Models/iAuthor';
import { CommonModule } from '@angular/common';
import { FormBuilder , FormGroup , FormsModule, Validator } from '@angular/forms';
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-add-news',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-news.component.html',
  styleUrl: './add-news.component.css'
})
export class AddNewsComponent {

  newsList : iNews[] = [];
  authors : iAuthor[] = [];
  news : iNews; 
  selectedImg : File = new File([], 'empty-file.txt', { type: 'text/plain' });
  validationMsg : string;
  @ViewChild('newsTitleInput') newsTitleInput! : ElementRef 
  @ViewChild('selectedAuthor') selectedAuthor! : ElementRef 
  @ViewChild('newsTextarea') newsTextarea! : ElementRef 
  @ViewChild('publicationDateInput') publicationDateInput! : ElementRef 
  //@ViewChild('validationMsgDiv') validationMsgDiv! : ElementRef 
  image: any;

  selectedFile: File = new File([], ''); 
  // news : iNews = {} as iNews; 
  constructor(private _apiINewsService : ApiInewsService,
    private router : Router, private _apiIauthorService : ApiIauthorService,
    
  ) {
      this.news = {title : '', id : 0, news : '', image : '',
    //  imageFile: new File([], 'empty-file.txt', { type: 'text/plain' })
       
       publicationDate : new Date() , authorId : 0};
        this.validationMsg = '';
  }
  ngOnInit(): void {
   this._apiINewsService.getAll().subscribe({
   next : (res) => this.newsList = res,
   error : (err) => console.log(err)  
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



  }


  add()      // here !!!!!!!!!
  {
    console.log(this.newsTitleInput.nativeElement.value);
    console.log(this.selectedAuthor.nativeElement.value);
    console.log(this.newsTextarea.nativeElement.value);
    console.log(this.publicationDateInput.nativeElement.value);
    
   // const formData = new FormData();
   // formData.append('title' , )
   
    this.news.title = this.newsTitleInput.nativeElement.value;
    this.news.authorId = this.selectedAuthor.nativeElement.value;
    this.news.news = this.newsTextarea.nativeElement.value;
    this.news.publicationDate = this.publicationDateInput.nativeElement.value;
  //  this.news.imageFile = this.selectedImg;
    console.log("ssaed");
   // console.log(this.news.imageFile);
    console.log(this.selectedImg);


    const fileData = new FormData();
    fileData.append('file', this.selectedFile, this.selectedFile.name);
      this._apiINewsService.uploadImg(fileData).subscribe({
        next : (res) => {
          console.log("response should contain img path");
          console.log(res);
          console.log(res.path);
          // console.log(res.values);
        this.news.image = res.path;
// save obj 
        
this._apiINewsService.add(this.news).subscribe({
  next : (res) => {
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


//     this._apiINewsService.uploadImg(this.news.imageFile).subscribe({
//       next : (res) => {
//         console.log("res of saving img");
//         console.log(res);
// //      this.router.navigateByUrl('/news');
        
//       },
//       error : (err) => {
//         console.log(err);
//         this.validationMsg = err.error;
//       //  this.validationMsgDiv.nativeElement.html = err.error;
//       }
      
//     })
  }

  // addProduct()
  // {
  //   this._apiINewsService.addProduct(this.news).subscribe({
  //     next : (res) => this.router.navigateByUrl(`orderCart`),
  //     error : (err) => console.log(err)});
  // }

// new 
onFileSelected (event: any) {
  let reader = new FileReader();
  this.selectedFile = event.target.files[0]; 
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = () => {
    this.image = reader.result;
    }
    };

    // onUpload() {
    //   const fileData = new FormData();
    //   fileData.append('file', this.selectedFile, this.selectedFile.name);
    //   this._apiINewsService.uploadImg(fileData).subscribe({
    //     next : (res) => {
    //       console.log("response should contain img path");
    //       console.log( res);
    //     this.router.navigateByUrl('/news');
          
    //     },
    //     error : (err) => {
    //       console.log(err);
    //       this.validationMsg = err.error;
    //     //  this.validationMsgDiv.nativeElement.html = err.error;
    //     }}
    //   );}
      // this.http.post('http://localhost:5084/api/Values', fileData) .subscribe((res) => {
      // console.log(res);
      // });}

  // imgSelected(e : any)
  // {
  //   const file : File = <File> e.target.files[0];
  //   if(file.type.endsWith("image/png") ||
  //   file.type.endsWith("image/jpeg") || 
  //   file.type.endsWith("image/jpg"))
  // {
  //   this.selectedImg = <File>e.target.files[0]
  // }
  //   else
  //   {
  //     alert("Please select png or jpg or jpeg photo");
  //   }
  // // console.log(file);
     
  // }
}
