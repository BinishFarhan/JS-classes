// // first declare or make then consumed promise.
// // asynchronous use to make javascript jump to another task if the 
// // ongoing task takes time.
// // to make new promise
// // states of promise
// // pending , fulfill, failure.
// // take callback function.
// // new Promise(resolve , reject)
// // it is just made. declare.
// // new Promise(function (resolve, reject) {
// //     resolve() // whenever we use this promise it will show only when it is resolve.
// // })
// // to show reject is best pr.
// // promise object use for asynchronous operation in javascript.

// // to call it we should store in var.
// // let a = 10
// // var myPromise = new Promise(function (resolve, reject) {
// //    a == 20 ? resolve("resolve") : reject() 
// // //     if(a == 10) resolve() // whenever we use this promise it will show only when it is resolve.
// // //    else reject()
// // })
// // myPromise
// // .then((res)=>console.log("fulfill",resolve)) // execute when promise is fullfill
// // .catch((res)=>console.log("fail", reject)) // execute when promise rejected.

// // let gender = "male"
// // const myPrime = new Promise((resolve, reject) => {
// //    gender == "male" ? resolve("success") : reject("failure")
// // })
// // myPrime
// // .then((data)=>console.log(data,1))
// // .then((data)=> console.log(data, 2)) // no data
// // .catch((data)=>console.log(data))

// // in promise of fetch data.json is also a promise that is why 2 then will show json data. 
// let age = 20
// const agePromise = new Promise((resolve, reject)=>{
// age >= 18 ? resolve("you are allowed") : reject("you are not allowed") 
// })
// agePromise
// .then(data => console.log(data))
// .catch(data => console.log(data))

let setTime = 10
function quizTimer(){
   
   
   console.log(--setTime);


// if(setTime <= 10 || setTime > 0){
}

// console.log(setTime);
var abc = setInterval(quizTimer,1000)
setTimeout(() => {
   clearInterval(abc)
}, 10000);
console.log("hello");
