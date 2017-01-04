import { Component } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  template: `
    <input type="text" [(ngModel)]="person.name"/>
    <input type="text" [(ngModel)]="person.name"/>
  `,
  styles: []
})
export class TwowayBindingComponent {
  person={
    name: "Max",
    age: 27
  }
}
