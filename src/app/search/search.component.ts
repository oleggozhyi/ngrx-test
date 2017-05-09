import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  @Output() search: EventEmitter<string> = new EventEmitter();
  searchRepo(filter: string) {
    console.log(filter);
    this.search.emit(filter);
  }
}
