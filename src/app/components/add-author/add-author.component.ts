import { Component } from '@angular/core';
import { ApiIauthorService } from '../../services/api-iAuthor.service';
import { iAuthor } from '../../Models/iAuthor';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-author',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-author.component.html',
  styleUrl: './add-author.component.css'
})
export class AddAuthorComponent {
addedAuthorName : string;
newAuthor : iAuthor;

/**
 *
 */
constructor(private _ApiIauthorService : ApiIauthorService,
   private router : Router) {
this.addedAuthorName = '';  
this.newAuthor = {name : this.addedAuthorName, id : 0}
}

add()
{
 // this.newAuthor.name = this.addedAuthorName;
 this.newAuthor.name = this.addedAuthorName; 
 console.log(this.newAuthor);
//  alert("wait");
 this._ApiIauthorService.add(this.newAuthor).subscribe({
  next : (res) => {console.log(res);
    this.router.navigateByUrl('/authors');
  },
  error : (err) => {console.log(err);
  }
  
 }); //here 
}
}
