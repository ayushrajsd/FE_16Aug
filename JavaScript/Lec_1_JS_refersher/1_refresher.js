var message = "Hello"
// var let and const

let number = 12
let number2 = 12.345

console.log(0.1+0.2) // tricky JS interview ques

// Spl numeric values

console.log(11/0) - //Infinity
console.log("string"/100) // NaN -> Not a number

console.log("Ambani's net wrth",100_000_000_000 + 100_000)
console.log("Ambani's net wrth",1e11)
console.log("millionth of second",1e-6)

// ********** number ->  64 bit representation
// -2^53-1 to 2^53+1

// bigint -> 
console.log(1n)
console.log(typeof 1n)


//  *********strings ********

var msg = 'hello'
var hi  = "hiii"

const activeUsers = 1000
let msg2 = `There are ${activeUsers} users online`

console.log(msg2)


// no difference between single quotes and double quotes


// template strings;

const boolVal = false
// if(x > y){

// }

//****************null***/

// null, undefined -> empty  -> undefined -> js
// null -> empty value -> user defined

var a 
console.log("checking val of a=",a)
a = 10
console.log("checking val of after assigning=",a)

const placeholder = null



// ***********typeof Operator***********************

var val1 = 12
console.log("typeof val1",typeof val1)

var val2 ="hiii"
console.log("typeof val2",typeof val2)

//  it is a bug 
console.log("type of null",typeof null)

// type id - 000 ______ ( type indicator for object)
// 001 -> integer
// 002 -> string

// if(typeof variable === 'object' && variable !== null){
//     ...typeof.
// }


// typeof array 

const arr = [1,2,"strh",function(){}]
console.log(arr)
console.log(typeof arr) // not a bug

// correct way to check whether you are recieving array or object
console.log(Array.isArray(arr))





function gp(){
    var a = 10
    function parent(param1){
        var b = 20
        function child(){
            var c = 30
            console.log(a+b+c+param1)
        }
        child()
    }
    parent(40)

}
gp()




function abc(){
    var a = 10
    if(true){
        var a = 20
        //
    }
    console.log(a)
}
abc()












