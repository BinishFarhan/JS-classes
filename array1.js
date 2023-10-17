//  var city = prompt('Enter your city' , 'Karachi');
//  var gender = prompt('Enter your gender' , 'Male');
//  var appliedFor = prompt('applied for Dubai', 'Yes'); 
//  var allowedCity = ['karachi', 'lahore' , 'islamabad'];

//  if( (city.toLowerCase() === allowedCity[0] || city.toLowerCase() === allowedCity[1]
//  || city.toLowerCase() === allowedCity[2] ) &&  gender.toLowerCase() === 'male' && appliedFor.toLowerCase() === 'yes')
//  {
//      console.log('eligible for job')
//  } else{
//      console.log('Not eligible')
//  }

// var city = prompt('Enter your city' , 'Karachi');
// var gender = prompt('Enter your gender' , 'Male');
// var appliedFor = prompt('applied for Dubai', 'Yes'); 
// var allowedCity = 'karachi';

// if( city.toLowerCase() === allowedCity &&  gender.toLowerCase() === 'male' && appliedFor.toLowerCase() === 'yes'){
//     console.log('eligible for job')
// } else{
//     console.log('Not eligible')
// }


/// Topic Array
// splice and slice work in sequence

// var pets = ['dog' , 'cat' , 'fly' , 'bug' , 'butterfly' , 'insects'];
// var wildAnimals = pets.slice(-1)
// console.log("🚀 ~ file: array1.js:31 ~ wildAnimals:", wildAnimals)
// console.log("🚀 ~ file: array1.js:30 ~ pets:", pets)
// pets.splice(1 , 1 , 'bug');
// console.log("🚀 ~ file: array1.js:34 ~ pets:", pets)
// // when required last 1 give -2 

// console.log(wildAnimals);

// var fruits = ['oranges' , 'banana' , 'apple' , 'cherry' , 'figs' , 'grapes' , 'mango' , 'watermelon' , 'melon'];
// var likedFruits = fruits.slice(2, 4) 
// console.log("🚀 ~ file: class-21-sep-23.js:11 ~ likedFruit:", likedFruits)



//=======FOR % =====





// var math = +prompt("Enter your Obtained Marks in Maths");
// if (math <= 100 && !(math <= 0)) {
//    var english = +prompt("Enter your Obtained Marks in english");
//     if (english <= 100 && !(english <= 0)) {
//         var urdu = +prompt("Enter your Obtained Marks in urdu");
//         if (urdu <= 100 && !(urdu <= 0)) {
//             var sum = ((math + english + urdu) / 300) * 100 
//             if(sum >= 80){
//                 alert('A+')
//             }else if( sum >= 70 && sum < 80 ){
//                 alert('A');
//             }else if(sum >= 60 && sum < 70){
//                 alert('B');
//             }else if(sum >= 50 && sum < 50){
//                 alert('C');
//             }else {
//                 alert('Fail');
//             }
//         } else {
//             alert('Please Enter a valid no between 0-100');
//         }
//     } else {
//         alert('Please Enter a valid no between 0-100');
//     }
// } else {
//     alert('Please Enter a valid no between 0-100');
// }


//
// var sum = math +  english + urdu
//
// var percentage = sum/totalNo * 100

// if(percentage >= 80){
//     alert('A+');
// }
// else if (percentage >= 70 && percentage < 80){
//     alert('A');
// }
// else if (percentage >= 60 && percentage < 70){
// alert('B');
// }
// else if ( percentage === 0 ){
//     alert('Error');
// }
// else {
//     alert('fail');
// }
// var num1 = +prompt('Enter your no')

// if(num1 % 5 === 0 || num1 % 11 === 0  ){
//     alert ('correct')
// }

// console.log(1 >= "1")


// =======Practice ====

// Question 1 ====

// var myArr = [];

//=== Question 2 
// var myArray = {
//     0: 'Apple',
//     1: 'kj'
// }


// == Question 3 ====

// var strngArray = ['karachi', 'islamabad' , 'lahore'];
// console.log("🚀 ~ file: array.js:107 ~ strngArray:", strngArray)

//====Q 4 ===

// var numArray = [25 , 50 , 75, 100];
// console.log("🚀 ~ file: array.js:111 ~ numArray:", numArray)

