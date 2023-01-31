"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const x = 20;
console.log(x);
const myNumber = [1, 2, 3];
console.log(myNumber);
let myTuple;
myTuple = [360, "Wallace", ["Programador", "Professor"]];
console.log(myTuple);
const y = "30";
console.log(y);
const user = {
    name: "Wallace",
    age: 22,
};
console.log(user);
const userID = "Wallace";
const ageID = 22.0010;
const propID = "fhakjhfjkheked";
const file_user = [userID, ageID, propID];
console.log(file_user);
var size;
(function (size) {
    size["P"] = "Pequeno";
    size["M"] = "M\u00E9dio";
    size["G"] = "Grande";
})(size || (size = {}));
const camisa = {
    name: "Camisa gola V",
    size: size.G
};
console.log(camisa);
let teste;
teste = "algum_valor";
teste = null;
function soma(a, b) {
    return console.log(a + b);
}
soma(2, 2);
function logger(msg) {
    console.log(msg);
}
logger("teste");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá, ${name}!!\n${greet}`);
    }
    else {
        console.log(`Olá, ${name}!!`);
    }
}
greeting("Wallace");
greeting("Wallace", "Seja bem-vindo!!!!");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 22, n2: 8 }));
function doSomething(info) {
    if (typeof info === "number") {
        console.log('É um número!');
    }
    else {
        console.log('É uma string!');
    }
}
doSomething('Wallace');
doSomething(22);
function doSomethingSec(info) {
    if (typeof info === "boolean") {
        console.log('É um valor booleano!');
    }
    else {
        console.log('É uma string!');
    }
}
doSomethingSec('Wallace');
doSomethingSec(true);
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
console.log('-----[A1]-----');
showArraysItems(a1);
console.log('-----[A2]-----');
showArraysItems(a2);
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é: ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`Função do usuário é: ${this.role}`);
        }
        else {
            console.log('Informação restrita1');
        }
    }
}
const wallace_user = new User("Wallace", "Admin", true);
console.log(wallace_user);
wallace_user.showUserName();
wallace_user.showUserRole(true);
class Car {
    brand;
    wheels;
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
class SuperCar extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person("Sam");
console.log(sam);
