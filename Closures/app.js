///================Closures==================================

// function outer(){
//     let count = 0;
//     function inner(){
//         count++;
//         console.log(count);
        
//     }
//     return inner;
// }
//  let counter = outer()

//  counter()
//  counter()
//  counter()



 //====================Example 2===================================

//  function test(){

//    let name = "Gautam";

//    function hello(){
//    let name = "rohan"
     // console.log(name);//------------>this is called Shadowing
                        //-inner variable outer variable ko hide kr deta hai
  // }

//    return hello;

// }

// let x = test();

// x();



//---------------question--------------------------------

// function outer(){
//     let name = "hello gautam";

//     function inner(){

//         console.log(name)
//     }
//     return inner
// }
// let name1 = outer()
// name1();



//-------------------------quesrtion--------------------------

// function game(){
//     let score = 0;

//     function add(){
//         score+=10;
//         console.log(score);
        
//     }
//     return add;
// }
// let total = game();

// total();
// total();
// total();


//-------------------------question------------------------

// function massage(){

//     let x = "Your message is:Hello";
//      function massage2(){
//         console.log(x);
        
//      }
//      return massage2
// }

// let ans = massage();
// ans();


//----------one more way to do this---------------------------

// function message(msg){

//     function inner(){

//         console.log("Your message is:", msg);

//     }

//     return inner;

// }

// let ans = message("Hello");

// ans();


//-------------------------Last question--------------------------------

// function bankAccount(balance){
//     function inner(){
//         balance+=500
//         console.log("Balance is = ",balance);
        
//     }
//     return inner;

// }
// let newBalance = bankAccount(1000);
// newBalance()
// newBalance()
// newBalance()


//----------------------one more last question------------------------


// function user(name){
//      let loginCount = 0;

//      function inner(){
//         loginCount++;
//         console.log(name," logged in",loginCount,"time");
        
//      }
//      return inner;
// }

// let yoo = user("gautam")
// yoo();
// yoo();
// yoo();



