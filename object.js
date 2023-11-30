// everything  is object in world.
// object is a group of data.
// every object has some behaiviours and properties..
// === Data of cars === 
// alto , civic , city
// wrong approach
// we can also store in array form but in array we store series wise data which can be wrong.
let cars1 = ["Alto", "white", 2015, " suzuki"]
let cars2 = ["Alto", "white", 2015, " suzuki"]

// when we are going to create data we store in var. but it will take too much space.
// it is also very lengthy and wrong approach.
let car1Name = "Alto"
let car1Color = "White"
let car1Model = 2015
let car1Company = "Suzuki"

let car2Name = "corolla"
let car2Color = "Gray"
let car2Model = 2015
let car2Company = "Toyota"

let car3Name = "City"
let car3Color = "Black"
let car3Model = 2015
let car3Company = "Honda"

// to overcome these problems we store data in objects. curly brackets are the symbol of object.
// draw back of var is it will overwrite on same variable.
let car1 = {
    name: "Alto",
    color: "White",
    year: 2015,
    made: "Suzuki"
}

let car2 = {
    name: "Corolla",
    color: "Graye",
    year: 2015,
    made: "Toyota"
}

let car3 = {
    name: "Civic",
    color: "Black",
    year: 2015,
    made: "Honda"
}


// =====sutdent Object(for practice) =====

let myObject = {
    name: "Binish",
    fatherName: "Farooq Ahmed",
    subjects: ["HTML", "CSS", "Javascript", "Tailwind"],
    age: 32,
    dateOfBirth: "06/21/1989",
    Id: "143129",
    batch: "10",
    fees: 500
}

// to get data from object we use these two formats. (same like array)

// console.log(myObject.subjects)
// console.log(myObject['subjects']); // give property in string it is like array.

// console.log(myObject) // when we call only variable of object it will show all the properties of that object.


// to update properties in object. // it will update original object.
// console.log(myObject);
// myObject.name = "Binish Farhan"

// to add new properties in object  // // it will update original object.

// myObject.husbandName = "Farhan Ahmed"
// console.log(myObject);

// to delete properties  // it will update original object.
// delete myObject.husbandName

// console.log(Object.keys(myObject)) // it will show keys of object
// console.log(Object.values(myObject)) // it will show values of object
// console.log(Object.entries(myObject)); // it will show keys and values both .. but in array form.
// console.log(myObject.name, myObject.fatherName, myObject.subjects, myObject.Id , myObject.batch , myObject.fees)// only required values will be printed.

// if there is an array in object it will get like this. because subject is in array form.

// console.log(myObject.subjects[3]);

// to update values of subjects
// console.log(myObject.subjects); // original object
// myObject.subjects[2] = "bootstrap"
// console.log(myObject.subjects);

// to delete values of subjects.
// delete myObject.subjects[2]
// console.log(myObject.subjects); // it will show empty space at index 2



// let std2 = {
//     name: "Ayesha" ,
//     fatherName: "abc" , 
//     subjects: ["HTML" , "CSS" , "Javascript" , "Tailwind"],
//     Id: "12345",
//     batch: "10",
//     fees : 500
// }

// let std3 = {
//     name: "Fatima" ,
//     fatherName: "xyz" , 
//     subjects: ["HTML" , "CSS" , "Javascript" , "Tailwind"],
//     Id: "23456",
//     batch: "10",
//     fees : 500
// }




// what is APIs
// application programing interface.
// jsonplaceholder.. // made by developers.
// to transfer data from one app to another .. it will be in json form. (key and value both in string.)
// what is json?

// we are going to take data from json to our file. in json format the array of objects are present. 

// fetch keyword is used to collect data from internet

// function getPost(){
// // fetch('https://jsonplaceholder.typicode.com/posts')
// // .then(data => data.json())
// // .then(res => console.log(res))
// // }

// // ================Methods of Creating Objects =============>
// // objects can have array with in it and objects with in array so many nested arrays and objects.

