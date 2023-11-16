// METHODS OF MATH
// Math.round (round  of the number.)(5.6 == 6) (it will not update the previous num it returns roundedof number to the nearest integar)

// var num = 456.678
// var returnValue = num.toFixed(2) 
// // var newNum = Math.round(456.567)
// console.log(num)
// console.log("🚀 ~ file: Math-methods.js:6 ~ returnValue:", returnValue)



// Math.ceil (round of the number to larger number) (5.6 == 6) or (5.3 == 6) (it will not update the previous num it returns roundedof number to the greater integar)
// Math.floor (round of the number to smaller number) (5.6 == 5) or (5.3 == 5) (it will not update the previous num it returns roundedof number to the smallest integar)
// Math.random (generate the random no.) value is between 0-1.. if you want bigger value multiply it by a number.
//(The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1,)
// Math.random()*2 ( gives values between 0-2)
// console.log(Math.random() *2)

// toFixed method is used to show required decimal places only. 
// it return the fixed number after decimal in string.
 // toFixed is used to controll the length of decimal but it converts number into string.
 // if there is only two number after decimal and u give toFixed the value of 5 it will automatically add 000 in end.
// document.write(4.5645435.toFixed(2))


// DICE GAME 

    // var rollTheDice = prompt('Roll the Dice, write your name');
    // var toss = Math.random()*6 //or
    // //it can also be written as
    // //var toss = Math.ceil(Math.random()*6)
    // //alert(toss)
    // var ch = Math.ceil(toss) //or
    // // alert(ch) // for 1 dice
    // var ch1 = Math.ceil(toss) 
    // console.log(ch1,ch) // for two dice
    // // var ch = Math.floor(toss)+1 or
    // // var player2 = prompt('player 2');
    // // var toss = Math.random()*6
    // var ch = Math.ceil(toss)
    // alert(ch)

// document.write(Math.ceil(Math.random()*6))
// document.write("<br/>")
// document.write(Math.floor((Math.random()*6) + 1))


// GENERATE RANDOM PASSWORD.

// var randomValues = "a;lkdjfien29387$%adfdf^&4565768()sfgfdsg#"
// var password = ""

// for(let i = 0; i < 10; i++){
//     var randomNumber = Math.floor(Math.random()*randomValues.length)
//     console.log(randomValues[randomNumber])
//     password += randomValues[randomNumber] 
       
// }
// console.log(password)


// Head tail game

// alert("Babar Azam choose Head , Kholi choose Tail")
// var toss = prompt('Toss the coin');
// var toss = Math.round(Math.random()*1)
// if(toss == 1){
//     alert('Babar wins');
// }else{
//     alert('Kholi wins')
// }
