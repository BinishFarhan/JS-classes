// Q1

// const array = () => [2, 4, 5, 6, 7, 8]
// // console.log(array())
// let arr = array()
// //  console.log("🚀 ~ file: question.js:4 ~ arr:", arr)
// let [a, b, c, d] = arr
// console.log(a, b, c, d);

// //Q2.

// let carObj = {
//     model: "alto",
//     year: 2023,
//     color: "white",
// }
// let {model , year, color} = carObj
// console.log(model);

// Q3.
const greeting = (a, b, c) => `A0A ${a} 
A0A ${b}
A0A ${c}`

console.log(greeting("Binish", "Farhan", "Amna"))

//Q4
var speed = 120

if (speed <= 80) {
    console.log('car speed is slow')
} else if (speed > 80 && speed <= 120) {
    console.log('car speed is moderate')
} else {
    console.log('car speed is too fast')
}

let checkEven = (num) => num % 2 == 0 ? true : false

console.log(checkEven(5))

//write a program which shows the couter after each second.
let count = 0
let dom = document.getElementById("Dom")

function counter() {
    // console.log("hello");
    count++
    dom.innerHTML = `<div>
    <h1>counter</h1>
    <h2>${count}</h2>
</div>`
}
setInterval(counter, 1000)


//print simple array of [1,2,3,4,5] with the help of array map funtion
