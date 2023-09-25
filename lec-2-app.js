//revision of last class
var name = "Binish Farooq ";
var batchNo = 10 ;
var course = " Web and app development ";

// alert(`name    batchNo   course`)


// var percentage = 20;
// var totalQuestion = 40; 
// var res = percentage/100*totalQuestion ;


// console.log(percentage / 100* totalQuestion);


// console.log("I got " , percentage , "%" , "and have done" , res , "correct answer")

var percentage = prompt("Enter your % ");
var totalQuestion = prompt("Total No. of Question "); 
var res = percentage/100*totalQuestion ;

console.log("I got " , percentage , "%" , "and have done" , res , "correct answer")

document.write("I got " + percentage + "%" + " " + "and have done" + " " + res , "correct answer")