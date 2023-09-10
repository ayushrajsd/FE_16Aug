// function
function abc(){
   console.log("hii")
//    return 5
}
console.log(abc)

// semicolon problem
function aaa(){
    return;
    "hiii"
}
console.log(aaa())




// object ->  collection of key:value pairs
console.log([])
const person = {
    name: 'Dhoni',
    nickname:'Mahi',
    // dob: '07-July',
    // 'best matches': ['WC',],
    // address: {
    //     country:'India',
    //     state:'Jharkhand',
    //     pincode: 1234569
    // },
    val:'some-key'
}

console.log(person.nickname) // object dot notation

// square bracket notation 
console.log("square bracker")
for(let val in person){
    console.log(person[val], person.val)
}


// key -> number, string
//value -> any valid JS 

// JS object -> represent an entity



// console.log("name is ", cap.name);
// // sqaure bracket
// console.log("last name is ", cap['last Name']);

// cap.sayHi();



let cap = {
    name: "Steve",
    age: 34,
    isAvenger: true,
    key: "hello"
}
// for (let key in cap) {
//     console.log(key, " ", cap[key], " ", cap.key);
// }


// .operator -> literal operator 
// cap.key

// [] -> search for the value of the variable inside it 


