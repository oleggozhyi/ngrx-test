import { Observable } from 'rxjs/Observable';
import { GithubSearchService } from './github-search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  title = 'Github search';
  repos: Array<any>;
  constructor(private searchService: GithubSearchService) {
  }
  ngOnInit(): void {
    this.searchService.searchResult$
      .map(r => r.items)
      .subscribe(items => this.repos = items);
  }
  onSearch(filter: string) {
    console.log('received event' + filter);
    this.searchService.search(filter);
  }
}
