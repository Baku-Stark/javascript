import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
  someText = "Testando o pipe operator"

  dateToday = new Date()

  birthday = new Date(2000, 7-1, 7)
}
