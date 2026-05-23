//---------math.round------------------
//---------math.round------------------
//---------math.round------------------

console.log(Math.round(10.4));
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..
//--jab koi point value .5 se niche hoti hai to js engine  use 10 lega
//--agar .5 se upr ho to vo 11 lega


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

console.log(Math.ceil(10.1))

//---agr point me koi bhi value ati hai to ceil use next number me le jati hai 
//to ynhs 11 ayega----------->>>>>>>>>>>>>>>>>>>>>>



console.log(Math.floor(10.2))

//ye point hatane ka kaam krta hai>>>>>>>>>>>>>>>>>>>>>>>>>.



console.log(Math.trunc(125.655))

//same floor ki trh kaam krta hai point value htata hai///
//diff ye hai ki floor point value se niche ata hai or ye use hatata hai


console.log(Math.pow(2,5))

//iska meaning hai ki 2 ki power five >>>pow ka mtlb power


console.log(Math.sqrt(36))  //  6 output

//ye squre root nikalta hai ki 36 kiska hai 


console.log(Math.cbrt(8))  // 2

//ye cube root nikalta hai



console.log(Math.abs(-15))

//ye negative value ko positive layega


console.log(Math.max(2,7))  // 7

//ye max value return krta hai

console.log(Math.min(47,58,98))  //  47

//ye min value retnr krta hai


console.log(Math.trunc(Math.random()*9000)+1000)

//ye random value deta hai hme 0 to 1 bich tak


let a = 58.597745

console.log(a.toFixed(2));
//----tofixed  point ke baad ke sirf do digit lega agr 3 likhoge to teen lega


let arr = [1,2,3,4,5]
let sum = arr.reduce((a,b)=>{
    return a+b
})

let avg = sum/2
console.log(avg);
