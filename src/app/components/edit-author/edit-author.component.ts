import { Component } from '@angular/core';
import { ApiIauthorService } from '../../services/api-iAuthor.service';
import { iAuthor } from '../../Models/iAuthor';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-author',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-author.component.html',
  styleUrl: './edit-author.component.css'
})
export class EditAuthorComponent {

  author! : iAuthor;
  authorId! : number;

  constructor(private _ApiIauthorService : ApiIauthorService,
    private route : ActivatedRoute, private _router : Router) {   
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.authorId = params['id'];
     // console.log(this.authorId);

     this._ApiIauthorService.getById(this.authorId).subscribe({
      next : (res) => {console.log(res);
        this.author = res;
      },
      error : (err) => {console.log(err);
      }
     })
    });
  }

  edit()
  {
    this._ApiIauthorService.update(this.author).subscribe({
      next : (res) => {console.log(res);
        // this._router.navigateByUrl('authors');    no work !!!!!!!!! 
      },
      error : (err) => {console.log(err);

      }
    })
  }

}
