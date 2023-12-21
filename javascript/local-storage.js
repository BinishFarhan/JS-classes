// browser have local storage ..
// ===== ex of database ===>
// local storage = it will save your login id password untill u specifically removed it.
// session storage == untill browser open it will save once browser is closed it will erase memory.

// inspect ==> application ==> file(url of current page) ==> key and value will show.

// to store value in local storage of browser.
// localStorage.setItem("firstname" , "Binish") 

// to delete local storage from browser
// localStorage.clear()

// sessionStorage.setItem("lastName" , "Farooq")

// ==using storage for authentication(log-in and signup)
// == full practice in facebook login page tailwind.

// local storage store 1 login id and pass from signup page and when the other user signup 
// its account . local storage overwrite the data. 
// to overcome this two methods are used 
// 1. JSON.stringify() // it convert all the data in string.
// 2. JSON.parse() // it make string again objects. 

// ====== Multiuser sign up ========

