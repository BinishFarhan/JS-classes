// Object ...

let personalInfo = {
    name: "Binish Farooq",
    email: "binishfarhan89@gmail.com",
    password: "abc123",
    age: "34",
    gender: "female",
    city: "Karachi",
    country: "Pakistan"
}
console.log("subject" in personalInfo) // to check whether the property is in object or not .. return true or false

function PersonalInfo(firstName,lastName , age,city){
    this.firstName = firstName
    this.lastName= lastName
    this.city = city
    this.age = age
    

}

//we can add this getfullname function in prototype of javascript so every time when the object is made only 1 copy of function in prototype will be used.

let user = "Karachi"
console.log(personalInfo[user]);

let obj1 = new PersonalInfo("Binish","farooq","34","karachi")
let obj2 = new PersonalInfo("farhan","36","karachi")
let obj3 = new PersonalInfo("Fatima","28","Lahore")

// to store method in prtotype.
PersonalInfo.prototype.getfullname = function(){
    return this.firstName + " " + this.lastName
}
console.log(obj2.getfullname());
