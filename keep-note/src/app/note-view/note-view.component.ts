import { Component, Input, OnInit } from '@angular/core';
import {Note} from '../../app/models/note';
import {NOTES} from '../../app/models/notes'

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {
  @Input()
  notes: Note[] = [];


  constructor() { }

  ngOnInit(): void {
    console.log(this.notes);
  }

  search(notesName: string) {
    if(notesName === '' || !notesName)
      this.notes = NOTES;
    else
    {
      this.notes = NOTES;
      this.notes = this.notes.filter(note => note.title?.startsWith(notesName));
    }
  }

}