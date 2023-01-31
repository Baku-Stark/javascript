// type [number = int]
const x:number = 20
console.log(x)

const myNumber: number[] = [1, 2, 3]
console.log(myNumber)

let myTuple: [number, string, string[]]
myTuple = [360, "Wallace", ["Programador", "Professor"]]
console.log(myTuple)

// type [string = str]
const y:string = "30"
console.log(y)

// OBJECTS LITERALS -> [prop: value]
const user : {name: string, age: number}={
    name: "Wallace",
    age: 22,
}

console.log(user)

// type [value = number OU string]
type myIdType = number | string
const userID: myIdType = "Wallace"
const ageID : myIdType = 22.0010
const propID: myIdType = "fhakjhfjkheked"

const file_user = [userID, ageID, propID]
console.log(file_user)

// type [enum]
// Enumerar
enum size{
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola V",
    size: size.G
}

console.log(camisa)


// LITERAL TYPES [Não podem ser alterados]
let teste: "algum_valor" | null
teste = "algum_valor"
teste = null

// FUNCTIONS
function soma(a:number, b:number){
    return console.log(a + b)
}
soma(2, 2)

function logger(msg: string) : void{
    // void -> Não possui retorno
    console.log(msg)
}
logger("teste")

function greeting(name: string, greet?: string){
    // greet [opcional] -> Valor opcional
    if(greet){
        console.log(`Olá, ${name}!!\n${greet}`)
    }
    else{
        console.log(`Olá, ${name}!!`)
    }
}

greeting("Wallace")
greeting("Wallace", "Seja bem-vindo!!!!")

// INTERFACES
interface MathFunctionParams{
    n1: number,
    n2: number
}
function sumNumbers(nums: MathFunctionParams){
    return nums.n1 + nums.n2
}

console.log(sumNumbers({ n1: 22, n2: 8 })) /*30*/

// narrowing
function doSomething(info: string | number){
    if(typeof info === "number"){
        console.log('É um número!')
    }
    else{
        console.log('É uma string!')
    }

}

doSomething('Wallace')
doSomething(22)

function doSomethingSec(info: string | boolean){
    if(typeof info === "boolean"){
        console.log('É um valor booleano!')
    }
    else{
        console.log('É uma string!')
    }

}

doSomethingSec('Wallace')
doSomethingSec(true)

// GENERICS
function showArraysItems<T>(arr: T[]){
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}

const a1 = [1, 2, 3]
const a2 = ["a", "b", "c"]
console.log('-----[A1]-----')
showArraysItems(a1)
console.log('-----[A2]-----')
showArraysItems(a2)

// CLASSE
class User{
    name;
    role;
    isApproved;

    constructor (name: string, role: string, isApproved: boolean){
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }

    showUserName(){
        console.log(`O nome do usuário é: ${this.name}`)
    }

    showUserRole(canShow:boolean){
        if(canShow){
            console.log(`Função do usuário é: ${this.role}`)
        }
        else{
            console.log('Informação restrita1')
        }
    }
}

const wallace_user = new User("Wallace", "Admin", true)
console.log(wallace_user)
wallace_user.showUserName();
wallace_user.showUserRole(true)

// INTERFACES (classes)
interface IVehicle{
    brand: string
    showBrand(): void
}

class Car implements IVehicle{
    brand;
    wheels;

    constructor(brand: string, wheels: number){
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`)
    }
}

const fusca = new Car("VW", 4)
fusca.showBrand()

// HERANÇA
class SuperCar extends Car{
    engine;

    constructor(brand: string, wheels: number, engine: number){
        super(brand, wheels)
        this.engine = engine
    }
}

const a4 = new SuperCar("Audi", 4, 2.0)
console.log(a4)
a4.showBrand()

// DECORATORS [constructor]
function BaseParameters(){
    return function <T extends{new (...args: any[]): {}}>(constructor: T){
        return class extends constructor{
            id = Math.random()
            createdAt = new Date()
        }
    }
}

@BaseParameters()
class Person{
    name;

    constructor(name: string){
        this.name = name
    }
}

const sam = new Person("Sam")
console.log(sam)