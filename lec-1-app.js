
//Data types
// 1. string (alphabets) ex: "abc" or 'abc' (inverted commas necesseary)
// 2. integer (numbers) without commas ex: 123, 1, 3 

// ;terminator should be used at every line
// + sign perform 2 functions in JS . one is adittion and 2nd is concat(merging).
// two methods to give data 1. hard code 2. variables
//1.hard code (in this we direct give message)

alert('Binish Farooq') // hard code (direct message)
alert(123)

//2. variables ( used to store code & then these variables used to perform function )

var fatherName = 'Farooq Ahmed' 
var age = 33

alert(fatherName) // ( var put in () without commas)
alert(age)


//console.log shows output of the funtions performed in JS file.
// we can also type in console tab while inspect.
// ++ means 1 increament. 

//variables
var name = "Binish Farooq";
var age = 32;
var num2 = 10;
var num3 = 12;

//output will check in inspect element console tab.
console.log("My name is", name); // output : My name is Binish Farooq
console.log("My age is", age); //output : My age is 32
console.log("after 2 years, i'll be", age + 2); // output: after 2 years, i'll be 34 

//post-increament ( ++ = 1 increament, but in post increament number will increase next after 1st step)
console.log("after three years, i'll be", age++ + 2) // output: after three years, i'll be", 34
console.log("after three years, i'll be", age + 2) // now in this step "age" = 33 because of post-increament so the output is 35
//pre-increament
console.log("after three years, i'll be", ++age + 2) // in pre-increament the 1 add to age directly in 1st step so the ouput will be 35

//for line breaking in basic JS  (\n)

// console.log( 'Binish Farooq \n farooq Ahmed');
// console.log(" num2 = " + num2 + " num3 = " + num3);


//for line breaking in new java ES-6   back tick(`).  ${} used to show that is variable to perform addition function.
console.log(`Binish Farooq 
Farooq Ahmed`);
console.log(`num2 =  ${num2} 
num3 =  ${num3} , 
sdfdsflakdsjfkj
ksdjflkdf`)




// console.log("My name is", name);
// console.log("My age is", age);
// console.log("after 2 years, i'll be", age + 2);
// //post-increament
// console.log("after three years, i'll be", age++ + 2)
// console.log("after three years, i'll be", age + 2)
// //pre-increament
// console.log("after three years, i'll be", ++age + 2)