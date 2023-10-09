
// METHODS OF STRING

// SLICE
// this method is used to extract some character of string as it used in array 
// in below example we are going to slice abbreviation of month from prompt
// var month = prompt('Enter a birth month');
// var montAbb = month.slice(0,3).toUpperCase()
// console.log("🚀 ~ file: string.js:9 ~ montAbb:", montAbb)

 


// UPPERCASE OR LOWERCASE OR CAPITILIZE

// var str = 'i am in smit';
// var firstChar = str.slice(0,1); // To slice value which is at 0 index
// console.log("🚀 ~ file: string.js:8 ~ firstChar:", firstChar)
// var lastChar = str.slice(-1) // to slice value which is at last index
// console.log("🚀 ~ file: string.js:10 ~ lastChar:", lastChar)

// to capitilize first letter of a word.
// var city = "karachi";
// var firstChar = city.slice(0, 1);
// var capitalFirst = firstChar.toUpperCase();
// console.log("🚀 ~ file: strings.js:11 ~ firstChar:", firstChar)
// var newCity = capitalFirst + city.slice(1)
// console.log("🚀 ~ file: strings.js:14 ~ newCity:", newCity)

// to capitilize first letter of a 1st word and first letter of a 2nd word and adding a space between these two words

// trial by me.

// var name1 = 'binishfarhan'
// var name1Updated = name1.slice(0,1).toUpperCase() + name1.slice(1,6)+ " " + name1.slice(6,7).toUpperCase() + name1.slice(7)
// console.log("🚀 ~ file: string.js:75 ~ firstChar:", name1Updated)

// solve by mam

// var name1 = "rafiyasultan" // Rafiya Sultan
// var firstNameFirst = name1.slice(0, 1);
// var space = 5;
// var secNameFirst = name1.slice(6, 7);
// var newName =  firstNameFirst.toUpperCase() + name1.slice(1, 6) + " "
// + secNameFirst.toUpperCase() + name1.slice(7);
// console.log("🚀 ~ file: strings.js:20 ~ newName:", newName)
// var ins = "smit"
// console.log(ins.toUpperCase())
// console.log("faiza".toUpperCase());

// PRACTICE ON ARRAY

// SHORT CODE TO CAPITILIZE USING CHARAT.. (learn charAt below);

// var cities = ['Karachi' , 'Dubai' , 'Newyork' ,"Karachi", 'Faislabad' , 'Muree'];
// var uI = prompt("city")
// var uIUpdated = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()
//  console.log("🚀 ~ file: string.js:71 ~ cityUpdated:", cityUpdated)

// LONG CODE TO CAPITILIZE

// var cities = ['Karachi' , 'Dubai' , 'Newyork' , 'Faislabad' , 'Muree'];
// var uI = prompt('Enter your city');
// var uI1 = uI.slice(0,1).toUpperCase();
// var uI2 = uI.slice(1).toLowerCase();
// var uIUpdated = uI1 + uI2
// var flag = true
// // console.log("🚀 ~ file: string.js:52 ~ uIUpdated:", uIUpdated)

// RUNNING FOR LOOP TO FIND OUT THE CITY NAME ON ARRAY

// for(let i = 0; i < cities.length; i++){
//     if(uIUpdated === 'Karachi'){
//     flag = false
//     console.log(i,'city found')
//     break;
// }

// }
// if(flag){
//     console.log('city not found')
// }



// CHARAT

// in charAt method we give the index no to find out the value at speicific index 
// to find out character at specific index. use charAt

// var ins = "smit"
//  var name1 = "rafiyasultan" // Rafiya Sultan
// console.log(ins.charAt(0)) // s
// console.log(ins.charAt(4)) // undefined .. it will not show any thing at index 4 becuase smit have index 0-3. even not undefined as shown in array. 
// console.log(ins.charAt(ins.length - 1)) // it will show the character of last index
// console.log(name1.charAt(3))

// short code to capitilize first letter of a word

// var city = "karachi";
// var cityUpdated = city.charAt(0).toUpperCase() + city.slice(1)
// console.log("🚀 ~ file: string.js:66 ~ cityUpdated:", cityUpdated)



//  INDEX OF
// it is used to find out the index number of given value.. when a word is given it only show the index no of starting letter.
// indexOf shows index no of a value if it present in a given text or otherwise it returns -1
// var text = "i am happy because i got 20 numbers out of 25 in javascript quiz but i am happy also as i got 100% in html"
// console.log(text.indexOf("happy"));

// LAST INDEX OF
// it is as same as indexof but it starts finding index from last. 
// if there are two same words in a sentence . it shows index of the second one. 
// lastIndexOf shows index no of a value if it present in a given text or otherwise it returns -1

