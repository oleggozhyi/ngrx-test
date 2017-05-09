import { AppComponent } from './app.component';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GithubSearchService {

  constructor(private http: Http) { }

  search(filter: string): Observable<any> {
    return this.http
      .get(`https://api.github.com/search/repositories?q=${filter}`)
      .map(res => {
        console.log(res.json());
        return res.json();
      });
  }
}


