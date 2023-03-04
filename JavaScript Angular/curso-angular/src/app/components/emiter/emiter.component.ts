import { Component } from '@angular/core';

@Component({
  selector: 'app-emiter',
  templateUrl: './emiter.component.html',
  styleUrls: ['./emiter.component.scss']
})
export class EmiterComponent {
  myNumber:number = 0

  onChangeNumber(){
    console.log('Emitter funcionou!')
    this.myNumber = Math.floor(Math.random() * 10)
  }
}
