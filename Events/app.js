
//=====================================
//=====================================
//===============CLICK EVENT=================
//=====================================
//=====================================




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
 






//============================================
//============================================
//================  input ============================
//============================================
//============================================


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



// let input = document.createElement("input");
// let h1 = document.createElement("h1");
 
// document.body.appendChild(input);
// document.body.appendChild(h1);

// input.addEventListener("input",()=>{
//     h1.innerText = input.value;
// if(h1.innerText=="red"){
//     h1.style.color = "red"
// }
// else if(h1.innerText=="blue"){
//     h1.style.color = "blue"
// }
// else{
//     h1.style.color = "black"
// }
// });






//=======================================================
//=======================================================
//=======================================================
//===========================SUBMIT======================
//=======================================================
//=======================================================
//=======================================================


// let form = document.createElement("form")
// let input = document.createElement("input")
// let button = document.createElement("button")
// let h1 = document.createElement("h1")


// form.appendChild(input)
// form.appendChild(button)
// form.appendChild(h1)

// document.body.appendChild(form)

// button.innerText = "submit"

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     h1.innerText = input.value
//         input.value=""
    


// })




// let form = document.createElement("form");

// let input = document.createElement("input");

// let button = document.createElement("button");

// let h1 = document.createElement("h1");

// button.innerText = "Submit";

// form.appendChild(input);

// form.appendChild(button);

// document.body.appendChild(form);

// document.body.appendChild(h1);

// form.addEventListener("submit",(e)=>{

//     e.preventDefault();

//     h1.innerText = input.value;

//     input.value = "";

// });



// let form = document.createElement("form")
// let input = document.createElement("input")
// let button = document.createElement("button")
// let ul = document.createElement("ul")
// let li = document.createElement("li")

// button.innerText = "Add";

// form.appendChild(input)
// form.appendChild(button)
// form.appendChild(ul) 


// document.body.appendChild(form)
// document.body.appendChild(ul)

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     let li = document.createElement("li")
//     ul.appendChild(li)

 
//     li.innerText = input.value;
//     input.value = "";

// })




let btn = document.createElement("button")
let para = document.createElement("p")
btn.innerText = "Hide"
para.innerText = "Hello Gautam"

document.body.appendChild(btn)
document.body.appendChild(para)

btn.addEventListener("click",()=>{
    para.remove();
})

