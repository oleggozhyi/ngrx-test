import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() search: EventEmitter<string> = new EventEmitter();
  searchRepo(filter: string) {
    console.log(filter);
    this.search.emit(filter);
  }
}
