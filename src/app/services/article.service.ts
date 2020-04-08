import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from '../models/article';
import {Global} from '../services/global';

@Injectable()
export class ArticleService {
    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }

    pruebas() {
        console.log("Soy el servicio de articulos");
    }

    getArticles(last: any = null): Observable<any> {
        return this._http.get(this.url + (last?'articles/fivelast':'articles'));
    }

    getArticle(id: string): Observable<any>{
        return this._http.get(this.url + 'articles/' + id);
    }

    search(searchString: string): Observable<any> {
        return this._http.get(this.url + 'search/' + searchString);
    }

    create(article: Article): Observable<any> {
        const params = JSON.stringify(article);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'articles', params, {headers});
    }

    update(id: string, article: Article): Observable<any>{
        const params = JSON.stringify(article);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url + 'articles/' + id, params, {headers});

    }

    delete(id: string): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + 'articles/' + id, {headers});
    }


}