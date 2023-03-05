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

  animalsInterface: Animal[] = []

  animalsDetails = ''
  
  showAge(animal:Animal):void{
    this.animalsDetails = `O pet ${animal.name} possui ${animal.age} anos.`
  }

  constructor(private listService: ListService){
    this.getAnimals()
  }

  removeAnimal(animal:Animal){
    this.animalsInterface = this.animalsInterface.filter((a) => animal.name !== a.name)
    this.listService.remove(animal.id).subscribe()
  }

  getAnimals():void{
    this.listService.getAll().subscribe((animals) => (this.animalsInterface = animals))
  }
}
