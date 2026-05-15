console.log("Lets start");



//---------------------For Each----------------------------

// let arr = [1,2,3];
// for(let i=0; i<arr.length; i++){

//    console.log(arr[i]);

// }=================normal loop-------------------


// let arr = [1,2,3];

// arr.forEach((item)=>{---------------isme (item)==callback hai
//                             foreach(callback)
//    console.log(item);

// })


//-----------------------question---------------------------
// let names = ["Gautam","Rohan","Aman"];

// names.forEach((user)=>{

//    console.log("Hello",user);

// })



//-------------------question-----------------------------------

// let nums = [1,2,3,4]

// nums.forEach((value)=>{
//     console.log(value*2)
// })



//------------------question--------------------------------

// let names = ["gautam","rohan","aman"]
// names.forEach((allNames)=>{
//     console.log("hello",allNames)
// })



//-------------------question--------------------------------
// function uknown(){
// let arr = [1,2,3,4];


//     function multiply(){
//         arr.forEach((value)=>
//         {console.log(value*10)
//     })}
//     return multiply
// }

// let output = uknown()
// output();



// let arr = [1,2,3,4,5,6,7,8,9,10]
//  arr.forEach((value,index,array)=>{

//    console.log(array);

// })


//----------------------map------------------------------------

//-----------------------question------------------------------------


// let arr =[1,2,3,4,5];
// let res = arr.map((value)=>{
//     return value*2
// })
// console.log(res)


//----------------------question----------------------------


// let names = ["gautam","rohan"];
// let result = names.map((user)=>{

//    return "Hello " + user;

// })
// console.log(result)


//---------------question------------------------------------


// let prices = [100,200,300];
//  let res = prices.map((value)=>{
//      return value+value*0.10 
     
//     })
  
 
//  console.log(res)


///-----------------question ------------------------------



// let users = ["gautam","rohan","aman"];

// let res = users.map((value)=>{

//     return "Mr." + value;

// })

// console.log(res);


//------------question---------------------------------

// let nums = [1,2,3,4];
// let ans = nums.map((value)=>{
//     return value**2
// })
// console.log(ans)



//------------------------question-------------------------

// let nums = [10,20,30];

// let total = nums.reduce((a,b)=>{

//     return a+b;

// })

// let avg = total / nums.length;

// console.log(avg);


//-----------qjuesrtion--------------------------



// let nums = [1,2,3,4,5,6,7,8];

// let res = nums.filter((a)=>{
//      return a%2!==0
// })
// console.log(res)


//-----------qjuesrtion--------------------------

// let users = ["gautam","ram","aman","rohit","om"];

// let res = users.filter((names)=>{
//     return names.length >=5;
// })
// console.log(res);



// let users = ["gautam","ram","aman","rohit","om"];

// let res = users.filter((names)=>{

//     return names.length >= 5;

// })

// console.log(res);

//-----------qjuesrtion--------------------------

// let prices = [100,500,2000,300,7000];
// let res = prices.filter((yoo)=>{
//     return yoo > 1000
// })
// console.log(res)



//==============question----------------------------

// let nums = [3, 10, 15, 22, 33, 40, 7];

// let res = nums.filter((hy)=>{
//     return hy > 10 && hy % 2==0
// })
// console.log(res)


//---------------------qestio --------------------------


// let users = ["gautam", "ram", "shyam", "aman", "rohit", "om", "suresh"];

// let result = users.filter((helo)=>{
//     return helo.length>=2 && helo.startsWith("s")
// })
// console.log(result)


//---------------------qestio ----------------------


let students = [
  { name: "Aman", marks: 45 },
  { name: "Rohit", marks: 75 },
  { name: "Gautam", marks: 32 },
  { name: "Shyam", marks: 88 },
  { name: "Ram", marks: 55 }
];

let res = students.filter((uii)=>{
    return uii.marks >= 50 && uii.name.length >= 4
});

console.log(res)