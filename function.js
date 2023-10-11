// so many types of function
//  Named functions (regular functions)

//Declaring function //parameter
//  function  // keyword
// myName(a) // function name
// { } // function block 

// function myName(a) {
//     // console.log(abc + " " + 'My name is' + " " + a)
//     console.log(a) // code inside function block
// }

// var abc = "Hello"
// var name = "Binish Farhan"
// var num = 123
// var num2 = 456
// myName(name, abc) // calling the function.. //argument pass to fucntion
// myName(num + num2)

//  //  practice
// function add(a,b){
//     console.log(`${a} + ${b} = ${a+b}`) // bu using template literal (`backticks`)
// }
// add(4,3)



// // ANONYMOUS FUNCTION (un named function) always stored in variables

// var sub = function(a,b){
//     console.log(`${a} - ${b} = ${a-b}`) // bu using template literal (`backticks`)
// }
// sub(4,3)

//======practice======> 

// function inputSub(a,b){
//     if(a > b){
//         console.log(a-b)
//     }else{
//         console.log("enter bigger number first")
//     }
// }

// inputSub(15,2) // calling function

// // try your luck // PRACTICE

// var array = ["lipstick", "mascara", "gold", "silver"]
// function arr(a) {

//     var res = Math.ceil(Math.random() * array.length - 1)

//     var win = array[res]
//     console.log(`you won ${win} `)
// }
// arr(array)

//==== PASSING DATA BACK FROM FUNCTION (RETURN) =====>

//function return when you give any argument to it.
// we cant write any code after return ..
// function myFunc(a,b,c){
//     return a + (b - c)
// }

// var reslt = myFunc(12,4,5)
// var result = myFunc(4,5,6)
// console.log("🚀 ~ file: function.js:68 ~ reslt:", reslt)
// console.log(result)


// to set default value in function 
function myFunc(a=2,b=3,c=4){
    return a + b + c
}

alert(myFunc())
alert(myFunc(3,4,5))

