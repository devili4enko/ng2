import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>
  {{title}}
</h1>
<br/>
<h1>
   {{test + testS}}
</h1>
<app-databinding></app-databinding>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test test';
  test = 1;
  testS = 1;
}
