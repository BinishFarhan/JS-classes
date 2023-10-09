// so many types of function

// // Named functions (regular functions)
//  function myName(a){ //Declaring function //parameter
//     console.log(abc + " " + 'My name is'+" " + a)
 
//  }
//  var abc = "Hello"
//  var name = "Binish Farhan"
//  myName(name , abc) // calling the function.. //argument

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


// function inputSub(a,b){
//     if(a > b){
//         console.log(a-b)
//     }else{
//         console.log("enter bigger number first")
//     }
// }

// inputSub(15,2)

// try your luck // PRACTICE

var array = ["lipstick" , "mascara", "gold", "silver"]
function arr(a){

    var res = Math.ceil(Math.random()*array.length-1)
    
    var win = array[res]
    console.log(`you won ${win} `)
}
arr(array)

