import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import { Article } from 'src/app/models/article';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  public articles:Article[];
  public url:string;

  constructor(
    private _articleService: ArticleService
  ) { 
    this.articles = [];
  }

  ngOnInit(): void {
    // this._articleService.pruebas();
    this._articleService.getArticles().subscribe(
      response =>{
        if (response.articles) {
          this.articles = response.articles;
        }
      },
      error => {
        Swal.fire({text: error});
      }
    );

  }

}
