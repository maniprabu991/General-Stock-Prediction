import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { NoteClass } from '../note';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  private currentStocks : NoteClass;
   private pastStocks: NoteClass[] = [];
  constructor(private noteservice: NoteService ) { }

  ngOnInit() {
  }
  getNotes(name : string): void {

      this.currentStocks = this.noteservice.getNotes(name);

      //Adding to pastStocks
      this.currentStocks.searchTime = (new Date()).toTimeString();
      this.pastStocks.push(this.currentStocks);

    }
}
