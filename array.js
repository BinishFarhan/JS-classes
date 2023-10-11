// ======= ARRAY ====== use length pop and push..

// var students = ['faria' , 'Maria' , 'atrooba' , 'hania']

// console.log(students)

// students

// ======= PRACTICE ARRAY AND ITS FUNCTION =======
// var shoppingList = ['Milk' , 'Bread' , 'Apples' ]
// var shoppingList = ['Milk' , 'Bread' , 'Apples' , 'Milk1' , 'Bread1' , 'Apples1' ,'Milk2' , 'Bread2' , 'Apples2','Milk3' , 'Bread3' , 'Apples3' ]
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
// console.log(shoppingList [1 + 1]);

// for counting length start from 1 not from 0 and empty elements will not count.

// to find the index no of last element in large arrays.

// var lastElement = shoppingList[shoppingList.length - 1];

// var someElement = shoppingList[1 + 1];
// we can insert in - values it will add at last but with given index no. -1 : lipstick. 


// ====== SPLICE FUNCTION =====
// IT ADD OR REMOVE FROM WHERE DO WE WANT.
 // splice (index no, count(to dlt), )
 // splice syntax
 // arrayname.splice(index no, count, " " . .........)

 var count = [1,2,3,6,7,8];
 count.splice(3,0, 4 , 5);
//  count.splice(8,0,9,10);
 count.push(9, 10);

 console.log(count);


//array method
 //join (to convert array into string)

 var arr = ["farooq" , "binish" , "lamna"]
console.log("🚀 ~ file: string.js:247 ~ arr:", arr.join())
console.log("🚀 ~ file: string.js:247 ~ arr:", arr.reverse())
console.log("🚀 ~ file: string.js:247 ~ arr:", arr.sort())
