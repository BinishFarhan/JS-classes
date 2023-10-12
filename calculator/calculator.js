// making calculator by using function
// when we target html tags in JS we do work on DOM.
// DOM is document object model . to get html elements to perform operation or add functionality thorugh javascript is called DOM manipulation.

// we jst give id to a <p> tag in html and make button "click me". 
//when  click on button we want to show paragraph .
// when we click on button an event is called in JS  
// on click is an event name of js. 
// on db click means work on two clikc
// to work on right click write on context menu.
// onclick is an attribute of html which accept js code.
// index.html is a document

// function myFunc(){
//  document.getElementById("abc").innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ab molestias impedit aspernatur ipsum accusantium, repellat, illum mollitia perspiciatis, voluptas corporis qui? Cumque ducimus magnam repellat saepe expedita quod nemo."
// }
// to inner HTML is only used with paragraph etc
// when we talk about field .value is 
// readonly is used with input tag to make input field only readable .. we cant type anything on it
// eval is used to perform calculations eval()


function dabaya(e){
    document.getElementById('inp').value += e
}

function eq(){
    var a = document.getElementById('inp')
    a.value = eval(a.value)
}

function clr(){
    document.getElementById('inp').value = ''
}

function ccc(){
    var a = document.getElementById('inp')
    a.value = a.value.slice(0,-1)
}