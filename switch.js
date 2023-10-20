// ===== USING SWITCH STATEMENTS INSTEAD OF IF ELSE IF ========>

// prog by using switch:
// switch h mjb use krte hain jb hamei 1 cheez ko bht sari cheezo se check krwana ho without condition..
// agr srf true or false ki condition ho tu srf if else use krein
// switch actually if else else if ki jaga use hota hai..
// switch 1 item ko different case k sath use krne k liye hota hai.

// Write a program in which user select menu from card and u have to show its price.

// MENU CARD
// fish 1000, chowmein 400, biryani 300, pasta 500

// var price = 0;
// var menu = prompt("enter menu name");

// USING IF ELSE IF

// if(menu === "fish") {
//     price = 1000
// } else if (menu === "chowmein") {
//     price = 400
// }else if (menu === "biryani") {
//     price = 300
// } else if (menu === "pasta"){
//     price = 500
//     document.write("your bill is ", price)
//  } else {
//     price = 100
// }
// document.write("your bill is ", price)


// USING SWITCH STATEMENT..

// switch (menu) {
//   case "lobster":
//   case "fish":
//   case "fish-burger":
//     price = 1000;
//     break;
//   case "biryani" || "pulao":
//     price = 300;
//     break;
//   case "pasta":
//     price = 500;
//     break;
//   default:
//     price = 100;
// }
// document.write("your bill is ", price);


// =====PRACTICE=====>

// var a = 15;
// switch (true) { //true
//     case a > 12:
//         console.log(">10");
//         break;
//     case a < 12:
//         console.log("11");
//         break;
//     case a == 14:
//         console.log("true");
//         break;
  
// }

// =======PRACTICE======>

// const foo = 5;
// let output = "Output: ";
// switch (foo) {
//   case 0:
//     output += "So ";
//   case 1:
//     output += "What ";
//     output += "Is ";
//   case 2:
//     output += "Your ";
//   case 3:
//     output += "Name";
//   case 4:
//     output += "?";
//     console.log(output);
//     break;
//   case 5:
//     output += "!";
//     console.log(output);
//     break;
//   default:
//     console.log("Please pick a number from 0 to 5!");
// }


// practice exercise

// const foo = 0;
// switch (foo) { // 0
//   case -1:
//     console.log("negative 1");
//     break;
//   case 0: // Value of foo matches this criteria; execution starts from here
//     console.log(0);
//     break
//   case 1: // no break statement in 'case 0:' so this case will run as well
//     console.log(1);
//     break; // Break encountered; will not continue into 'case 2:'
//   case 2:
//     console.log(2);
//     break;
//   default:
//     console.log("default");
// }
// // Logs 0 and 1

// =======PRACTICE =======>

//    USING IF ELSE

// if (activity === "Get up") {
//     console.log("It is 6:30AM");
// } else if (activity === "Breakfast") {
//     console.log("It is 7:00AM");
// } else if (activity === "Drive to work") {
//     console.log("It is 8:00AM");
// } else if (activity === "Lunch") {
//     console.log("It is 12.00PM");
// } else if (activity === "Drive home") {
//     console.log("It is 5:00PM")
// } else if (activity === "Dinner") {
//     console.log("It is 6:30PM");
// }

//       USING SWITCH

// var activity = "LUNCH"
// var newAct = activity.charAt(0).toUpperCase() + activity.slice(1).toLowerCase()
// switch(newAct){
//     case "Get up":
//         console.log("It is 6:30AM");
//         break;
//     case "Breakfast":
//         console.log("It is 7:00AM");
//         break;
//     case "Drive" :
//         console.log("It is 8:00AM");
//         break;
//     case "Lunch":
//         console.log("It is 12.00PM");
//         break;
//     case "Drive home":
//         console.log("It is 5:00PM")
//         break;
//     case "Dinner":
//         console.log("It is 6:30PM");
//         break;
// }

// practice from new book.

// var num = Math.round(Math.random() * 5)
// var userQ = prompt("write your question")
// var answer;
// switch(num){
//     case 1:
//         answer = "after 2 years"
//         break;
//     case 2:
//         answer = "after 5 years"
//     default:
//         answer = "jst w8"
// }

// console.log(userQ)
// console.log(answer)

  
  