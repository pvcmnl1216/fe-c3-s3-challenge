import { Component, OnInit } from '@angular/core';
import {Note} from '../models/note';
import {NOTES} from '../models/notes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
 
  notes: Note[] = NOTES;

  constructor() {
  }

  onSearchTextChanged(notesName: string) {
    if (notesName === '' || !notesName)
      this.notes = NOTES;
    else {
      this.notes = NOTES;
      this.notes = this.notes.filter(note => note.title?.startsWith(notesName));
    }
  }

}