// var text = "i am happy because i got 20 numbers out of 25 in javascript quiz but i am happy also as i got 100% in html"
// console.log(text.indexOf("happy")); // for showing the difference both methods are used for a repeated word in sentence.
// console.log(text.lastIndexOf("zero"));


// TO FIND OUT WORD OR GROUP OF WORDS AND TO REPLACE IT.

//USING SLICE METHOD // in this method we use for loop and if statements inside it.
// by mam

/*var text = "i am happy. There is world war ii. hello world war ii"
var search = "world war ii"
var len = search.length //12
for (let i = 0; i < text.length; i++) {
    if(text.slice(i, i + len) === search){
    text = text.slice(0, i) + "second world war" + text.slice(i+len)
    }
}
console.log(text)*/

// practice

// var text = "i am happy because i got 20 numbers out of 25 in javascript quiz but i am happy also as i got 100% in html"
// var search = "happy"
// var len = search.length //12
// for (let i = 0; i < text.length; i++) {
//     if(text.slice(i, i + len) === search){
//     text = text.slice(0, i ) + "sad" + text.slice(i+len)
//     }
// }
// console.log(text)

//  practice 2

// var name1 = "Binish farooq";
// var search = "farooq"
// var len = search.length

// for(let i = 0; i < name1.length; i++){
//     if(name1.slice(i, i+len) === search){
//         name1 =  name1.slice(0,i) + "Farhan" + name1.slice(i+len)
//     }
// }
// console.log("🚀 ~ file: string.js:26 ~ name1:", name1)



// USING INDEX OF METHOD // Drawback is it only replace starting index word. not multiple words.
// in this method we use if statements without for loop
// BY MAM 

// var text = "iam happy. There is world war ii. hello world war ii"
// var search = "world war ii"
// var len = search.length //12
// var searchIndex = text.indexOf(search) // address -1
// console.log('asdsa',searchIndex,text.slice(searchIndex, searchIndex + len))
// if(searchIndex !== -1){ // if found
//     text = text.slice(0, searchIndex) + "second world war" + text.slice(searchIndex+len)
//     }
// console.log(text)

// practice

// var info = "i am happy because i got 20 numbers out of 25 in javascript quiz but i am happy also as i got 100% in html"
// var wordToSearch = "happy"
// var len = wordToSearch.length
// var firstChar = info.indexOf(wordToSearch)
// if(firstChar !== -1){
//     info = info.slice(0,firstChar) + "sad" + info.slice(firstChar+len)
// }
// console.log("🚀 ~ file: string.js:181 ~ info:", info)

// var wordToSearch2 = "20"
// var len2 = wordToSearch2.length
// var firstChar1 = info.indexOf(wordToSearch2)
// if(firstChar1 !== -1){
//     info = info.slice(0,firstChar1) + "15" + info.slice(firstChar1+len2)
// }
// console.log("🚀 ~ file: string.js:181 ~ info:", info)


// METHOD OF REPLACE
// it replace the word which comes first. 

// var info = "i am happy because i got 20 numbers out of 25 in javascript quiz but i am happy also as i got 100% in html"
// var newInfo = info.replace("happy" , "sad")
// console.log("🚀 ~ file: string.js:202 ~ newInfo:", newInfo)

// for global replace.. 
// /word/g or use replaceAll
// var info = "i am happy because i got 20 numbers out of 25 in javascript quiz but i am happy also as i got 100% in html"
// // var newInfo = info.replace(/happy/g , "sad") // /forward slash use in rigix
// var newInfo = info.replaceAll("happy" , "sad") 
// console.log("🚀 ~ file: string.js:202 ~ newInfo:", newInfo)

// METHOD OF parseInt / parseFloat / Number (these methods converts string into integar)
// parseInt convert string into number but if there is decimal no it doesn't round of it .. jst remove the number after decimal.
// parseFloat convert string into number but if there is decimal it gives whole string as it is. 
// we also use + to convert string into number but it gives whole string as it is. 

// var num = prompt('enter a number')
// var newNum = parseInt(num) // 3
// var newNum1 = +(num)
// var newNum2 = parseFloat(num)
// var newNum3 = Number(num)
// console.log("🚀 ~ file: string.js:222 ~ newNum3:", newNum3)
// console.log("🚀 ~ file: string.js:221 ~ newNum2:", newNum2)
// console.log("🚀 ~ file: string.js:219 ~ newNum1:", newNum1)
// console.log("🚀 ~ file: string.js:217 ~ newNum:", newNum)

// METHOD to convert number into string
// toString 

var num = 344.34
var newNum = num.toString()
console.log("🚀 ~ file: string.js:232 ~ newNum:", typeof(newNum))
con











