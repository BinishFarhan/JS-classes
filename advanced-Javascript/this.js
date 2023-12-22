// ========DETAILS OF THIS KEYWORD=====>

// this refers to window object
// in browser this is window
//on events this is the element
// in function this is window

// commonly "this" keyword refer windows/browser ...
// console.log(this);  // window object with all its method. (alert , console ......)
// when any method of window is called this is not necessary to write this.window.alert or etc
// only method name can be called
// console.log(location); 


// in function "this" keyword also refer window
// function check(){
//     console.log(this) 
// }
// check();


// in object "this" refer to object .. in a nested object or function it refers to parent element.
// if "this" is inside a function of object it will consider obj. 

// let obj = {
//     name: "Haroon",
//     fatherName: "Ahmed",
//     displayName: function(){
//        return `${this.name}${this.fatherName}`
//     }
// }
// console.log(obj.displayName())

// in this ex: obj -> function ->  this === [object object]
// in this ex: obj -> function -> function  -> this === windows
// let parentObj = {
//     name: "Haroon",
//     fatherName: "Ahmed",
//     firstChild : {
//         name: "Binish",
//         fatherName: "farooq",
//     },
//     displayName: function(){
//        function foo(){
//         console.log(this)
//        }
//        foo()
//     }
// }
// console.log(parentObj.displayName())

// exampe of setTimeOut
// var obj = {
//     name : 123,
//     foo : function () {
//       console.log(this.name);
  
//     setTimeout(function() {
//     console.log(window);
//     }, 1000);
//     }
//     }
// obj.foo()