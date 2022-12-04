import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  contactName: string = "";

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  searchContact() {
    this.searchTextChanged.emit(this.contactName);
  }

  clearSearch() {
    this.contactName = "";
    this.searchTextChanged.emit(this.contactName);
  }


}
