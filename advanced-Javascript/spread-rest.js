// page 151 js to professional book
// array always be const ... it allows to add element in array. but didn't allow to upadate full array .
// to concatenate or join two array to make 1 array we use spread opt + concat method

// for ex: can we add two array like this.
// const one = [1, 2, 3]
// const two = [4, 5, 6]
// let three = one + two
// console.log("🚀 ~ file: spread.js:4 ~ three:", typeof(three), three) 
// output
// these two arrays will be concatenate like 1,2,34,5,6 and returns string.


// Syntax of spread operator (...) three dots at start
// const sindhCitiesArray = ["karachi" , "hyderabad" , "sukkur"]
// const punjabCitiesArray = ["Lahore" , "islamabad" , "rawalpindi"]
// const citiesArray = [...sindhCitiesArray , ...punjabCitiesArray]
// console.log("🚀 ~ file: spread-rest.js:18 ~ citiesArray:", citiesArray)

// concat method..
// const cityArray = sindhCitiesArray.concat(punjabCitiesArray)
// console.log("🚀 ~ file: spread-rest.js:20 ~ cityArray:", cityArray)

// if we want to add more info in an array but to save original array as it is.
// we will make a copy of array.. now if we make copy like this...
 
// const nameArr= ['ayesha' , 'faiza']
// const newNameArr = nameArr // simply newNameArr assign all value of nameArr
// but if we push more names in newNameArr it will modify our original array too.. 
// Concept of  refrence assignment and values assignment..

// in simple variables when we assigned a variable to another variable 
// it will known as "value assignment".. means when update new variable original var will be as it is..

// in array/object when we assigned a array/obj to new array/obj to copy it.
// it will assign array/obj as refrence.. that means one array/obj with two names.
// means when update new array/obj original array/obj will will also update.

/// spread opt is also used for value assignment in new array/obj

// const students = ["binish" , "fatima" , "ayesha"]
// const newStd  = students // reference assignment. 
// const newStd1 = [...students] // value assignmet
// newStd1.push('Yahya') // now this value will add in newStd1 not affect the original array.


// now role of spread opt in a funciton
// in a function when user gives unknown no. of arguments 
// so how can we pass parameters on unknown no. of arguments.
// so for this we use spread operators.
// it saves argument in given parameter 
// and rest of argument will save as an array in last parameter.

// function sum(...c){
//     return c
// }
// console.log(sum(1,2,3,4,5,6));


function display(param1,...param2) {
    document.write(param1,...param2)
}

display('Hi i need you to print me',"adf","adf","adf")


function displayArr(arr, ...b){
    console.log(arr, b)
}
displayArr(1, 2, 3)