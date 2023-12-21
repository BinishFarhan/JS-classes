// map , filter, find

// map is used to iterate on array elements.(items)

// map return new array . doesnt change parent array.
var arr = [4,16,25]
// arr.map(Math.round) // math.round k sath () map k funciton mai nhi lge gai
// console.log("🚀 ~ file: array-funciton.js:7 ~ arr:", arr)

// callback function .
// function inside function. 
arr.map((item) => item + 1)
console.log("🚀 ~ file: array-funciton.js:13 ~ arr.map((item) => item + 1):", arr.map((item) => item + 1))

const freinds = ["binish" , "faiza" , "amna"]
const newFreinds = freinds.map((item)=> `hello ${item}`) 
// arrow funciton inside map function . 
// can use any word instead of item .. el use for elements.
console.log(newFreinds);
const printFriends = freinds.map((item ) => console.log(item)) // it will console single item becuas console is running on map funciton
// when console prints on whole resulting variables it will print whole array.
// console.log("🚀 ~ file: array-funciton.js:20 ~ printFriends:", printFriends)

// it will return new array and the return valus is stored in array form .. 
const numArr = [2,3,4,5]
let res = numArr.map((item)=>{
    return item + 20
})
console.log("🚀 ~ file: array-funciton.js:28 ~ res ~ res:", res) 

// to get item plus its address also.. through map

const name = ["abc", "pakistan"]
const response = name.map((item, i)=> console.log(`the value = ${item} and its  address = ${i}`) )

// console.log("🚀 ~ file: array-funciton.js:34 ~ response:", response)

// using condition on map it will give new array but undefined on lower values on 70 
// so use filter.

// let numArray = [80,90,64,75,82,74,69]
// let count = 0
// let result  = numArray.map((item) => 
//   count += item,
 
// )
// var avg = count/numArray.length
// console.log(avg.toFixed(2));
// console.log("🚀 ~ file: array-funciton.js:45 ~ result ~ result:", result)



/// =========  FILTER=========>

// to filter the array .
// let numArray = [80,90,64,75,82,74,69]
// let result  = numArray.filter((item) => {
//     if(item > 70)
//     return item
// })
// console.log("🚀 ~ file: array-funciton.js:57 ~ result ~ result:", result)

// one another method. short method

let numArray = [80,90,64,75,82,74,69]
let result  = numArray.filter((item) => item % 2 === 0 && item > 80) 
console.log("🚀 ~ file: array-funciton.js:57 ~ result ~ result:", result)


// let numArray = ["karachi" , "islamabad" , "uzma"]
// let result  = numArray.filter((item) => 
// { if()
    
// })
// console.log("🚀 ~ file: array-funciton.js:57 ~ result ~ result:", result)





const students = [
    {
        id:1,
        name: "binish",
        marks: 92
    },
    {
        id:2,
        name: "amna",
        marks: 82
    },
    {
        id:3,
        name: "faiza",
        marks: 85
    }
]

let resultStd = students.filter((items) => items.marks > 90)
console.log("🚀 ~ file: array-funciton.js:100 ~ resultStd:", resultStd[0].marks)
