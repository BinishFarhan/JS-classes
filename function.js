// so many types of function
//  Named functions (regular functions)

//Declaring function //parameter
//  function  // keyword
// myName(a) // function name
// { } // function block 

// function myName(a) { // in this line "a" is a parameter.
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

// inputSub(15,2) // calling function and passing an argument to it.

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
// function myFunc(a=2,b=3,c=4){
//     return a + b + c
// }

// alert(myFunc())
// alert(myFunc(3,4,5));

// date in 12-10-2023 format using fucntion.
// function displayDate(a,b,c){
//     console.log(`${a}-${b}-${c}`)
// }
// var date = new Date();
// displayDate(date.getDate(),date.getMonth()+1, date.getFullYear() )

// ===== by miss ====
// function displayDate(){
//     let date = new Date();
//     var myDate = (`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`)
//     document.write(myDate)
// }
// displayDate();

// === to convert temp into C from F;
// function tempConv(a){
// //   var tempInFar = +prompt('Enter temperature in Farhenheit')
//   var tempInC = (a - 32) * 5/9
//   return  tempInC;  
// }
// var res = tempConv(32)
// alert(res)

// function displayDate(){
//     let date = new Date();
//     var arr = ["Jan" ,"Feb" , "March" , "April" , "May" ,"June" , "July" , "Aug" , "Sep" ,"Oct" , "Nov" , "Dec" ]
//     var myDate = (`${date.getDate()}-${arr[date.getMonth()]}-${date.getFullYear()}`)
//     return myDate
// }
// var formattedDate = displayDate()
// console.log("🚀 ~ file: function.js:111 ~ formattedDate:", formattedDate)

// function displayArr(){
//     for(i=0; i <arr.length; i++){
//         document.write(arr[i], "<br>")
//     }
// }
// let arr = ["Jan" ,"Feb" , "March" , "April" , "May" ,"June" , "July" , "Aug" , "Sep" ,"Oct" , "Nov" , "Dec" ]
// displayArr(arr)

// to solve ... 
// function daysLeft(date1){
//  var date = new Date()
// //  var nextBday = new Date("21-June-2024")
//  var diff =  date1.getTime() - date.getTime()
//  var res = diff / (1000 * 60 * 60 * 24 * 30)
//  console.log(Math.round(res) , "days are left")
 
// }
// daysLeft(new Date('21-June-2024'))

// for making digital clock. // asynchorunus JS // 
// setTimeOut() // to print prog after .... this time
// setInterval() // repeats task after ever given second 

// setTimeout(function (){console.log('i am in settime out')}, 5000)// console appears after 5 seconds only 1 time
// OR
function showRes(){
    console.log('i am in settime out')
}
setTimeout(showRes, 5000); // never call function jst give name
setInterval(showRes, 1000);// run again and again after every 1 sec

