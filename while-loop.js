// difference between while and for is :
// in for loop we know at what length it has to run.
// in while loop we dun know how long it will run.
// i is a counter or pointer.
// in while loop:
// we initilize i outside body .  {} are body of while loop.
//  var i = 0; // initilization
//  while (i <=3) { // condition
//     alert('hello world') // logic
//     // i++ // increament
//  }
// if we will not give i++ increament the while loop will 
//run infinite because i ki value update nhi ho rhi wo 0 hi
// rahega is liye wo inifinite chle ga.

//  let i = 0;
//  while( i < 10){
//     console.log(i)
//     i++;
//  }

// form new book:
// let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
// let notFound = true;
// while (notFound && someArray.length > 0) {
//  if (someArray[0] === "Louiza") {
//  console.log("Found her!");
//  notFound = false;
//  } else {
//  someArray.shift(); //remove first one
//  }
// }


// for practice

// to search any element in array using while.
// let someArray = ["Mike", "Antal", "Marc", "Emir", "Jacky"];
// var i = 0;
// while(i < someArray.length){
//      console.log(anyArray[i])
//     if(someArray[i] === "Antal"){
//         console.log('Found her!')
//         break;
//     }
//     i++
// }

// print the table.
// var table = prompt(`Enter a number of required table` )
// var i = 1
// while(i <= 10 ){
//     console.log(`${table} x ${i} = ${table*i}`)
//     i++
// }

// guess a num. give user chance to enter the num.
// if num is wrong then let him input again until 
// his guess is right

// // method 1
// var luckyNum = 5;
// let notFound = true
// while(notFound) {
//     var guess = +prompt("enter ur guess 1 - 5")
//     if(guess === luckyNum){
//         document.write(" you guessed the number!")
//         notFound = false
//     }
// }
// // method 2
// const luckyNum = 3;
// let guess = +prompt("Enter lucky number 1 - 10");

// while(guess !== luckyNum){
//     guess = +prompt("Enter lucky number 1 - 10");
//     if(guess !== luckyNum)  alert("try again")
// }
// if (guess === luckyNum){
//     document.write("Your guess is right")
// }


// by me..
var uI = +prompt('Enter a number')

while (uI !== "5") {
    alert('Try again')
    uI = prompt('Enter a number')
    if (uI === "5") {
        alert('You guessed')
    }
}

