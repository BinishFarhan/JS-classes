// 
// its a method in which we use variable to store our answer
var arr = [2,3,4,5,'f', 't', 'r', "alkdjf"]
let count = 0
// // for(let i = 1; i<=arr.length; i++){
// //  count++;
// //  // count = count + 1
// //  // count += count
// // }
//  // to get know the length of array without using arr.length .. advanced for loop
// for(const item in arr){
//     count ++
// }
// console.log("length of arr =" , count)


var arr = [2,3,4,5,'f', 't', 'r', "alkdjf"]
for(let i = 1; i<= arr.length; i++){
 lengthOfArr = i
}
console.log("length of arr =" + lengthOfArr)

// solution 2
// var a = [1,3,'a', 'b', 'f', 'a'];
// var storeA = 0
// for(let i = 0; i < a.length; i++){
// if(a[i]=== 'a'){
//     storeA = storeA + 1
// }

// }
// console.log(storeA)

// //=== Question 3
// var numberArr = [1,3,'a', 'b', 'f', 'a']
// for(let i = 0; i< numberArr.length; i++){
//     var type = typeof(numberArr[i])
//     console.log(type)
// }

// //=== Question 3 by mam
// var numberArr = [1,3,'a', 'b', 'f', 'a']
// var count = 0;
// for(let i = 0; i < numberArr.length; i++){
// if(typeof numberArr[i] === 'number' )
//     count++
// }

// if(count > 0 ) console.log(`the given array has ${count} numbers`)
// else console.log('no number in array')

// nested loops srf boht xrori wqt pr lgain. inc. nested loop will inc. complexity of program.

// // ===Question 4===
// var students= ['faiza' , 'umaima' , 'nadia'];
// for(let i = 0; i < students.length; i++){
//     console.log(`Good Morning ${students[i]}`)
// }

// agr loop mai aur if mai sirf 1 line ka code likhna hai tu without {} k likh skte hian..
// laikin agr 1 se ziyada line hogi to wo count nhi hogi loop mai ya if mai .. phir wo alag se count hogi..


// var numberArr = [2,2,10];
// var count = 0
// for(let i = 0; i< numberArr.length; i++){
//     count = count + numberArr[i];
// }
// console.log(`total of numberArr =  ${count}`)

// var userInput = prompt(`Enter today's temperature`) 
// if(userInput >= 25){
//     console.log('Its too hot')
// }else if(userInput <= 15 && userInput > 0){
//     console.log(`It's cold`);
// }else if(userInput <= 0 ){
//     console.log(`It's freezing`)
// }

// var price = [500 , 50, 200];
// var increasedPrice = [];
// for(let i = 0; i < price.length; i++ ){
//    var percent = price[i]*0.1
//    var totalPrice = percent + price[i]
//    increasedPrice.push(totalPrice)

   
   
// }
// console.log("originalprice" , price)
// console.log("price after 10% increament" , increasedPrice)

// var price = [500 , 50, 200];
// console.log("originalprice" , price)

// for(let i = 0; i < price.length; i++ ){
//     var percent = price[i]*0.1
//    price[i] = percent + price[i]
// }
// console.log("price after 10% increament" , price)