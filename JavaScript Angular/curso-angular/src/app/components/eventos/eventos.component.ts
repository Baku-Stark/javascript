import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent {
  show:boolean = false

  showMessage(): void{
    // inversão de valores (toggle)
    this.show = !this.show
  }
}
