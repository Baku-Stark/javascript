import { Component } from '@angular/core';

// IMPORT INTERFACE
import { Animal } from 'src/app/Animal'

@Component({
  selector: 'app-repeticao-for',
  templateUrl: './repeticao-for.component.html',
  styleUrls: ['./repeticao-for.component.scss']
})
export class RepeticaoForComponent {
  myList = ['Wallace', 'Tony', 'Geto']

  animals = [
    {name:"Turca", type:"Dog"},
    {name:"Tom", type:"Cat"},
    {name:"Fridda", type:"Dog"},
  ]

  animalsInterface: Animal[] = [
    {name:"Turca", type:"Dog", age: 10},
    {name:"Tom", type:"Cat", age: 10},
    {name:"Fridda", type:"Dog", age: 10},
  ]

  animalsDetails = ''
  
  showAge(animal:Animal){
    this.animalsDetails = `O pet ${animal.name} possui ${animal.age} anos.`
  }
}
