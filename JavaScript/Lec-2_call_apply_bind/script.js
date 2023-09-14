// var , let and const

// three ways to declare variable
/**
 * var
 *  1. undefined value before inititalization
 * 2. Function scoped / global scoped
 */

 var a = 10
 console.log(a)
 console.log(this.a)
 console.log(window.a)
 console.log(this === window)

 // function scoping
 function abc(){
     console.log(b)
     var b = 99
     if(true){
         var b = 999
         console.log("b=",b)
         var c = 888
     }
     console.log("b=",b)
     console.log("c=",c)
 }
//  console.log(b) // this will not work bczo b is now function scoped
 abc()

 // let and const
 /**
  * 1. these are block scoped
  */

//   console.log(val)
  // temporal dead zone - cannot acces variables declared using let and const
  let val = 100

 function def(){
    // console.log(x)
    let x = 99
    if(true){
        let x = 999
        console.log("x=",x)
        let y = 888
        console.log("inside if blck",y)
    }
    console.log("x=",x)
    // console.log("y=",y)
}
def()

// redeclare vs redefine - let and var

var c = 10
console.log(c)
var c = 'asd100'
console.log(c)


// redeclaration is not allowed in let

let temp = 10
console.log(temp)
temp = 'some new val'
// let temp = 'new value' //  not allowes
console.log(temp)

const temp2 = 10
// temp2 = 100 // const values cannot be changed




// // block scope and function scope

/** Hoisting and scope questions */

console.log('bar:', bar) 
var foo = 1
console.log(foo, bar) 
bar = 15 
var bar

var foo = 5
 console.log('foo:', foo)
 var foo; // no difference
 console.log(foo)
 var bar = 10;
 var bar = 30; // this line has no significance
 console.log('bar:', bar)
 var baz = 10
 var baz = 12
 console.log('baz:', baz)
 var foo // makes no diff

console.log("jj",jj);
 var jj=10;
 function real() { console.log("I am real. Always run me"); }
 function real() { console.log("No I am real one "); }
 real();
 function real() { console.log("Real slim shady"); }



// var a = 10;
// console.log("#1", a);
// function fn() {
//     var a = 20;
//     console.log("#2", a);
//     a++;
//     console.log("#3", a);
//     if (a) {
//         var a = 30;
//         a++;
//         console.log("#4", a); 
//     }
//     console.log("#5", a); 
// }
// fn();
// console.log("#6", a);

// // value of this
/**
 * when a new function is invoked -> a new execution context is 
 * created -> creation of this for that fn
 * 
 * in global context, a GEC is created , a new 'this' is created
 * and this -> global or window object 
 * 
 * 
 */

 // for functions, value of this depends upon how it was invoked
 // and not where it was invoked

 function fn(name23){
     var aasd = 1000;
     console.log(aasd)
     console.log("this val",this.aasd) // value of this -> window
     console.log(this.name, name23) // global obj
 }

 fn('aaa') // direct invocation

 const person = {
     name:'JS',
     msg: function aa(name){
         console.log(name)
         console.log(this) // current obj
        //  console.log(`${this.name}- ${name} says hello`)
     }
 }

 person.msg('WEb dev') // method invoation

 const rr = person.msg
 function aa(name){
    console.log(this) // current obj
   //  console.log(`${this.name}- ${name} says hello`)
}
 rr() // normal fn invocation -> value of this -> window

// arrow functions
// function square(x){
//     return x * x
// }

// function mul(x,y){
//     let temp = x + y
//     return x * y
// }

// const square = x => x * x


// const mul = (x,y) => {
//     let temp = x + y
//     return x * y
// }

/** 
 * Arrow function do not have a this value of their own
 * it will derive the value of this from a non arrow wrapper/ enclosing
 * function
 * Arrow functions , value of this depends upon where it was 
 * invoked.
 */

const person3 = {
    q1:'aaa',
    msg: function(){
        console.log(this)
        const inner = () => {
            console.log("arrow this",this)
            console.log(this.q1)
        }
        inner()
    }
}

person3.msg()

function Timer(){
    this.seconds = 0
    setInterval(function(){
        console.log(this) // -> window
        console.log(this.seconds)
        this.seconds++
    },1000)
}

function Timer(){
    this.seconds = 0
    setInterval(function(){
        console.log(this) // -> window
        console.log(this.seconds)
        this.seconds++
    },1000)
}
var glbl = 1000
function Timer2(){
    this.seconds = 0
    this.variable = 1999
    setInterval(()=>{
        console.log(this) // -> Timer2
        console.log("gloabl",glbl)
        console.log(this.seconds)
        this.seconds++
    },1000)
}

// const timer2 = new Timer2()

// const timer = new Timer() // obj
var newVal = 100
function aaa(){
    console.log(newVal)
}


function test(){
    console.log(temp)
    const fn = () => {
        //...
    }
    let temp = 10
    if(true){
        let temp = 100 // redeclaration 
        console.log("temp",temp)
    }
    console.log(temp)
}
test()




// // call , apply ,




// // prototypes
// // 1. complimentary dish



// // Prototype is basically an object that has methods and properties that gets attached to your object
// // Prototypes are the mechanism by which JavaScript objects inherit features from one another. 

// // 2. Mom's snacks



// // 3. family is given but friends are chosen
// //The property [[ Prototype ]] is internal and hidden but there are ways to set it.
// // One of the way is to use the special name __proto__ 

// 4. God Element


// Object construnctor function




