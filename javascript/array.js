// ==== array is collection of data =====>
// ======= ARRAY ====== use length pop and push..

// var students = ['faria' , 'Maria' , 'atrooba' , 'hania']

// console.log(students)

// students

// ======= PRACTICE ARRAY AND ITS METHOD =======

// var shoppingList = ['Milk' , 'Bread' , 'Apples' ]
var shoppingList = ['Milk' , 'Bread' , '' , '' , 'Bread1' , 'Apples1' ,'Milk2' , 'Bread2' , 'Apples2','Milk3' , 'Bread3' , 'Apples3' ]
// console.log(shoppingList);
// console.log(shoppingList.length); // show the length of array .( how many elements present in array)
// shoppingList[2] = 'Banana' // updating or modify element.
// shoppingList[3] = 'yougurt' // it will add element at the end because original array hav only 0 , 1,2 elements. 
// console.log(shoppingList);
// shoppingList.pop(); // dlt element from last
// console.log(shoppingList);
// shoppingList.push('Mango'); // add element in last
// console.log(shoppingList.length);
// console.log(shoppingList.length - 1); // to find the no of  element in large arrays. 
// console.log(shoppingList[11]);
// console.log(shoppingList);

// for counting length start from 1 not from 0 and empty elements will not count.

// to find the index no of last element in large arrays.

// var lastElement = shoppingList[shoppingList.length - 1];
// console.log("🚀 ~ file: array.js:32 ~ lastElement:", lastElement)

// var someElement = shoppingList[1 + 1];
// we can insert in - values it will add at last but with given index no. -1 : lipstick. 


// ====== SPLICE FUNCTION =====

// IT ADD OR REMOVE FROM WHERE DO WE WANT.
// splice (index no, count(to dlt), )
// splice syntax
// arrayname.splice(index no, count, " " . .........)

 var count = [1,2,3,6,7,8];
  console.log("🚀 before splice", count)
  var rtn = count.splice(0,3, 6 , 100,"karachi");
  console.log("🚀 ~ file: array.js:43 ~ rtn:", rtn)
  console.log("🚀after splice:", count)

// //  count.splice(8,0,9,10);
//  var rten = count.push(9, 10);
//  console.log("🚀 ~ file: array.js:49 ~ rten:", rten)
//  console.log("🚀 after push", count)

console.log("🚀 ~ file: array.js:52 ~ count:",count.join(" "))

//  console.log(count);


//====ARRAY METHOD
// var arr = ["farooq", "binish", "lamna"]

// 1.join (to convert array into string)
// console.log("🚀 ~ file: array.js:62 ~ join:", join)
// console.log("🚀 ~ file: string.js:247 ~ arr:", arr.join(":"))

// Reverse...
// console.log("🚀 ~ file: string.js:247 ~ arr:", arr.reverse())

// Sort..
// console.log("🚀 ~ file: string.js:247 ~ arr:", arr.sort())

// concat array.

// var arr = [1,2,3,4]
var arr2 = [5,6,7]
// var newArr = arr.concat(arr2)

//  DELETE at specific index leaving it place undefined

delete arr2[1]
console.log("🚀 ~ file: array.js:38 ~ newArr:", arr2)




