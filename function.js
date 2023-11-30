// // so many types of function
// //  Named functions (regular functions)
// // when we make variable inside function block it will not work outside the function. it means the variable has functional scope.

// //Declaring function //parameter
// //  function  // keyword
// // myName(a) // function name // a is parameter here.
// // { } // function block 

// // function myName(a) {  / / in this line "a" is a parameter.
// //     // console.log(abc + " " + 'My name is' + " " + a)
// //     console.log(a) // code inside function block
// // }

// // var abc = "Hello"
// // var name = "Binish Farhan"
// // var num = 123
// // var num2 = 456
// // myName(name, abc) // calling the function.. //argument pass to fucntion // name and abc are arguments.
// // myName(num + num2)

// // practice of passing the data to function.

// // its a simple funciton in which no arguments pass while calling the function and no parameter recieved.. jst call the function it will print name.

// // function name(){
// //     let name = prompt('Wrtie your name')
// //     console.log(`My name is ${name}`)
// // }
// // name()


// // // when passing the data
// // function name(name){

// //     console.log(`My name is ${name}`)
// // }
// // name("Binish")
// // name('farhan')



// //  //  practice
// // function add(a,b){ // a,b are the parameters which recieves values or arguments which is pass to the function when called. 
// //     console.log(`${a} + ${b} = ${a+b}`) // bu using template literal (`backticks`)
// // }
// // add(4,3) //4, 3 are arguments or values which are passing to add function. it is sequential means a=4, b = 3



// // // ANONYMOUS FUNCTION (un named function) always stored in variables

// // var sub = function(a,b){
// //     console.log(`${a} - ${b} = ${a-b}`) // bu using template literal (`backticks`)
// // }
// // sub(4,3)

// //======practice======> 

// // function inputSub(a,b){
// //     if(a > b){
// //         console.log(a-b)
// //     }else{
// //         console.log("enter bigger number first")
// //     }
// // }

// // inputSub(15,2) // calling function and passing an argument to it.

// // // try your luck // PRACTICE

// // var array = ["lipstick", "mascara", "gold", "silver"]
// // function arr(a) {
// //     var res = Math.ceil(Math.random() * array.length - 1)
// //     var win = array[res]
// //     console.log(`you won ${win} `)
// // }
// // arr(array)

// //==== PASSING DATA BACK FROM FUNCTION (RETURN) =====> 
// //  when a function doesn't return anything it returns undefined value.
// // to take retrun from a function is important to do some operations with calling the funciton.

// //=====practice =====
// // function abc(a,b) {
// //     return a + b;
// // }
// // console.log(abc(3,4)); // 7
// // console.log(abc(3,4) + 6); // 13
// // console.log(abc(3,4) * 6); // 42
// // This case is not done when we dont return output from our funciton.

// // function def(a,b) {
// //      console.log(a + b )
// //      return;
// // }
// // def() // we can't console or alert or store this type of funciton becuase it doesnt return anythin we just call it and give arguments.
// // console.log(def(3,4) + 6); // 13 // it will show NaN becuase our function returns nothing but undefined.
// // console.log(def(3,4) * 6); // 42



// //function return when you give any argument to it.
// // we cant write any code after return ..
// // function myFunc(a,b,c){
// //     return a + (b - c)
// // }

// // var reslt = myFunc(12,4,5)
// // var result = myFunc(4,5,6)
// // console.log("🚀 ~ file: function.js:68 ~ reslt:", reslt)
// // console.log(result)


// // to set default value in function 
// // function myFunc(a=2,b=3,c=4){
// //     return a + b + c
// // }

// // alert(myFunc())
// // alert(myFunc(3,4,5));

// // date in 12-10-2023 format using fucntion.
// // function displayDate(a,b,c){
// //     console.log(`${a}-${b}-${c}`)
// // }
// // var date = new Date();
// // displayDate(date.getDate(),date.getMonth()+1, date.getFullYear() )

// // ===== by miss ====
// // function displayDate(){
// //     let date = new Date();
// //     var myDate = (`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`)
// //     document.write(myDate)
// // }
// // displayDate();

// // === to convert temp into C from F;
// // function tempConv(a){
// // //   var tempInFar = +prompt('Enter temperature in Farhenheit')
// //   var tempInC = (a - 32) * 5/9
// //   return  tempInC;  
// // }
// // var res = tempConv(32)
// // alert(res)


// // function abc(){
// //     console.log('i ll run after 5s')
// // }
// // setInterval(abc, 5000)
// // console.log('i will run first than previous line')


// function heartBeat(e) {
//     // var heart = document.getElementById('beat')
//     // var heading = document.getElementById('heading')
//     // heading.style.fontSize = "10px"
//     setInterval(function(){
//         e.style.transform = "scale(1)"
//         // e.style.transform = "scale(1)"
//         e.style.transition = "5s"
//         // e.style.transition = "5s"
        
//     }, 1000)
    
//     setInterval(function () {
//         e.style.transform = "scale(0.75)"
//         // e.style.transform = "scale(0.75)"
//         // e.style.transition = "5s"
//         e.style.transition = "5s"
       
//     }, 2000)
// }


///// ======= self calling funciton =====
(function abc(){
    console.log("my name")
}())


// ======= recursive  function ...( calling itself infinite time) without condition it is wrong way)
// function counting(){
//     console.log("name")
//     counting()
// }
// counting() 

// =======right way to use recursive function======>
function counting(num){
    console.log(num)
    let num2 = num - 1 // store in variable so next time calling in function it wil have variables.
    if(num2 > 0){ // now it print till 1 because of condition. before condition it run in -values.
    counting(num2) }// 
}
counting(10) 