//===Q 5===

// var boolArray= [true , false];
// console.log("🚀 ~ file: array.js:115 ~ boolArray:", boolArray)


 
//== Q6 == 
 
// var mixedArray = ['Binish' , 'Farhan' , 2019 , true ];
// console.log("🚀 ~ file: array.js:122 ~ mixedArray:", mixedArray)

//==Q7 ===

// var mobNetwork = ['Ufone' , 'Jazz' , 'Telenor' , 'Zong'];

//== Q8 ==

// var eduArray = ['SSC' , 'HSC' , 'BCS' , 'BS' , 'BCOM' , 'MS' , 'M.PHIL' , 'PHD'];
// console.log("Qualifications" , '\n' ,'1) ' ,  eduArray[0]
// , '\n' ,'2) ' ,  eduArray[1]
// , '\n' ,'3) ' ,  eduArray[2]
// , '\n' ,'4) ' ,  eduArray[3]
// , '\n' ,'5) ' ,  eduArray[4]
// , '\n' ,'6) ' ,  eduArray[5]
// , '\n' ,'7) ' ,  eduArray[6]
// , '\n' ,'8) ' ,  eduArray[7]);

//===Q9==

// var movies2015 = [];
// movies2015[0] = 'age of Ultron';
// movies2015.push('Spectre' , 'Jurassic World' , 'Inside Out')
// console.log("Top movies of 2015" 
// , '\n' ,'1) ' ,  movies2015[0]
// , '\n' ,'2) ' ,  movies2015[1]
// , '\n' ,'3) ' ,  movies2015[2]
// , '\n' ,'4) ' ,  movies2015[3]
// );

// console.log('Length of the Array: ' ,  movies2015.length)

//===Q10===

// var fv8Cars = ['Audi' , 'Volvo' , 'Ford' ,'Lamborghini'];
// console.log("🚀 First Index of the array: ", fv8Cars.indexOf('Audi'));
// console.log("🚀 Car at first index of the array: ", fv8Cars[0]);
// console.log("🚀 last Index of the array: ", fv8Cars.length - 1);
// console.log("🚀 Car at last Index of the array: ", fv8Cars[fv8Cars.length-1]);

//====Q11=====

// var stdNames = ['Fatima' , 'Noor' , 'Umaima'];
// var scoreOfStd = [320 , 230 , 480];

// console.log('Score of' , stdNames[0] , 'is' , scoreOfStd[0] , '.', 'Percentange : ' , (scoreOfStd[0]/500*100), '%');
// console.log('Score of' , stdNames[1] , 'is' , scoreOfStd[1] , '.', 'Percentange : ' , (scoreOfStd[1]/500*100), '%');
// console.log('Score of' , stdNames[2] , 'is' , scoreOfStd[2] , '.', 'Percentange : ' , (scoreOfStd[2]/500*100) , '%');

//====Q12====
// var colorNames = ['blue' , 'red' , 'yellow'];
// document.write(' Array: ',colorNames, '<br>')
// // var color1 = prompt('Which color you want to add in begining');
// // colorNames.unshift(color1);
// // document.write(" Array with added color in begining: ",colorNames, '<br>');
// // var color2 = prompt('Which color you want to add to the end');
// // colorNames.push(color2);
// // document.write("Array with added color in end: ",colorNames , '<br>');
// // colorNames.push('Grey' , 'black');
// // document.write("Array with two added color in end: ",colorNames , '<br>');
// // colorNames.shift();
// // document.write(" Array with first color deleted: ",colorNames , '<br>');
// // colorNames.pop();
// // document.write(" Array with last color deleted: ",colorNames , '<br>');
// // var position = prompt('write the index on which you want to add color');
// // var color3 = prompt('write the color name on desired index')
// // colorNames.splice(position , 0 , color3)
// // document.write(" Array with added color on desired index: ",colorNames , '<br>');
// var positionDlt = prompt('write the index on which you want to dlt color');

// colorNames.splice(0 , positionDlt )
// document.write(" Array with added color on desired index: ",colorNames , '<br>');




//======Q13==

// var score = [ 'Audi' , 'Volvo' , 'Ford' ,'Lamborghini']

// document.write(score)
// var copied = score.slice(2,3)
// document.write(copied)

