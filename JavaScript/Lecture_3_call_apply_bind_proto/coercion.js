console.log(2+2)
console.log('2'+2)
console.log("6"/"2") // implicit coercion

console.log(123+'scaler')

const str = '123'
console.log(Number(str)) // explicit coercion
console.log(Number(null)) // 0
console.log(Number(undefined))
console.log(Number(true))
console.log(null == '')


/**
 * Rules of GAme
 * 1. only 3 types of conversion - to string, to boolean , to number
* 2. String conversion
    * Binary + operator and one operand is string
    * eg. 2 + '2' -> '22'
    * 
3. Numeric Conversion
    * when using comparison operator ( < , > , <=, >=)
    * when using arithmetic operator ( + , -, / , %, *)
    * when using unary operator 
    * when using loose quality operator ( ==, != )
    * eg +'123' -> 123
    * 123 != '456' // false
    * 4 > '5' // false
    * null / 5 -> 0

4. SPL rules

    * null equals only null or undefined and nothing else
    * NaN does not equal to anything not even itself
    * null == 0 -> false
    * udefined == undefined // true

    */
// quizzes
    console.log("1:",true + false) // 1
    console.log("2:",12 / "6") // 2
    console.log("3:",'number' + 1 + 2) // number12
    console.log("4:", 'foo' + (+'bar')) // fooNaN

    console.log(+"asdasd")
    console.log("foo" + NaN)



// extra quizzess added

/**
 * ‘true’ == true -> ??
false // ‘true’ becomes NaN and NaN == true is false

null == ‘’ -> ??
false 

“2” - “3” -> ??
-1

1 + “-2” -> ??
“1-2”

1 + true -> ??
2

1 + null -> ??
1
1 + undefined -> ??
NaN

"1" + null -> ??
"1null"

"1" + undefined -> ??
"1undefined"

var a = +"abc"
console.log( a == a )
false // +”abc” -> NaN and NaN is not equals to even itself 
 */
