// async function hello(){}   //===>basic syntax 
//==async background me kaam krata hai or await kaam pura hone ka wait  krta hai.

//==============Practice Qurstions=======================
//==============Practice Qurstions=======================
//==============Practice Qurstions=======================
//==============Practice Qurstions=======================
//==============Practice Qurstions=======================
//==============Practice Qurstions=======================


// async function hello(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let result = await res.json();
//     console.log(result);
    
// }
// hello();



//------Question 1

// async function hello (){
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     let result = await res.json();

//      console.log(result.title);
    
// }
// hello();



//-------Question 2

// async function yoo(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     let data = await res.json();
  
//     console.log(data.completed)
// }
// yoo();



//------Question 3


// let h1 = document.createElement("h1");
// h1.innerText = ""
// document.body.appendChild(h1)


// async function hy(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json();
//     h1.innerText=(data[0].name)
// }
// hy();



//---------question 4

// let button = document.createElement("button");
// button.innerText = "Get Data"
// document.body.appendChild(button);


// button.addEventListener("click",()=>{
//     async function zoro(){
//         let res = await fetch("https://jsonplaceholder.typicode.com/comments");
//         let data = await res.json();
//         console.log(data);
//     }
//     zoro();
// })


//--------question 5


// let input = document.createElement("input");

// let button2 = document.createElement("button");
// button2.innerText = "click"
// document.body.appendChild(input)
// document.body.appendChild(button2);


// button2.addEventListener("click",()=>{
//     async function uii(){
//         let res = await fetch(`https://jsonplaceholder.typicode.com/users/${input.value}`);
//         let data = await res.json();
//         console.log(data.name);

        
//     }
//     uii();
// })



////==============multiple data show krna======================
////==============multiple data show krna======================
////==============multiple data show krna======================
////==============multiple data show krna======================
////==============multiple data show krna======================


async function hello(){

let res = await fetch("https://jsonplaceholder.typicode.com/users");
let data = await res.json();
console.log(data);

data.forEach((user)=>{
let div = document.createElement("div")
let h2 = document.createElement("h2")
let p = document.createElement("p")

div.appendChild(h2)
div.appendChild(p)

document.body.appendChild(div)

h2.innerText = user.name;
p.innerText = user.email;  


})



}

hello()