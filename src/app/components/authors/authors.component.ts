import { Component } from '@angular/core';
import { ApiIauthorService } from '../../services/api-iAuthor.service';
import { iAuthor } from '../../Models/iAuthor';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewChild , ElementRef } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router'; 



@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {
  filteredAuthors : iAuthor[];
  allAuthors : iAuthor[];
  @ViewChild('modalDiv') modalDiv! : ElementRef 
  @ViewChild('searchInput') searchInput! : ElementRef 
deletedAuthorName! : string;
deletedAuthorId! : number;

  /**
   *
   */
  constructor(private _ApiIauthorService : ApiIauthorService,
     private _router : Router) {
    this.filteredAuthors = []; 
    this.allAuthors = []; 
  }


  ngOnInit(): void {
    this._ApiIauthorService.getAll().subscribe({
      next: (res) => {console.log(res);
        this.allAuthors = this.filteredAuthors = res;
        console.log(this.filteredAuthors);
      },   // 
      error: (err) => {console.log(err);}
      });
      console.log(this.filteredAuthors);
      
   // this.orderItemDetails = new OrderItemVm();  
  }

  trackByFunc(index : number , author : iAuthor)
  {
  //   this.filteredAuthors.forEach(author => {
  // console.log(author.id);
  //   });
    return author.id;       // unique val to use in tracking >> detect change on which item no rebuild for dom
  }

  search()
  {
        this.filteredAuthors = this.filteredAuthors.filter(a => a.name.includes(this.searchInput.nativeElement.value)) 
  }

  reset()
  {
    this.filteredAuthors = this.allAuthors; 
    this.searchInput.nativeElement.value = '';
  }

  deleteAuthor(id : number , name : string)
  {
   this.modalDiv.nativeElement.classList.remove('d-none')
   //  this.removeClicked = true;
     this.deletedAuthorName = name;
     this.deletedAuthorId = id;
     this._router.navigate(['authors']);   // send prd name 
     //  this._ActivatedRoute.snapshot.paramMap.get('name');
     //  console.log(this._ActivatedRoute.snapshot.paramMap.get('name'));
  }

  confirmDelete()
  {
    this.modalDiv.nativeElement.classList.add('d-none')
 this._ApiIauthorService.delete(this.deletedAuthorId).subscribe({
next : (res) => {console.log(res)

},
error : (err) => console.log(err)
 });
 this.filteredAuthors = this.filteredAuthors.
 filter(a => a.id != this.deletedAuthorId)
 this._router.navigate(['authors'])
}



}
