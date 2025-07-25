import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { ArticleResponse } from '../ArticleResponse';
import { Article } from '../Article';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
}
@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    private apiUrl = 'http://localhost:8080/api/v1/articles'

    constructor(private http: HttpClient) { };

    postArticle(data: Article): Observable<ArticleResponse> {
        const token = localStorage.getItem('token');
        const header = this.createHttpOptions(token!);
        const result = this.http.post<ArticleResponse>(this.apiUrl, data, header);
        return result;
        //return new response(Url, data, token)
        //calling http.post method with 3 params(apiUrl, data, createHttpOptions(token!)) and returns what comes from the call
    }

    updateArticle(data: Article & { id: number }): Observable<ArticleResponse> {
        const token = localStorage.getItem('token');
        const header = this.createHttpOptions(token!);
        const url = `${this.apiUrl}/${data.id}`;
        return this.http.put<ArticleResponse>(url, data, header);
    }

    createHttpOptions(token: string) {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${token}`
            })
        }
    }

}
