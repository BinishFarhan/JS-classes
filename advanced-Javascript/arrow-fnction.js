

// // ==== arrow funciton =====>
// // arrow function also called lambda function.
// // work same as funciton only syntax change

// // =====these are arrow funciton =====>
// const check = () => {
// console.log("my first arrow funciton");
// }
// check()

// const addTwo = (num) => {
//     console.log(num + 2)
// }
// addTwo(2)

//  ==== short way to make arrow funciton =====> /// implicit return // only for single line return
//  const addTwo = (num) => (num + 1 )  /// brackets are use for multiline purpose only.

// var b = addTwo(10)
// console.log("🚀 ~ file: arrow-fnction.js:19 ~ b:", b)

// const sqr = (num) => Math.pow(num,2)
// console.log(sqr(4))

// let user = prompt("Enter a number")

// let even = user => user % 2 === 0

// if(even(user)){
//     console.log('even')
// }else{
//     console.log("odd")
// }

// const input = [ 2, 3, 4, 5];

// let res = input.map((item)=> Math.pow(item,2))
// console.log("🚀 ~ file: arrow-fnction.js:40 ~ res:", res)

// const input = [1, -4, 12, 0, -3, 29, -150];
// let res = input.filter((item)=> item > 0)
// console.log("🚀 ~ file: arrow-fnction.js:44 ~ res:", res)

// let res1 = res.reduce((acc,num)=> acc + num , 0)
// console.log("🚀 ~ file: arrow-fnction.js:47 ~ res1:", res1)

// console.log([15, 16, 17, 18, 19].reduce(
//     (accumulator, currentValue) => accumulator - currentValue,
//     10,
//   ));

//   const input = [12, 46, 32, 64];

//   let res = input.reduce((acc,num)=>
//   {acc + num,0 / input.length} )
//   console.log("🚀 ~ file: arrow-fnction.js:58 ~ res:", res)

// const input = "George Raymond Richard Martin";
// let arr = input.split(" ")
// console.log("🚀 ~ file: arrow-fnction.js:62 ~ arr:", arr)
// let res = arr.map((item)=>{
// return item.charAt("0");
// })
// console.log("🚀 ~ file: arrow-fnction.js:66 ~ res ~ res:", res)
// let str = res.join("")
// console.log("🚀 ~ file: arrow-fnction.js:68 ~ str:", str)

const input = [
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
      age: 56,
    },
    {
      name: "Rachel",
      age: 45,
    },
    {
      name: "Nate",
      age: 67,
    },
    {
      name: "Jennifer",
      age: 65,
    },
  ];
let inputRes = input.map((item)=>{
return item.age;

})
console.log("🚀 ~ file: arrow-fnction.js:95 ~ inputRes ~ inputRes:", inputRes)
let minAge = Math.min(...inputRes)
console.log("🚀 ~ file: arrow-fnction.js:98 ~ minAge:", minAge)
console.log([Math.min(...inputRes), Math.max(...inputRes), Math.max(...inputRes) - Math.min(...inputRes)])
