import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NOTES } from '../models/notes';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveFruit(id:string, name:string, content:string){
    let newFruit:Note = {
      id:parseInt(id),
      title: name,
      content: content,
  
    };
    alert(newFruit.title)
    NOTES.push(newFruit);

  }
  


}
