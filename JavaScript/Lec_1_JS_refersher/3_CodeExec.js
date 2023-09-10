
var a = 1
function abc(){
  // var b = undefined
  console.log(b)
  var b = 2
  function inner(){
    var c = 3
    function innerMost(){
      var d = 4
      console.log(a+b+c+d)
    }
    innerMost()
  }
  inner()

}
abc()

// Code Excution : always exec in EC
    // GLobal code -> GEC
    // insidee fn -> own EC

// code execution
        // 1.  EC creation
                // 1.a Hoisting -> memory allocation
                                // variable -> undefined;
                                // fn -> get it's memory allocated
                // 2. global -> browser -> window/nodejs-> global-> features
                // 3. outer scope-> outer var
                // 4. this-> always calculated
        //  2. EC Code execution


// console.log("a",a);
// var a=10;
// real();
// function real() { console.log("I am real. Always run me"); }
// function real() { console.log("No I am real one "); }
// function real() { console.log("Real slim shady"); }

// console.log("a", a);


/**
 * Q. Hoisting
 * console.log(‘bar:’, bar) 
bar = 15 
var foo = 1
console.log(foo, bar) 
var bar
 */

 /**
  *  var foo = 5
 console.log(‘foo:’, foo)
 var foo;
 var bar = 10;
 var bar;
 console.log(‘bar:’, bar)
 var baz = 10
 var baz = 12
 console.log(‘baz:’, baz)
  */

  /**
   * function foo() {
    function bar() {    // overridden during compilation
      return 5
    }
    return bar()
    function bar() {
      return 10
    }
  }
 console.log(foo());
   */




// js -> logic 
// feature -> environment -> nodejs, browser


// let  a=10;
// function fn(){
//     console.log("a",a);
// }
// fn();