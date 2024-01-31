// // page 151 js to professional book
// // array always be const ... it allows to add element in array. but didn't allow to upadate full array .
// // to concatenate or join two array to make 1 array we use spread opt + concat method

// // for ex: can we add two array like this.
// // const one = [1, 2, 3]
// // const two = [4, 5, 6]
// // let three = one + two
// // console.log("🚀 ~ file: spread.js:4 ~ three:", typeof(three), three) 
// // output
// // these two arrays will be concatenate like 1,2,34,5,6 and returns string.


// // Syntax of spread operator (...) three dots at start
// // const sindhCitiesArray = ["karachi" , "hyderabad" , "sukkur"]
// // const punjabCitiesArray = ["Lahore" , "islamabad" , "rawalpindi"]
// // const citiesArray = [...sindhCitiesArray , ...punjabCitiesArray]
// // console.log("🚀 ~ file: spread-rest.js:18 ~ citiesArray:", citiesArray)

// // concat method..
// // const cityArray = sindhCitiesArray.concat(punjabCitiesArray)
// // console.log("🚀 ~ file: spread-rest.js:20 ~ cityArray:", cityArray)

// // if we want to add more info in an array but to save original array as it is.
// // we will make a copy of array.. now if we make copy like this...

// // const nameArr= ['ayesha' , 'faiza']
// // const newNameArr = nameArr // simply newNameArr assign all value of nameArr
// // but if we push more names in newNameArr it will modify our original array too.. 
// // Concept of  refrence assignment and values assignment..

// // in simple variables when we assigned a variable to another variable 
// // it will known as "value assignment".. means when update new variable original var will be as it is..

// // in array/object when we assigned a array/obj to new array/obj to copy it.
// // it will assign array/obj as refrence.. that means one array/obj with two names.
// // means when update new array/obj original array/obj will will also update.

// /// spread opt is also used for value assignment in new array/obj

// // const students = ["binish" , "fatima" , "ayesha"]
// // const newStd  = students // reference assignment. 
// // const newStd1 = [...students] // value assignmet
// // newStd1.push('Yahya') // now this value will add in newStd1 not affect the original array.


// // now role of spread opt in a funciton
// // in a function when user gives unknown no. of arguments 
// // so how can we pass parameters on unknown no. of arguments.
// // so for this we use spread operators.
// // it saves argument in given parameter 
// // and rest of argument will save as an array in last parameter.

// // function sum(...c){
// //     return c
// // }
// // console.log(sum(1,2,3,4,5,6));


// function display(param1, ...param2) {
//     document.write(param1, ...param2)
// }

// display('Hi i need you to print me', "adf", "adf", "adf")


// function displayArr(arr, ...b) {
//     console.log(arr, b)
// }
// displayArr(1, 2, 3)

// // We have an array of cities. Assign each city in different individual variable.
// const arr = ['LA', 'new york', 'karachi', 'islamabad']
// const [a, b, c, d] = arr
// console.log("🚀 ~ file: spread-rest.js:75 ~ a,b,c,d:", a, b, c, d)

// let obj = {
//     name: 'Marry',
//     age: 20,
//     rollNo: 2
// }

// let { name, age, rollNo } = obj
// console.log("🚀 ~ file: spread-rest.js:84 ~ name:", name)

// function five(...a) {
//     console.log(typeof a);
// }

// let arr1 = [1, 2, 3, 4, 5]
// five(...arr1)

// // for each also take arrow function isnide .. call back function.
// // forEach is just for array.. 
// // for rest parameters
// function sum(...param) {/// rest parameters.
//     console.log(param)
//     let res = 0;
//     param.forEach(element => {
//         res += element
//     });
//     return res
// }

// console.log(sum(1, 2, 3, 4, 5))

// // for in specially for objects.

// // spread and rest are same but
// // How to make copy of Object or array but to save original as it is.
// // let object1 = {
// //     name: "Binish",
// //     husbandName: "Farhan Ahmed",
// // }
// // now make its copy:
// // let object2 = object1 // copy object1 into 2 ... it will take same refernce
// // console.log("obj1==>", object1 )
// // console.log("obj2==>" , object2)

// // so when we upadate object2.name it will update our original obj too.
// // object2.name = "Ayesha"

// // so to overcome this ... spread opt is used. where only the value of object1 will
// // store in object2 with new refrence. so when we update the new obj it doesnt affect 
// // the original one.
// // let newOBj = {...object1}
// // console.log(newOBj);
// // console.log(object1);
// // now update newObj it will only update new obj not the original one.
// // newOBj.name = "Ayesha"
// // console.log(newOBj);
// // console.log(object1);

// // shallow and deep copy..
// // shallow means where there is no nested obj..
// // but if we want to clone nested obj it will call deep copy for new refrence.
// //ex..
// let object1 = {
//     name: "Binish",
//     husbandName: "Farhan Ahmed",
//     Education: {
//         BSc: "Abdullah College",
//         MSc: "University of Karachi"
//     }
// }

// // now make its copy with new refrence assignment.

// // let newDeepObj = {...object1 } // in this main refrence is change but nested is same
// // newDeepObj.Education.BSc = "Farhana" // same issue it update the both objects education. 
// // console.log(newDeepObj.Education.BSc)
// // console.log(object1.Education.BSc)

// // so for to make copy of nested object values.
// //  let newDeepObj = {...object1 } // in this main refrence is change but nested is same

// // to make deep copy must have to give refrence of nested obj like:
// let newDeepObj = {
//     ...object1,
//     Education: { ...object1.Education }
// }

// // now update education 
// newDeepObj.Education.BSc = "Sir Syed college"

// // console.log(object1.Education.BSc);
// // console.log(newDeepObj.Education.BSc)

// let myProfile = {
//     name: "Farhan Ahmed",
//     education: "Graduation",
//     Family: {
//         sisters: 3,
//         brothers: 4,
//         spouse: {
//             name: "Binish Farhan",
//             education: "MSc"
//         }

//     }
// }

// let updateProfile = {
//     ...myProfile,
//     Family: {
//         ...myProfile.Family,
//         spouse: {
//             ...myProfile.Family.spouse
//         }
//     }
// }
// updateProfile.Family.spouse.education = "Developer"

// // console.log(myProfile.Family.spouse.education);
// // console.log(updateProfile.Family.spouse.education)

const deepCopyArray = (arr) => {
    return arr.map(innerItem => Array.isArray(innerItem) ? deepCopyArray(innerItem) : innerItem);
};

const myArray = [ ["karachi", "Islamabad"] , ["Houston", "Chicago"]]
const shalCopy = deepCopyArray(myArray)
shalCopy[0][0] = "Lahore"
console.log("🚀 ~ myArray:", myArray)
console.log("🚀 ~ shalCopy:", shalCopy)
// console.log("🚀 ~ newInnerArr:", newInnerArr)
// // const newArr = myArray.map((innerArray)=>{
// //     return [...innerArray ]
// // })
// // console.log("🚀 ~ newArr ~ newArr:", newArr)
// const newArr = deepCopyArray(myArray)
// // console.log("🚀 ~ newArr:", newArr)

// console.log(newArr[0][0])
// newArr[0][0] = "lahore"
// console.log(myArray)
// console.log(newArr)