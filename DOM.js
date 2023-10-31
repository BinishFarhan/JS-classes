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

var b = document.getElementsByName('abc')
// it will get all the div or p or h ..... which are given name abc but in form of array.. if only 1 btn with same name it will take only one index.
console.log(b)

// now to call all the button separately use array index method
console.log(b[0].innerHTML) // whole html with tags
console.log(b[1].innerText) // only text
