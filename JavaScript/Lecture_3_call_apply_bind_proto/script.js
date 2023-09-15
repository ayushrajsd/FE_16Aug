// recap
/**
 * value of this
 * global scope -> window
 * normal function invocation -> fn() : window
 * method invocation -> current object
 * arrow function -> do not have this of their pwn. derive from
 * near parent non-arrow function. if no non-arrow 
 * parent function, then it will point to window
 */
 // make JS run in the strict mode

 function strictMode(){
     'use strict'
     console.log(this)
    // a1 = "abc"
 }
 strictMode()
//  console.log(a1)

// call, apply, bind

function greetPeople(){
    console.log(`Hello Earthlings from ${this.planet} and this is ${this.isHabitable}`)
}

const alphaZ = {planet:'AlphaZ'}
const betaZ = {planet:'BetaZ', isHabitable:true}

const greetingFromAlphaZ = greetPeople.bind(alphaZ)
const greetingFromBetaZ = greetPeople.bind(betaZ)
greetingFromAlphaZ()
greetingFromBetaZ()

const person1 = {
    name:'p1',
    message: function(age, hobby1, hobby2){
        console.log(` Hello I am ${this.name} and my age is ${age}
        My hobbies include
        1. ${hobby1}
        2. ${hobby2}
        `)
    }

}

person1.message(24, 'singing','dancing') // method invocation

const person2 = {
    name:'p2'
}

const person2msg = person1.message.bind(person2) // setting the context as person2
person2msg(34, 'books','flute')

// call and apply
// using call you can invoke the funciton immediately
// spread operator
const arr = [50,'front end', 'tabla']
console.log(...arr)
console.log(arr)
person1.message.call(person2, 40,'web dev', 'piano')
person1.message.call(person2, ...arr)
person1.message.apply(person2, arr)

const test = () => {
    console.log(this.name)
}

const testPerson1 = test.bind(person1)
testPerson1()

const person3 = {
    address:'p3'
}

// const person3MSg = person1.message.bind(person3, person2)
// person3MSg()



// Prototypes 
/**
 * 1. Complimentary dish
 * 2. Mom's snacks
 * 3. Family is given but friends are chosen
 * 4. God Element
 */

 // 1. 
 const obj = {}
 console.log(obj.toString())

 const arr3 = [1,2,3]
 console.log(arr3.join('->'))


 // Prototype -> basically an object that has methods and properties
 // that gets attached to your object. It can also be null

 // Prototypes are mechanism by which JS objects inherit features
 // from one another

 // Mom's snacks
 console.log(obj)
 console.log(arr3)

// Family is given but friends are chosen
/**
 * [[ Prototype]] -> internal and hidden
 * one of the ways to use and set this is by using __proto__
 */

 const animal = {
     eat: true,
     walk(){
         console.log("the animal walk")
     }
 }

 console.log(animal)

 const rabbit = {
     areCute: true,
    //  walk(){
    //      console.log("the bunny jump")
    //  }
    }
    const dog = {

    }

 rabbit.__proto__ = animal
 dog.__proto__ = animal
 console.log(rabbit)

 console.log(rabbit.walk()) // prototypal inheritance
//  console.log(rabbit.dance()) -> gives error

const animal2 = {
    eat: true,
    walk(){
        console.log("the aninal walk")
    }
}

const herbivore = {
    eatMeat: 'naah'
}

herbivore.__proto__ = animal2

const carnivore = {
    eatMeat: 'yesss',
    __proto__: animal2
}

const bunny = {
    canJump: true
}
bunny.__proto__ = herbivore

const tiger = {
    canKill: true
}
tiger.__proto__ = carnivore

console.log(tiger)
console.log(bunny.eatMeat)

console.log(tiger.__proto__.__proto__.__proto__.__proto__) // PROTOTYPAL CHAIN

// # God Element
const num = 2.2323123
console.log(num)
 console.log(num.toFixed(2))
 console.log(Number.prototype)
const str = 'string vakue'
console.log(str.toUpperCase())
console.log(String.prototype)

// Object constructor function

function User(name){ // Object constructor fn
    this.name = name
    // this.greet = function(){} // violates DRY 
    
}

console.log(User.prototype) // this is diff from [[ Prototype ]]

// const tempObj = {}
// tempObj.greet = function(){}

User.prototype.greet = function(){
    console.log( `${this.name} says Hiii`)
    return "hello"
}

const msd = new User('MSD') // msd.__proto__ = User.prototype
console.log("mahi",msd) 
const virat = new User('Virat') // virat.__proto__ = User.prototype
console.log("kohli",virat)
console.log(msd.greet == virat.greet)
/**
 * This means the condition msd.greet == virat.great is nothing
 *  but now User.prototype.greet == User.prototype.greet 
 * is giving true
 */
/**
 * new -> creates an empty obj ({}) , cretes a this , 
 */

// type coercions
 













