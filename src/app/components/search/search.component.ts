import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})

export class SearchComponent implements OnInit {
 public articles:Article[];
 public url:string
 public search:string;
  constructor(
    private _articleService:ArticleService,
    private _route: ActivatedRoute,
  ) {
   }

  ngOnInit(): void {
    this.url = Global.url;
    this._route.params.subscribe(params=> {
      let searchString = params['search'];
      this.search = searchString;
      this._articleService.search(searchString).subscribe(res  => {
        if (res.articles) {
          this.articles = res.articles;
        } else {
        this.articles = [];
        }
      }, err => {
        this.articles = [];
      });

    });
  }

}
