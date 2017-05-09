import { Observable } from 'rxjs/Observable';
import { GithubSearchService } from './github-search.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Github search';
  repos: Array<any>;
  constructor(private searchService: GithubSearchService) {
  }

  onSearch(filter: string) {
    console.log('received event' + filter);
     this.searchService.search(filter).map(r => r.items).subscribe(
      repos => {
          this.repos = repos;
      }
    );
  }
}
