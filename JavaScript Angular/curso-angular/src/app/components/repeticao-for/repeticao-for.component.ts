import { Component } from '@angular/core';

// IMPORT INTERFACE
import { Animal } from 'src/app/Animal'

// IMPORT SERVICES
import { ListService } from 'src/app/service/list.service'

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

  constructor(private listService: ListService){}

  removeAnimal(animal:Animal){
    console.log(`${animal.name} foi removido com sucesso!`)
    this.animalsInterface = this.listService.remove(this.animalsInterface, animal)
  }
}
