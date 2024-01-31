// // Object ...

// let personalInfo = {
//     name: "Binish Farooq",
//     email: "binishfarhan89@gmail.com",
//     password: "abc123",
//     age: "34",
//     gender: "female",
//     city: "Karachi",
//     country: "Pakistan"
// }
// console.log("subject" in personalInfo) // to check whether the property is in object or not .. return true or false

// function PersonalInfo(firstName, lastName, age, city) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.city = city
//     this.age = age


// }

// //we can add this getfullname function in prototype of javascript so every time when the object is made only 1 copy of function in prototype will be used.

// let user = "Karachi"
// console.log(personalInfo[user]);

// let obj1 = new PersonalInfo("Binish", "farooq", "34", "karachi")
// let obj2 = new PersonalInfo("farhan", "36", "karachi")
// let obj3 = new PersonalInfo("Fatima", "28", "Lahore")

// // to store method in prtotype.
// PersonalInfo.prototype.getfullname = function () {
//     return this.firstName + " " + this.lastName
// }
// console.log(obj2.getfullname());


// var itemsArray = [
//     {
//         name: "juice",
//         price: "50",
//         quantity: 3,
//     },
//     {
//         name: "cookie",
//         price: "30",
//         quantity: 9,
//     },
//     {
//         name: "shirt",
//         price: "880",
//         quantity: 1,
//     },
//     {
//         name: "pen",
//         price: "100",
//         quantity: 2,
//     }
// ]

// var totalAllPrice = 0;
// var root = document.getElementById("root")
// var res = itemsArray.map(items => {

//     totalAllPrice += items.price * items.quantity
//     return (
//         root.innerHTML += `<h1>The total price of ${items.name} :  ${items.price * items.quantity}</h1>`

//     )
// })

// console.log("🚀 ~ file: quiz3.js:63 ~ totalAllPrice:", totalAllPrice)


// var totalPrice = itemsArray.reduce((acc, num) => acc + num, 0)
// console.log("🚀 ~ file: quiz3.js:65 ~ totalPrice:", totalPrice)


// // for(let i=0; i < itemsArray.length; i++){
// //     var object1 = itemsArray[i].price * itemsArray[i].quantity
// // }
// // console.log(object1)

// var age = 200
// switch(true){
//     case age > 20:
//         console.log("old enough");
//         break;
//     default:
//     console.log("too young");

// }

var number = 200
switch (true) {
    case number > 200:
        console.log("greater");
        break;
    case number < 200:
        console.log("smaller");
        break;
    default:
        console.log("no");
        break;
}

// var num1 = 20
// var num2 = 40
// var opt = "+"
// var ans;
// switch (opt) {
//     case "+":
//         ans = num1 + num2
//         break;
//     case "-":
//         ans = num1 - num2
//         break;
//     case "*":
//         ans = num1 * num2
//         break;
//     case "/":
//         ans = num1 / num2
//         break;
// }
// console.log(ans);

// var date = new Date()
// var day = date.getDay()
// console.log("🚀 ~ day:", day)
// switch (day) {
//     case 1:
//         console.log("monday");
//         break;

//     case 2:
//         console.log("tuesday");
//         break;

//     case 3:
//         console.log("wednesday");
//         break;

//     case 4:
//         console.log("thursday");
//         break;

//     case 5:
//         console.log("friday");
//         break;

//     default:
//         console.log("no weekend");
// }

// function checkCar() {
//     var text;
//     var favCar = prompt("What is your favorite car?");
//     switch (favCar) {
//         case "BMW":
//             text = "German Car"
//             break;
//         case "Ford":
//             text = "American Car"
//             break;
//         case "Peugeot":
//             text = "French Car"
//             break;
//         default:
//             text = "Unknown car name"
//     }
//     document.write(text);
// }
// checkCar();

// function marksRange() {
//     var Marks;
//     var grade = prompt("Enter a fruit name");
//     switch (grade) {
//         case "B":
//             Marks = ">=60 and <=70";
//             break;
//         case "Orange":
//             text = "I am not a fan of orange.";
//             break;
//         case "Apple":
//             text = "How you like them apples?";
//             break;
//         default:
//             text = "I have never heard of that fruit.";
//             break;
//     }
//     document.write(text);
// }
// checkFruit();

var arr = [];
var lengthOfArray = 4
let i = 0
while(i < lengthOfArray){
        var item = prompt("enter the item")
     arr.push(item)
    i++
}
var array = arr.map((item)=>{
    console.log(item);
})

// do{
//     console.log(arr[i]);
//     i++
// }while(i < arr.length)


function myApp(){
    return (
        <button>i'm btn</button>
    )
}
myApp()