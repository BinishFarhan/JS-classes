let heading = document.getElementById('mapArr')
const arr = ["karachi" , "lahore" , "fsd"]
var newArr = arr.map((item, index)=> `${item.toUpperCase()} is at ${index} `
)
// console.log("🚀 ~ newArr ~ newArr:", newArr)

const array = [1,2,3]
const obj = [
    {id:1 , name: "smit"},
    {id:2 , name: "navtac"},
    {id:2 , name: "areena"},
    {id:2 , name: "aptech"}
]
// const obj1 = obj.map((item)=>{
// heading.innerHTML += `${item.name}<br>`
// })
// console.log("🚀 ~ obj1 ~ obj1:", obj1)
const obj2 = obj.filter((item)=>{
    return item.name.charAt(0) == "a"})
console.log("🚀 ~ obj2 ~ obj2:", obj2)
obj2.map((item)=> console.log(item.name))

const salary = [1000 , 2000 , 3000, 4000]
const sal = salary.reduce((item , acc) => item + acc , 5)
console.log("🚀 ~ sal ~ sal:", sal)

