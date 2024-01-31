// window is a object
// it has too many properties..
// window.location.hostname == shows web browser
// href shows whole current address.
// pathname = shows current page.
// for forward and backword and go..
//
// var window = window.open()
// window.document.write(`<h1>Binish</h1>`)

var wind = window.open();// content de skte hain idhr.
function win() {
    // wind = wind.document.write(`<h1>Binish</h1>`)
    
}
// console.log(wind.close())




//window is global object
// window.location is also object.. give info about location at which we stand.. 
// hostname = domain name.. 
// href and origin = full url
// path name google/index.html index is a path.
// reload and replace functions use for navigation. 
// q param.. use for data filteration.
// search?q=pakistan ... they are query params for multiple add &.
// url can be find out with document.URL


function fb() {
    // window.location.assign("https://www.facebook.com/")  // url .. maintain history.. browser back button works..
    // window.location.replace("https://www.facebook.com/")  // current history remove. browser back button not works.
    window.location.href = "https://www.google.com/"  /// url // maintain history .. browser back button works..
}


function reload() {
    // console.log(window.location) // 
    window.location.reload(true) // hard reload.. download from server again.
    window.location.reload(false) //  reload.. set page through cache.
}

// console.log(document.firstChild);

//history.back  use to move back to page.
//history.forward use to move  forward.
// history.go(-3) use to move three step back ...
// history.go(+valu) use to move forward .
// document .reffreer ... from where user comes. histroy require.

//


/// related to forms. ======>
// Input.focus
// selectedIndex 
// for radio button name same then loop then .checked property.
// isNaN use to check the whehter the input is not a number.. 
// for alphabets it is true
// for number it is false

//try{} and catch{}.
// work combindely.. not single run.
// to handle error we use try and catch.
// in try block we write our code . and in catch(err){console.log(err)}
// normally in JS if 1 line has error next line will not be print.
// but when we use try catch .. js will print all of the rest line but shows err in catch block
// it save our application from crashing.
try {
    aler("hello") // to make custom error with code error.
    throw ('provide email') // it will deal with personal error which are modified on validation.
} catch (error) {
    console.log(error);
}
console.log("after error line which should not be print if we didnt use try catch.");

var button = document.getElementById("btn")
console.log("🚀 ~ file: bom.js:80 ~ btn:", button)

function hello(){
      console.log("hello")
}
btn.onclick = hello; // dont call function.
btn.addEventListener("click" , ()=>console.log("hello throught event")) // directly write arrow function or make function but dont call it.
btn.style.border = "2px solid red"

var str = "Binish Farooq"
// method for searching.
console.log(str.startsWith("Binish")); // return true untill str matches ("parenthesis")

// regex  (Regular Expression) string searching algorithm.
// laun algorithm used by banks to validate credit card no.
// /^$/ regex for empty string validation between forward slash.
// test method is used to test.

var str1 = ""
// console.log(/^$/.test(str1)); // it accept space which is not good
console.log(/^\s+$|^$/.test(str1)); // if space is there it will also true.