// // literal object

// // let myObject = {
// //     name: "Binish" ,
// //     roll: "WMA12345" ,
// //     courses: "webApp" ,
// //     subjects: ["HTML" , "CSS" , "Javascript" , "Tailwind"],
// //     classes: ["thursday" , "sunday"],
// //     fees : 500
// // }


// //constructor object : it is class // when declaring function of constructor we should start it name with capital letter.
// // we use constructor to make objects when same keys are used but the series of keys and values must be same.
// function Student(name , roll, courses, classes, fees){ // to write properties in constructor function we use "this" keyword
//     this.nameStdnt = name;
//     this.rollNum = roll;
//     this.courses = courses;
//     this.fees = fees;
//     this.classes = classes;
// }

// // constructor itself doing nothing untill we call it and give values.
// // new  is a keyword symbol for object.
// var std1 = new Student("Binish" , "123" , "webApp" , ["thursday" , "sunday"] , 500)
// console.log("🚀 ~ file: object.js:148 ~ std1:", std1)

// // when u manipulate the series in giving values it will put 500 in name key.. and so on .. if u omit any value it will show last value undefined.
// var std2 = new Student(500 , "123" , ["thursday" , "sunday"] , 500) // 
// console.log("🚀 ~ file: object.js:173 ~ std2:", std2)

// class Teacher {  // construct a object using class method. it is class.
//     constructor(name, employNo, Salary) {
//         this.nameStdnt = name
//         this.employNum = employNo
//         this.Salary = Salary

//     }
// }

// let t1 = new Teacher("Faiza" , "1234" , 12345) // instance or object
// let t2 = new Teacher("Iqra" , "7287" , 9876 )
// let t3 = new Teacher("Hina" , "8765" , 8765 )
// console.log("🚀 ~ file: object.js:164 ~ t1:", t1)
// console.log("🚀 ~ file: object.js:164 ~ t2:", t2)
// console.log("🚀 ~ file: object.js:164 ~ t3:", t3)

// // ====== using funciton in object======>
//  let std = {
//     name: "Binish" ,
//     Husband : "Farhan",
//     showName : function (){
//         // var fullName = (`Hello! I am ${std.name} ${std.Husband}`)
//         // return fullName.toUpperCase();
//         console.log(`Hello! I am ${std.name} ${std.Husband}`);
//     }
// }
// std.showName()

// // ============ For more practice of function in objects=========>
// let price = 100
// var plan1 = {
//     name: "Gold",
//     price: 800,
//     calcDiscount : function(discount) {
//         let disc =  plan1.price - (plan1.price * discount / 100)
//         return disc
//     }
// }
// console.log(plan1.name, plan1.calcDiscount(20));

// object can have array or object and so on.

let myself = {
    name: "Binish",
    Husband: "Farhan",
    showName: function () {
        return `Hello! I am ${myself.name} ${myself.Husband}`
    }
}

// added class in myself  object .. class is also object which have subjects array
// in subjects array there is also 1 object of 

myself.class = {
    institute: "Saylani",
    time: "9-11",
    subject: ["HTML",
        {
            name: "Javascript",
            version: "ES-6"
        }
        , "CSS", "BOOTSTRAP"]
}
// console.log(myself.showName())
console.log(myself.class.subject[2]) // class is also object which have array

// if array has object in it how to get it
console.log(myself.class.subject[1].version) 

// want to add subject more 
myself.class.subject.push("React") // because subject is array
console.log(myself.class.subject[1].latestversion = 2.5) // getting array first then call index no of object and then add property and value.

// this delete will work on object and array both but it will left empty in array and not optimize its length.
// use delete  to delete name of javascript. becuase its a object in array.
delete myself.class.subject[1].name

// to delete index of array in object we use .
myself.class.subject.pop() // it will delete react because it is on last.
myself.class.subject.splice(2,1) 
console.log(myself.class.subject)