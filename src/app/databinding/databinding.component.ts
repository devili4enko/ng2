import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stringInterpolation = 'This is string';
  intInterpolation = 123;

  onTest(){
    return true;
  }
}
