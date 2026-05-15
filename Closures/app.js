///================Closures==================================

function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count);
        
    }
    return inner;
}
 let counter = outer()

 counter()
 counter()
 counter()



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