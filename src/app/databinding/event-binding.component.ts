import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClick()">Click me</button>
  `,
  styles: []
})
export class EventBindingComponent{
  @Output() clicked = new EventEmitter<string>();

  onClick(){
   this.clicked.emit('worked');
  }
}
