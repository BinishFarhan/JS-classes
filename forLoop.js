// var userInput = +prompt('enter your table');
// var userInput2 = +prompt('upto which number you want table');

// for(let i = 1; i <= userInput2; i++){
//     console.log(userInput + "*" + i + "=" + userInput * i)
// }


// var userInput = prompt('Enter your city')
// var cities = ['dubai', 'USA', 'uae', 'karachi', 'iran' , 'mexico']
// var flag = true
// for(let i = 0; i < cities.length; i++){
//     if(cities[i] === userInput){
//         flag = false
//         console.log('city found')
//         break;
        
//     }
// }

// if(flag){
//     console.log('city not found')
// }

// var students = ["MAHAM","Laiba", "Ayesha", "Atrooba", "binish", "Maria"]
// var progress = ["beginner", "intermediate", "advance", "pro"];
// // for students => progress
// for (let i = 0 ; i < students.length; i++){
        
//     for(let j = 0; j < progress.length; j++){
//         console.log(students[i]+ " " +progress[j])
//     }
// }



// for(let i = 1 ; i <= 5 ; i = i++){
    
//     for(let j = 1 ; j < 5 ; j++){
//         console.log("hello world")

//     }

//     document.write( '<br>');
// }


// for(var i = 1 ; i <= 10 ; i++){
//     console.log('i = ' , i);
// }

// var cities = ['dubai', 'USA', 'uae', 'iran', 'karachi' , 'mexico']
// var cityToCheck = prompt('enter city')
// for (let i = 0; i <= cities.length - 1; i++) {
//     if(cityToCheck === cities[i]){
//     console.log ("city found")}
// }

// we use let in for because we change the value of i again and again.. const will not the change the value
// var num = [1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i <= num.length-1; i++){
//     num[i]= num[i]+1
//     console.log(num[i])
// }


// var num = [1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i <= num.length-1; i++){
//     console.log(i  , num[i] + 1)
// }

// console.log(num)

// var cities =["NY","LA", "CG", "ISB", "RWP", "HT", "LH"]
// for(let i=0; i<=cities.length-1; i++){
//     cities[i] +=  " city";
// }
// console.log(cities);



// }

// var arr = ['Ghous' , 'Ahmed' , 'Zain'];

// for(let i = arr.length-1 ; i >=0; i--){
           
//     console.log(arr[i])
// }





// var arr = [];
// var userInput0 = prompt("Enter item for index 0")
// var i_1 = prompt("Enter item for index 1")
// var i_2 = prompt("Enter item for index 2")
// var i_3 = prompt("Enter item for index 3")
// var i_4 = prompt("Enter item for index 4")
// var i_5 = prompt("Enter item for index 5")
// arr.push(userInput0, i_1, i_2, i_3, i_4, i_5);

// console.log(arr)

// for(let i=0; i < arr.length; i++){
//        console.log(arr[i])
//     }

// var num= [];    
// for(let i=1; i <= 15; i++){
//     num.push(i)
// }    
// document.write(`<h1>Counting</h1> 
// ${num}`)

// var num2= [];    
// for(let i=10; i >= 1; i--){
//     num2.push(i)
// }    
// document.write(`<h1>Reverse Counting</h1> 
// ${num2}`)

// var even= [];    
// for(let i=0; i <= 20; i+=2){
//     even.push(i)
// }    
// document.write(`<h1>Even:</h1> 
// ${even}`)

// var odd= [];    
// for(let i=1; i <= 20; i+=2){
//     odd.push(i)
// }    
// document.write(`<h1>Odd:</h1> 
// ${odd}`)

// var series= [];    
// for(let i=2; i <= 20; i+=2){
//      series.push(i + "k")
     
//     }    
// document.write(`<h1>Series</h1>
//  ${series} `)
    
   
    // var arr=["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to our bakery! What do you want Sir?");
// var flag = true
// for(let i = 0; i < arr.length; i++){
//     if(userInput.toLowerCase() === arr[i]){
//         flag = false
//         console.log(`${userInput} is available at index of ${i} in our bakery`)
//     }
//     break;
// }

// if(flag){
//     console.log(`We are sorry. ${userInput} is not available in our bakery`)
// }


// // //======QUESTION 9====
// var arr = [34, 12, 78, 91, 12];
// var largNum = arr[0];
 

// for(let i=0; i <arr.length; i++ ){
//     if(arr[i] > largNum){
//         largNum = arr[i]
        
//     }
// }
// document.write(`Array Items: ${arr} <br>
// The largest number is ${largNum}`)

// //======QUESTION 10====
// var arr = [24, 53, 78, 91, 12,1];
// var smallNum = arr[0];

// for(let i=0; i <arr.length; i++ ){
//     if(arr[i] < smallNum){
//         smallNum = arr[i]
        
//     }
// }
// document.write(`Array Items: ${arr} <br>
// The smallest number is ${smallNum}`)

// //======QUESTION 12====
// var arr = [24, 53, 78, 91, 12,1];
// var noToCheck = arr[0]
// var smallNum;
// var largNum;

// for(let i=1; i < 100; i++ ){
    
//     if(i*5 <= 100 ){
//         console.log(i*5)
//         break
//     }
// }

// document.write(`Array Items: ${arr} <br>
// The smallest number is ${smallNum} <br>
// The largest number is ${largNum}`)


// for(let i=1; i < 100; i+=10){
//     for(let j=2; j <= 10; j++)
//     document.write(i ,j ,"<br>")
// }



// // var arr = [["ghous" , "zain"],['khan', 'amjad']];
// // for(let i = 0; i < arr.length; i++){
// //     for(let j = 0; j < arr[i].length; j++){
// //         console.log(arr[i][j])
// //     }
// }


// const arr = [2,3,4,5,6,7,45,23,66,88];
// console.log("🚀 ~ file: forLoop.js:175 ~ arr:", arr)
// const odd =[];

// for(let i = 0; i <= arr.length-1; i++){
//     if(arr[i] % 2 !== 0){
//         odd.push(arr[i])
    
//     }
// }
// console.log("🚀 ~ file: forLoop.js:176 ~ odd:", odd)