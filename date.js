// Date ..
// it is a keyword of JS .
// Date.now is a method which targets our system date but it gives date in milliseconds format which is not readable.
//  we cant call any method on Date.now()
// var date = Date.now()
// console.log("🚀 ~ file: date.js:3 ~ date:", date)

// new is keyword use with  Date to get date in readable format. 

// var date = new Date()
// console.log("🚀 ~ file: date.js:9 ~ date:", date)
// we always use new with date

// it gives result in object data type..
// toString method is used to convert it into string (it is also used for numbers.)
// when it convert into string all method of string will apply on it.

// var date = new Date()
// var dateToString = date.toString()
// console.log("🚀 ~ file: date.js:16 ~ dateToString:", dateToString)
// console.log("🚀 ~ file: date.js:16 ~ dateToString:", typeof(dateToString))// to check its type
// console.log(dateToString.charAt(2).toUpperCase())

// getDay method is used to get only day.
// console.log("🚀 ~ file: date.js:16 ~ date:", date.getDate()) //it gives index number 

// to get day name we first make an array of days.
// var dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; // week start from sun(o) ends at sat(6)
//  console.log("🚀 ~ file: date.js:16 ~ date:", dayName[date.getDay()]) //it gives index number 

// getMonth, getHours, getTime, getMinutes , getSeconds, getDate, getFullYear all are methods.

// to get day at specific date we use this.
// var date = new Date('21 dec 2019')
// console.log("🚀 ~ file: date.js:30 ~ date:", date)

// var date = new Date()
// var dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; // week start from sun(o) ends at sat(6)
// console.log(date.getDay())
// console.log(dayName[date.getDay()])

// to find out DAYS LEFT TO RAMDAN

// var firstRamdan = new Date('March 11,2024').getTime()
// var dateToday = new Date().getTime()
// var diff = firstRamdan - dateToday

// var daysLeftToRamdan = Math.floor(diff/(1000*60*60*24))
// console.log("🚀 ~ file: date.js:42 ~ daysLeftToRamdan:", daysLeftToRamdan)


// TO FIND YOUR AGE

// var  dateOfBirth = new Date(prompt('enter your date of birth', "21 June 1989")).getTime()
// console.log("🚀 ~ file: date.js:47 ~ dateOfBirth:", dateOfBirth)
// var dateToday = new Date().getTime();
// console.log("🚀 ~ file: date.js:49 ~ dateToday:", dateToday)
// var diff = dateToday - dateOfBirth
// var age = Math.floor(diff/(1000*60*60*24*30*12))
// console.log("🚀 ~ file: date.js:52 ~ age:", age)

//by using getFullYear method.

// var  dateOfBirth = new Date(prompt('enter your date of birth', "21 June 1989")).getFullYear()
// console.log("🚀 ~ file: date.js:47 ~ dateOfBirth:", dateOfBirth)
// var dateToday = new Date().getFullYear();
// console.log("🚀 ~ file: date.js:49 ~ dateToday:", dateToday)
// var diff = dateToday - dateOfBirth
// console.log("🚀 ~ file: date.js:52 ~ age:", diff)

// bu using moment library
 
// var date = moment().format()
// console.log("🚀 ~ file: date.js:66 ~ date:", date)

// var birthDay = moment(new Date("21 June 1989"))
// var dateToday = moment(new Date())
// console.log(dateToday.diff(birthDay,""))

//difference by using method of fromNow.
// console.log(birthDay.fromNow())


// var birthDay = new Date("6/21/1989")
// console.log("🚀 ~ file: date.js:78 ~ birthDay:", birthDay)


// // to find out birth day of next year.
// var birthDay = new Date("6/21/1989")
// var dateToDay = new Date('6/21/2024');
// var dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; // week start from sun(o) ends at sat(6)
// var birthDay24 = dayName[dateToDay.getDay()]
// console.log("🚀 ~ file: date.js:84 ~ age:", birthDay24)


// "set" methods of date // setDay, setTime, setSec etc

// var date = new Date();
// date.setMonth("8")
// console.log("🚀 ~ file: date.js:79 ~ date:", date)

// to find out birth day of next year using set method.
// var birthDay = new Date("6/21/1989")
// console.log("🚀 ~ file: date.js:96 ~ birthDay:", birthDay)
// birthDay.setFullYear(2024);
// console.log("🚀 ~ file: date.js:96 ~ birthDay:", birthDay)

// we can set time day date year on previous or future and on current..

// ==========FUNCTIONS USED FOR GETTING DATES...


// function displayDate(){
//     let date = new Date();
//     var arr = ["Jan" ,"Feb" , "March" , "April" , "May" ,"June" , "July" , "Aug" , "Sep" ,"Oct" , "Nov" , "Dec" ]
//     var myDate = (`${date.getDate()}-${arr[date.getMonth()]}-${date.getFullYear()}`)
//     return myDate
// }
// var formattedDate = displayDate()
// console.log("🚀 ~ file: function.js:111 ~ formattedDate:", formattedDate)

// function displayArr(a){
//     for(i=0; i < a.length; i++){
//         document.write(arr[i], "<br>")
//     }
// }
// let arr = ["Jan" ,"Feb" , "March" , "April" , "May" ,"June" , "July" , "Aug" , "Sep" ,"Oct" , "Nov" , "Dec" ]
// displayArr(arr)

// to solve ... 
// function daysLeft(date1){
//  var date = new Date()
//  var diff =  date1.getTime() - date.getTime()
//  var res = diff / (1000 * 60 * 60 * 24)
//  console.log(Math.round(res) , "days are left")
// }

// daysLeft(new Date('21-June-2024'))

// for making digital clock. // asynchorunus JS // 
// setTimeOut() // to print prog after .... this time
// setInterval() // repeats task after ever given second 

// setTimeout(() => {daysLeft(new Date("jan 29, 2024"));} , 5000) // run 1 time after 5 sec

// setTimeout(function (){console.log('i am in settime out')}, 5000)// console appears after 5 seconds only 1 time
// OR
// function showRes(){
//         console.log('i am in settime out')
//     }
// setTimeout(showRes, 5000); // never call function jst give name
// setInterval(showRes, 3000);// run again and again after every 1 sec



// function showConsole(str) { console.log(str) }

// setTimeout(() => showConsole("first"), 2000)
// setInterval(() => showConsole("second"), 1000) // run after every 1 sec again and again


// display real clock

//var format;
// function displayClock(){
//     var date = new Date();
//     var hour = date.getHours()
//     var min =  date.getMinutes()
//     var sec = date.getSeconds()
//     format = `${hour} : ${min} : ${sec}`
//     document.getElementById('clock').innerHTML = format;
//     // return format;
// }
// displayClock()
// setInterval(displayClock, 1000)

