//----------------syntax-------------------------

// let promise = new Promise((resolve,reject)=>{

// })


//----------------for result method---------------------
// .then----------------------------success
// .catch------------------------------error


//--------------------question-----------------------
// let promise = new Promise((resolve, reject) => {

//     let success = true;

//     if(success){
//         resolve("Payment Successful");
//     } else {
//         reject("Payment Failed");
//     }

// });

// promise
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// });




//-------------------------question--------------------------------------



// function fetchData(){

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             resolve("Data Loaded");
//         }, 3000);

//     });

// }

// fetchData()
// .then((data) => {
//     console.log(data);
// });


//----------------------------promise Chaining---------------------


// function task(time, message){

//     return new Promise((resolve) => {

//         setTimeout(() => {
//             console.log(message);
//             resolve();
//         }, time);

//     });

// }

// task(2000, "Step 1")
// .then(() => {
//     return task(2000, "Step 2");
// })
// .then(() => {
//     return task(2000, "Step 3");
// });


//--------------------------------one more example------------------------------

// function login(password){

//     return new Promise((resolve, reject) => {

//         if(password === "1234"){
//             resolve("Login Success");
//         } else {
//             reject("Wrong Password");
//         }

//     });

// }

// login("1111")
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// });



//-------------------------------question-====================


// function hello(){
//    return new Promise((res,rej)=>{
   
//       setTimeout(() => {
//          res("Downloading");
        
//     },2000)
// })}

// hello()
// .then((data)=>{console.log(data)})
// .catch((error)=>{console.log(error)})



//----------------------------question----------------------------------------

// function hello(message,time){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(message)
//         },time)
//     })
// }
// hello("message",2000)
// .then((data)=>{
//     console.log(data)
//     return hello("Login",3000)})
// .then((data)=>{
//     console.log(data)
//     return hello("Fetch Profile",4000)})
// .then((data)=>{
//     console.log(data)
//     return hello("Shoe dashboard",5000)})

// .then((data) => {
//     console.log(data);
// });



//--------------------question---------------------------------------

// function hello(password){
//     return new Promise((res,rej)=>{
//         if(password===1456){
//             res("login successfully")
//         }else{
//     rej("wrong password")
//         }
//     })
// }
// hello(1456)
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })


//--------------question-------------

// function hello(){
//    return new Promise((res)=>{
//         setTimeout(()=>{
//             res("data loaded")
//         },2000)
//     })
// }
// hello()
// .then((data)=>{console.log(data)})


//---------------------question---------------------
//  function password(value){
//     return new Promise((res,rej)=>{
//         if(value==456789){
//             res("correct")
//         }else{
//             rej("wrong password")
//         }
//     })
//  }
//  password(456789)
//  .then((data)=>{console.log(data)})
//  .catch((error)=>{console.log(error)})


//-------------------question--------------------------


// function chaining(message,time){
//     return new Promise((res)=>{
//         setTimeout(()=>{
//             res(message)
          
//         },time)
//     })
// }
// chaining("login",2000)
// .then((data)=>{console.log(data);return chaining("fetch profile",3000)})
// .then((data)=>{console.log(data);return chaining("open dashboard",4000)})
// .then((data)=>{console.log(data)})

//---------------------------------question ------------------------

// function api(){
//     return new Promise((res)=>{
//         setTimeout(async()=>{
       
//                 let question = await fetch("https://jsonplaceholder.typicode.com/users")
//              let data = await question.json()
//                 res(data)
             
//             }
//         ,3000)
//     })
// }

// api()
// .then((data)=>{console.log(data)})



//-------------------------question--------------------------------------



// function hello(message,time){
//     return new Promise((res)=>{
//         setTimeout(()=>{
//             res(message)
//         },3000)
//     })
// }

// Promise.all([
//     hello("hello",2000),
//     hello("am coming after 3 sec",2000),
//     hello("and i am after 2 sec",2000),
//     hello("and me 4 sec",2000),
// ])
// .
// then((data)=>{
//     console.log(data);
    
// })
