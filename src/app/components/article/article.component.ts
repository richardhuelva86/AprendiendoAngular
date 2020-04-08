import { Component, OnInit, Injectable } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import { Article } from '../../models/article';
import { ActivatedRoute, Router } from '@angular/router';
import { Global } from '../../services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})

export class ArticleComponent implements OnInit {
  public article:Article;
  public url:string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
   }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let id = params['id'];
      this._articleService.getArticle(id).subscribe(resp => {
        if (resp.article) {
          this.article = resp.article;
        } else {
          this._router.navigate(['/home']);
        }

      }, err => {
        Swal.fire({text: err});
        this._router.navigate(['/home']);
      });
    })
  }
  delete(id: string) {

    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas eliminar el artículo realmente? No podrás recuperar después.',
      icon: 'warning',
      buttons: true,
      showCancelButton: true,
      confirmButtonText: 'SI',
      cancelButtonText: 'No',
      reverseButtons: true
    } as any).then((willDelete) => {
      if (willDelete.value) {
        this._articleService.delete(id).subscribe(res => {
            this._router.navigate(['/blog']);
        }, error => {
          if (error) {
            Swal.fire({text: error});
            this._router.navigate(['/blog']);
          }
        });
        Swal.fire({icon: 'success', text: "Poof! Eliminado" });
      } else {
        Swal.fire({text: "No se eliminó el artículo :)"});
      }
    });

  }

}
