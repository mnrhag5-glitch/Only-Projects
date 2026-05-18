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

function hello(message,time){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(message)
        },time)
    })
}
hello("message",2000)
.then((data)=>{return hello("Login")})
.then((data)=>{return hello("Fetch Profile")})
.then((data)=>{return hello("Shoe dashboard")})
