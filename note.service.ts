import { Injectable } from '@angular/core';
import { NoteClass } from './note';
import { NOTES } from './note-stock';

@Injectable(
  {providedIn: 'root'}
)
export class NoteService {
private notes : NoteClass[] = NOTES;
  constructor() { }
  getNotes(name : string): NoteClass {
      for(var i = 0;i<this.notes.length;i++)
      {
         if(this.notes[i].name == name)
          return this.notes[i];
      }

   }
}
