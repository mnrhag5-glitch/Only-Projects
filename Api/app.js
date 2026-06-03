
//===========================================================
//------------learning API------------------------
//============================================================



//--- to api ko example se smjhte hai ---
// man lo ki hm coustomer hai jo waiter ko order deta hai --
//or waitor kichan se khana leke ata hai---
//ese hi ham frontend developer api ko order dete hai ki --
//server se hmare liye data leke aooo------
//api json format me hota hai kuch kuch objact ki trh hota hai----
//api calll krne ke liyea fatch ki help li jati hai-----
//examples----cricket score pta krna---
//---weather ka pta krna-----


// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(data => console.log(data))


//--------------then ka use hai ki jab kaam complete ho jaye tab ye karo-------------
//---fetch server se data mangta hai or time lgta hai to "then"---
//---wait krta hai jab tak data na aa jaye---
//---phir next kaam krta hai----
//--simple  word me then future me milne wale result ko handle krta hai---




//   async function getUsers(){
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await response.json();
//   console.log(data);
// }

// getUsers();



//-------async await .then ka easy version hai-------

// async function getUsers(){
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await response.json();

//   data.forEach(user => {
//     console.log(user.address);
//   });
// }

// getUsers();


// fetch("https://jsonplaceholder.typicode.com/users")
// .then(Response=>Response.json())
// .then(data=>console.log(data));


// async function hello(){
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await response.json();
//     console.log(data);
// }
// hello();



// async function hello (){
//     let resonse = await fetch("https://jsonplaceholder.typicode.com/users")
//     let data = await resonse.json()
//     console.log(data);
    
// }
// hello()



// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response=>response.json())
// .then(data=>console.log(data))

// async function hello(){
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await response.json();
//     console.log(data)
// }
// hello();

// async function hello (){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json();
//     console.log(data);
//     data.forEach((a)=>{
//     console.log(a.email)
//     })
// }
// hello();




// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res=>res.json())
// .then(data=>

// data.forEach((a)=>{
// console.log(a.username)
// }))

// let userInfo="";
// fetch ("https://jsonplaceholder.typicode.com/users")
// .then(res=>res.json())
// .then(data=>
//     {userInfo = data
//         console.log(userInfo);
        
//     })

// let userInfo="";
// async function hello(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json()
//    userInfo = data;
// //    console.log(userInfo);
//    userInfo.forEach((a)=>{
//     console.log(a.username , a.email)
//    })
   

// }

// hello();


//-=============================================
//==============================================
//============REVESION CODE======================
//--===============================================
//================================================


// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res=>res.json())
// .then(data=>console.log(data)
// )



// let userInfo = "";
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res=>res.json())
// .then(data=>
//   {userInfo = data;
//   console.log(userInfo)
//   userInfo.forEach((a)=>{
//     console.log(a.username,a.email)
//   }) })




// async function hello (){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users")
//     let data = await res.json();
//     console.log(data)
// }  
// hello();



// let user = "";
// async function hello (){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users")
//     let data = await res.json();

//     user = data;
//     console.log(user)
//     user.forEach((a)=>{
//   console.log(a.address )
//     })
 
// }  
// hello();




/////==============TEST=====================
//===========================================
//=============================================


// API SE USER FETCH KRO OR SB USER KE NAAM PRINT KRO=========

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data =>console.log(data)


// )


//====jinke naam a se start hote unh eprint kro====(startsWith)
//====jinke naam e se end hote unhe print kro=====(endsWith)
//====jinke naame me koi words include hai use print kro===(includes)

// let user = ""
// async function hello (){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users")
//     let data = await res.json()
//     user = data
//   user.forEach((a)=>{
// if(a.username.endsWith("e")){
//     console.log(a.username);   
// }
//   })   
// }   

// hello()



//===make a new arrey with only emails===========

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data =>

//    { let onlyEmail = data

// // console.log(onlyEmail);
// let emails = onlyEmail.map((a)=>{
// return a.email


// })
// console.log(emails);



//    }
// )




// async function hello(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users")
//     let data = await res.json()
//    let email = data.map((a)=>a.email)  
//you can do it in console too
// console.log(data.map((a)=>a.email));

// let email = data;
// email.forEach((a)=>{
// if(a.email.endsWith("biz")){
//     console.log(a.email);
    
// }

// })


// }

// hello();


// async function hello(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json();

//     let emails = data
//         .filter(a => a.email.endsWith(".biz"))
//         .map(a => a.email);

//     console.log(emails);
// }

// hello();


// async function hello(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json();
//     console.log(data.length);   
// }
// hello();

//=========enough for today kal iska revision hoga or again test==============



// fetch ("https://jsonplaceholder.typicode.com/users")
// .then(res=>res.json())
// .then(data=>
//     data.forEach((a)=>{
//         console.log(a.email);
        
//     })
// )



// async function hello(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users")
//     let data = await res.json()
//     // console.log(data);
     
// data.forEach((a)=>{
//    if(a.username.startsWith("K")){
//     console.log(a.username)
//    }
// })


// }
// hello()



// fetch ("https://jsonplaceholder.typicode.com/users")
// .then(res=>res.json())
// .then(data=>
//   {let emails=data.map((a)=>{
//     return a.email
//   })
// console.log(emails);

// }
// )








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


// async function hello(){

// let res = await fetch("https://jsonplaceholder.typicode.com/users");
// let data = await res.json();
// console.log(data);

// data.forEach((user)=>{
// let div = document.createElement("div")
// let h2 = document.createElement("h2")
// let p = document.createElement("p")

// div.appendChild(h2)
// div.appendChild(p)

// document.body.appendChild(div)

// h2.innerText = user.name;
// p.innerText = user.email;  


// })



// }

// hello();




