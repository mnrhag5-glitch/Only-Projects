let h1  = document.createElement("h1")
let btn = document.createElement("button");
let btn2 = document.createElement("button");
  
h1.innerText = "Light Mode"
btn.innerText = "Dark";
btn2.innerText = "Light";

document.body.appendChild(h1)
document.body.appendChild(btn)
document.body.appendChild(btn2)
 
btn.addEventListener('click',(event)=>{
    document.body.style.backgroundColor = "black"
    h1.innerText = "Dark Mode";
document.body.style.color = "white"
})

btn2.addEventListener('click',(event)=>{
    document.body.style.backgroundColor = "white"
    h1.innerText = "Light Mode";
document.body.style.color = "black"
})