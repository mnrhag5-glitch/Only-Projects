// let h1  = document.createElement("h1")
// let btn = document.createElement("button");
// let btn2 = document.createElement("button");
  
// h1.innerText = "Light Mode"
// btn.innerText = "Dark";
// btn2.innerText = "Light";

// document.body.appendChild(h1)
// document.body.appendChild(btn)
// document.body.appendChild(btn2)
 
// btn.addEventListener('click',(event)=>{
//     document.body.style.backgroundColor = "black"
//     h1.innerText = "Dark Mode";
// document.body.style.color = "white"
// })

// btn2.addEventListener('click',(event)=>{
//     document.body.style.backgroundColor = "white"
//     h1.innerText = "Light Mode";
// document.body.style.color = "black"
// })
 
//  let input = document.querySelector("#yoo");
//  input.addEventListener("input",(event)=>{
//     console.log(input.value);
    
//  })

// let input = document.querySelector("#yoo");
// let h2 = document.querySelector("h2");
 
// input.addEventListener("input",()=>{
//     h2.innerText = input.value;
// })

// let input = document.createElement("input");

// let h1 = document.createElement("h1");

// document.body.append(input,h1);

// input.addEventListener("input", ()=>{

//    h1.innerText = input.value;

// });



let input = document.createElement("input");
let h1 = document.createElement("h1");
 
document.body.appendChild(input);
document.body.appendChild(h1);

input.addEventListener("input",()=>{
    h1.innerText = input.value;
if(h1.innerText=="red"){
    h1.style.color = "red"
}
if(h1.innerText=="blue"){
    h1.style.color = "blue"
}
if(h1.innerText==""){
    h1.style.color = "black"
}
});

