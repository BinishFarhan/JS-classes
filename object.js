// everything  is object in world.
// every object has some behaiviours and properties..
// === Data of cars === 
// alto , civic , city
// we can also store in array form but in array we store series wise data which can be wrong.
let arr = ["Alto" , "white" , 2015 , " suzuki"]

// when we are going to create data we store in var. but it will take too much space.
let car1Name ="Alto"
let car1Color = "White"
let car1Model = 2015
let car1Company = "Suzuki"

let car2Name ="corolla"
let car2Color = "Gray"
let car2Model = 2015
let car2Company = "Toyota"

let car3Name ="City"
let car3Color = "Black"
let car3Model = 2015
let car3Company = "Honda"

// to overcome these problems we store data in objects.
let car1 = {
    name: "Alto",
    color: "White" ,
    year: 2015,
    made: "Suzuki"
}

let car2 = {
    name: "Corolla",
    color: "Graye" ,
    year: 2015,
    made: "Toyota"
}

let car3 = {
    name: "Civic",
    color: "Black" ,
    year: 2015,
    made: "Honda"
}

// to show data . we use array format

// console.log(car1) // in curly bracket object is stored.

// =====sutdent Object =====

let std1 = {
    name: "Binish" ,
    fatherName: "Farooq Ahmed" , 
    subjects: ["HTML" , "CSS" , "Javascript" , "Tailwind"],
    Id: "143129",
    batch: "10",
    fees : 500
    
}
let std2 = {
    name: "Ayesha" ,
    fatherName: "abc" , 
    subjects: ["HTML" , "CSS" , "Javascript" , "Tailwind"],
    Id: "12345",
    batch: "10",
    fees : 500
}
let std3 = {
    name: "Fatima" ,
    fatherName: "xyz" , 
    subjects: ["HTML" , "CSS" , "Javascript" , "Tailwind"],
    Id: "23456",
    batch: "10",
    fees : 500
}


console.log(Object.keys(std1)) // it will show keys of object
// console.log(Object.values(std1)) // it will show values of object
// console.log(Object.entries(std1)); // it will show keys and values both .. but in array form.
console.log(std2.name, std2.fatherName, std2.subjects, std2.Id , std2.batch , std2.fees)
// // console.log(std3.name, std3.fatherName, std3.subjects, std3.Id , std3.batch , std3.fees)



console.log(std3.subjects) // original object.
std3.subjects[0] = "bootstrap" // to update property of object
console.log(std3.subjects) 

delete std3.subjects[0]; // to delete any property of object
console.log(std3.subjects); 

// what is APIs
// application programing interface.
// jsonplaceholder.. // made by developers.
// to transfer data from one app to another .. it will be in json form. 
// what is json?

// we are going to take data from json to our file. in json format the array of objects are present. 

// fetch keyword is used to collect data from internet




function getPost(){
fetch('https://jsonplaceholder.typicode.com/posts')
.then(data => data.json())
.then(res => console.log(res))
}





