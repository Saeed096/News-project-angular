import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iNews } from '../../Models/iNews';
import { ApiInewsService } from '../../services/api-inews.service';
import { ApiIauthorService } from '../../services/api-iAuthor.service';
import { iAuthor } from '../../Models/iAuthor';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.css',
})
export class NewsDetailsComponent {
  news!: iNews;
  newsId!: number;
  author!: iAuthor;

  constructor(
    private route: ActivatedRoute,
    private _apiInewsService: ApiInewsService,
    private _apiIauthorService: ApiIauthorService
  ) {
    this.author = { name: '', id: 0 };
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.newsId = params['id'];

      this._apiInewsService.getById(this.newsId).subscribe({
        next: (res) => {
          console.log(res);
          this.news = res;

          this._apiIauthorService.getById(this.news.authorId).subscribe({
            next: (res) => {
              this.author = res;
            },
            error: (err) => {
              console.log(err);
            },
          });
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  }
}
