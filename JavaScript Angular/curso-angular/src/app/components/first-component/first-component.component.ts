import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent {
  name : string = "Wallace"
  age : number = 22
  job = ['Teacher', 'Full-Stack Developer']
  car = {
    name : "Nissan",
    year : 2022
  }
}
