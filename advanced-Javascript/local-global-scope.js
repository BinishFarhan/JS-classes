// pg no 155 - 161
// limitation of var 
//  var can be updated anywhere in application 
// it will not give error when someone in app declared variable by same name. 
// it will update the previous var.

// this problem solve by let . because it give error when someone again use same name for variable.

// ==== global scope =====
// variable initialize outside {} are all global whether it is declared by var let or const.
// they can be print inside inside block {}
// but if variable declard inside { } it can't be print outside block. except it is declared by var.
// 
// if(true){
//     var a = 10
// }
//  we can declare variable without use any var,let,const. it is return as global var .. it will print whether it is inside { } or not.

// let and const are block for scope.
// var global scope. but is has functional scope. if it declared in function it will not print outside funciton.
//closure === > 


// ===== classic function always hoisting.. but if funciton made by function expression it will not be hoist.======>
