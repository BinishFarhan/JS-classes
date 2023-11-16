// DOM combination of js and html
//events are those when task is performed by user on browser. 
// user click on button this event called onClick.
// user click on input field . event ==== on focus.
// user hover the mouse on anything = event onMouseOver
// user apna mouse hata de heading se == event === onMouseBlur

// in events we always write javascript code in "" 
// link javascript void, change style, mouse events, before after .


// we can directly type js in event listener or make a function and then call a function of with event listeners.
// function foo() {
//     console.log('i am a btn')
// }

// // a is variable in which btn1 id is stored.
// var a = document.getElementById('btn1');

// // to get element by id in js . when call only id it will take the whole html with tags.
// console.log("whole HTML in id btn1:", a)

// // when call innerHTML it will take innerhtml of id btn1
// console.log("inner HTML in id btn1:", a.innerHTML)

// // when call inner text it will take inner text of id btn 1
// console.log("only text in id btn1:", a.innerText)

// // getElementByName .... (only id unique).. when name used it may be multiple so it takes it with array. 
// // it will show nodelist. that is array. now to call first one sentence call with index.

// // b is variable in which elements get in js by name that is abc.

// var b = document.getElementsByName('abc')
// // it will get all the div or p or h ..... which are given name abc but in form of array.. if only 1 btn with same name it will take only one index.
// console.log(b)

// // now to call all the button separately use array index method
// console.log(b[0].innerHTML) // whole html with tags
// console.log(b[1].innerText) // only text


// link always require href .. so whenever we put event on link so wrtie javascript:void(0)
// events..
// onclick == for button
// onClick = for link
//on mouseover === when mouse is onthing.. // also use for pictures to change. 
//on mouse out === when we remove mouse from it.
//onfocus === for field input/textarea
// onblur 
//onkeyup == 

// changing image using fucntion.

function imageChange(e){ // e will receive image tag of html here.
 console.log(e)
 e.src = "./images/with apples.jpeg"}


function zoomImage(e){ 
// to change style of picture while using function.
e.style.transform = "scale(1.5)"
e.style.transition = "3s"
}
function clearImage(e){ 
    // to change style of picture while using function.
    e.style.transform = "scale(1)"
    e.style.transition = "3s"
    }

// on input fields when form submit on press enter.. 
// event of on key up will use in html tags.
function abc(){
    // console.log('test')
    // when we call function through any event.. we use event keyword of js.
    // console.log(event)//  it shows which key pressed and details about it.
    console.log(event.keyCode)// from this we get ascii code of the pressed key.
    //event.key will show pressed key.
    // if(event.keyCode === 13){
    //     console.log('submit')
    // }
}

// to use keyboard of calculator
// window global object of js.. everything store in this object.. and browser will understand from this.
// some events are for windows.
// console.log(window)
window.onkeydown = abc // this event calls the function by itself.


// DOM is tree of html of website.
// dom can be manipulated by javascript by using "document" keyword.
// node 
// textContent is used to insert text between li. (instead of createTextNode and then make it append child.
// but it is only useful for text.if you want to make another element u have to create element and then make it append child.)

// we can target element by tag name also.
// but it takes html collection

// // it takes enter as a text.
// var ul = document.getElementsByTagName("ul")
// console.log("🚀 ~ file: DOM.js:102 ~ ul:", ul[0].childNodes) // in this line it shows text repeatedly but first text is because 
// console.log("🚀 ~ file: DOM.js:102 ~ ul:", ul[0].children[0].text)
// var text = ul[0].children[0]
// text.textContent = "bye bye"


// attributes will show all the attributes and get attribute will required param.
var div =document.getElementById('prac')
function para(){
var para = document.createElement('p')
para.textContent = "Textual content comes in many forms, including. semantically in paragraphs, headings, lists and tables; visually in images, infographics and fliers and. programmatically in alternative text, closed captions and transcriptions"
para.setAttribute("class" , "para")
div.insertBefore(para , document.getElementById('button'))

}

// by default it shows aour append child always at last.
// to place it on our required we insertbefore.

console.log(document.querySelector("p"))


