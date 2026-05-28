//***********************   SWAP QUETION   ***********************************


// let a = 10;
// let b = 20;

// function swap(){
//     [a,b] = [b,a]
//     return[a,b]
// }
// console.log(swap(a,b));



//************    80 se upr number print kro  ********************** */

let obj = [{
    name:"gautam",marks:89},
    {name:"seju",marks:90},
    {name:"luffy",marks:79},
    {name:"zoro",marks:69}
]

let newObj = obj.filter((i)=>{
    return i.marks>80
})
console.log(newObj);




