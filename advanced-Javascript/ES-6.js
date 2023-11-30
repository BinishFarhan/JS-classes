// ecmascript is a rule book to code javascript.
// Uptill now we learnt vanilla javascript raw javascript.
// features of ES-6
// from readme of miss repo.

// =======Template Lietrals =======>`

var str1 = "Binish"; // multiline not allowed
var str2 = 'Farooq'; // multiline not allowed
var str3 = `AOA 
my
name
is
${str1}
${str2}`;  // backticks use in it. can write easily in multilines.
console.log(str3)

var exp = ` ${2 + 2}`  // should not give string in ${this.}

console.log("🚀 ~ file: ES-6.js:20 ~ exp:", exp)


// =======Destructure ======>

// to extract anything from given structure. 
// to extract all element of array . (destrutuctre)

// =====Array destructure======>

// ====== normal method to get array element separately.=======>
// this method is fail when arr is lengthy.
var arr = [1, 2, 4, 6]
var a = arr[0]
var b = arr[1]
var c = arr[2]
var d = arr[3]


// using destructuring method. // this method require when we work on login page
var arr2 = [1, 2, 4, 6, 5]
var [a, b, c, d, e] = arr2  // abcde is variable
console.log(a, b, c, d, e)

// =====for practice =====>
var frnd = [`Marium`, `Madiha`, `Nadia`, `Anam`, `Farhan`, `Binish`]
var [frnd1, frnd2, frnd3, frnd4] = frnd //this is in sqaure brackets but this is not array it is a collection of variable. 
// and the values stored in these variable are string int frnd case so all methods of string will apply on it.
console.log("🚀 ~ file: ES-6.js:46 ~ frnd1 , frnd2, frnd3 , frnd4:", frnd1, frnd2, frnd3, frnd4)

// ======Short method to store array element in separate variable.=======>
var [frnd1, frnd2, frnd3, frnd4] = [`Marium`, `Madiha`, `Nadia`, `Anam`, `Farhan`, `Binish`]

// ======Object destructure =====>
// ======Object lietral =====>
var teacher = {
    name: "Faiza",
    age: 20,
    salary: 30,
}
var { name, age, salary } = teacher; // in object the key and varibales name must be same. 
// series doesnt matter.
console.log(name, age, salary)


// ======for practice
var mySelf = {
    name: "binish",
    age: 34,
    salary: 30,
}
var { name, age, salary, tel } = mySelf; // in object the key and varibales name must be same. 
// series doesnt matter.
console.log(name, age, salary, tel) // tel is not defined in mySelf object.

// ===== Showing object information in browser by manipulatin DOM =====>

// =====using literal method ====>
var d = document.querySelector("#Dom")
d.innerHTML = `<h1>${name}</h1>
        <h2>${age}</h2>
        <h3>${salary}</h3>`

// ==== using general method ====>

// var h1 = document.createElement("h1")
// h1.textContent = name
// var h2 = document.createElement("h2")
// h2.textContent = age
// var h3 = document.createElement("h3")
// h3.textContent = salary
// d.appendChild(h1)
// d.appendChild(h2)
// d.appendChild(h3)



