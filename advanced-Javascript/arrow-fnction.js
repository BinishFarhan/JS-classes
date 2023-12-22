

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

let user = prompt("Enter a number")

let even = user => user % 2 === 0

if(even(user)){
    console.log('even')
}else{
    console.log("odd")
}