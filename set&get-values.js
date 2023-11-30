function submit(){
    // var test = document.getElementById('test')
    // console.log(test.value)
    // // test.value = " "

    // radio button are group elements so they cannot target by id becuase id can only be given
    // to only 1 element. so in JS they are targeted by name attribute. 
    // it will show array of all elements that have same name.

    // the only diffrence in input fields values or radio and checkbox button is the checked value.
//  var gender = document.getElementsByName('gender') 
//  for(let i = 0; i < gender.length; i++){  // becuase it shows array to read array elements loop is always used.
//     if(gender[i].checked){
//         console.log(gender[i].value)
//     }
//  }
 
// =========on blur event checked====>

}
function validate(){
    var test = document.getElementById('firstName')
    console.log(test.value)
    if(!(test.value)){
        test.style.border = " 2px solid red"
    }
}

// in javascript we can get html elements mostly by ID but there are many other methods also.
// like byTagName , byName , byClassName , querySelector
// if we give same ID multiple time it will get the first one.

// var byClass = document.getElementsByClassName("abc")
// console.log("🚀 ~ file: set&get-values.js:34 ~ byClass:", byClass) // it will show array of all elements having same class.

// var byTagName = document.getElementsByTagName('input') // it will also show array

var querySel = document.querySelectorAll("#xyz") // in query Selector option .is used for class name. # is used for id.
// query selector All get array..
function myName(){
    
    console.log(querySel)

}
