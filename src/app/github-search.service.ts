import { AppComponent } from './app.component';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubSearchService {

  searchResult$: BehaviorSubject<any> = new BehaviorSubject<any>({ items: [
    {id: 123, full_name: 'test'}
  ] });
  constructor(private http: Http) { }

  search(filter: string) {
    return this.http
      .get(`https://api.github.com/search/repositories?q=${filter}`)
      .map(res => res.json())
      .subscribe(result => this.searchResult$.next(result));
  }
}


