//***********************   SWAP QUETION   ***********************************


// let a = 10;
// let b = 20;

// function swap(){
//     [a,b] = [b,a]
//     return[a,b]
// }
// console.log(swap(a,b));



//************    80 se upr number print kro  ********************** */

// let obj = [{
//     name:"gautam",marks:89},
//     {name:"seju",marks:90},
//     {name:"luffy",marks:79},
//     {name:"zoro",marks:69}
// ]

// let newObj = obj.filter((i)=>{
//     return i.marks>80
// })
// console.log(newObj);



//


//**********console.log(isNaN("harshit"));   output is true
//there are three type o pop-up alert , conferm , prompt
//termprol deadzon---->wo time jab variable declare ho chuka hai pr use use nhi kr skte
//diff type of error--->syntex error , type error , or refrenss error.
//



//*******************largest element and smallest ************************ */
//*******************largest element and smallest ************************ */
//*******************largest element and smallest ************************ */




// let num = [12,2,5,54,23,43,4,64,65,44,65]

// let max = num[0]
// for(i=1;i<num.length;i++){
//     if(max<num[i])
//         max = num[i]
    
// }
// console.log(max);


//*****************************again chat gpt *************************** */
//*****************************again chat gpt *************************** */


// let arr = [12,23,13,54,34,54,23,15]

// let largest = arr.sort((a,b)=>{return b-a})

// console.log(largest[0]);




// let arr = [2,3,4,5,6,7]
// let min = arr[0]
// for(i = 1; i<arr.length; i++){
//     if(min>arr[i])
//         min = arr[i]
// }
// console.log(min);





//**********************  find second big elemet and smallesty  ****************************** */
//**********************  find second big elemet and smallesty  ****************************** */


// let arr = [1,2,3,4,5,6,7]

// let max = Math.max(arr[0],arr[1]);
// let Smax = Math.min(arr[0],arr[1]);

// for(i=2;i<arr.length;i++){
//     if(arr[i]>max){
//         Smax=max
//         max=arr[i]
//     }else if(arr[i]>Smax && max!=arr[i]){
//         Smax = arr[i]
//     }
// }
//  console.log(Smax);
 



//********************smallest***************************** */
//********************smallest***************************** */



// let arr = [1,2,3,4,5,6,7]

// let min = Math.max(arr[0],arr[1]);
// let Smin = Math.min(arr[0],arr[1]);

// for(i=2;i<arr.length;i++){
//     if(arr[i]<min){
//         Smin=min
//         min=arr[i]
//     }else if(arr[i]<Smin && min!=arr[i]){
//         Smin = arr[i]
//     }
// }
// console.log(Smin);


//**************************chat gpt ka ans********************************** */
//**************************chat gpt ka ans********************************** */


// let arr = [1,22,13,54,15,6,17];

// arr.sort((a,b) => b-a);

// console.log(arr[1]);



//********************revervse array  **************************** */
//********************revervse array  **************************** */
//********************revervse array  **************************** */



// let arr = [12,3,4,5,6,7];

// let rev = [];

// for(let i = arr.length - 1; i >= 0; i--){     // lenth-1 se hme last index value milti hai
//     rev.push(arr[i]);
// }

// console.log(rev);





//***************move 0 one side and 1 onw side**************************** */
//***************move 0 one side and 1 onw side**************************** */
//***************move 0 one side and 1 onw side**************************** */


// let arr = [0,1,6,8,7,1,2,3,0]

// let i = 0,j=0;
// while(i<arr.length){
//     if(arr[i]==0){
//         let temp = arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp
//         j++
//     }
//     i++
// }
// console.log(arr);



//************chat gpt method********************************** */
//************chat gpt method********************************** */

// let arr = [0,1,1,0,1,0,0,1,1,0];

//arr.sort((a,b) => a - b);   //sort ka use line by line ke liye hota hai 
//   mtlnb ki line by line arrange krna

// console.log(arr);



//***************ye alphabetical order ke liye */

// let arr = ["gautam","seju","rhui"]

// let ans = arr.sort()
// console.log(ans);



//-------------lekin number ke time pura sort krna pdta hai****************
//-------------lekin number ke time pura sort krna pdta hai****************


// let arr = [10, 2, 5, 1];

// arr.sort((a, b) => a - b);

// console.log(arr);




//-----------------------output kya ayega -----------------------------------

// let arr = [10,20,30,40,50,60]

// let ans = arr.find((i)=>i>20)
// console.log(ans);
   

//----30 bcz find hme sirf agli ek value deta hai or filter agli sari value

//---------------------------------------------------------------------------------


// console.log(a,b);
// var a = 10;                // undifine
// let b = 100;               // refrence error




//----------------delete something------------------------------------


// let obj = {name:"ram",age:25,ismale:true}
// delete obj.age;
// console.log(obj);

//----------------------------------------------------------------




//----------------------three way to chnage obj into array--------------------------------


//let obj = {name:"ram",age:22,ismale:true}
//console.log(Object.keys(obj));
//console.log(Object.values(obj));
//console.log(Object.entries(obj));


//---------------------------------------------------------------------




//----------------------left rotation by 1 element-----------------------------------------


// let arr = [1,2,3,4,5]
// let copy = arr[0]

// for(let i = 0; i<arr.length-1;i++){
//     arr[i] = arr[i+1];

// }
// arr[arr.length-1] = copy
// console.log(arr);


//--------------------------chat gpt ------------------------------------------------

// let arr = [1,2,3,4,5];

// arr.push(arr.shift());

// console.log(arr);

//***but as a interview purpose upr wala jyada acha hai */

//---------------------------------------------------------------------------------------




//------------------------------right rotaion by 1 element------------------------------------------




// let arr = [1,2,3,4,5]
// let copy = arr[arr.length-1]

// for(let i = arr.length-1; i>0;i--){
//     arr[i] = arr[i-1];
     // loop arr.lenght-1 se chla yaani ki last index se knha tak -> 0 tk or i kr diya 
     // -- iske baad arr[i] index me arr ki 1 value - kr di phir arr[0] index me last index rkh diya
// }
// arr[0] = copy
// console.log(arr);


//-------------------------------chat gpt  --------------------------------------------

// let arr = [1,2,3,4,5];

// arr.unshift(arr.pop());

// console.log(arr);

//----------------------------------------------------------------------------------



//let arr = [1,2,3];

//console.log(...arr);   //its a spread operator


//----------------------------------------------------------------------------------




//-------------------exapmle of spread perameter----------------------------------------

// let arr = [1,2,3,4]

// console.log(...arr);



//-----------------------exaple of rest perameter---------------------------------

// function hello(...e){
//      console.log(e);
     
// }
// hello(1,2,3,4,5)



//---------------------------------counter 1 bdhega------------------------------

// var createCounter = function(n) {
//     let count = n;
//     return function() {
//        return count++ 
//     };
// };

// let counter = createCounter(10)

// console.log(counter());
// console.log(counter());
// console.log(counter());

//---------------------------------------------------------------------------------


//------------------------------obj distucturing----------------------------


// const user = {
//     name: "Gautam",
//     age: 22,
//     city: "Shimla"
// };

// const { name, age, city } = user;

// console.log(name); // Gautam
// console.log(age);  // 22
// console.log(city); // Shimla


// ---------------------------------------------------------------------------------



// -----------------------------------SPREAD OPERATOR----------------------------------------------

// let arr = [1, 2, 3];

// let newArr = [...arr, 4, 5];

// console.log(newArr);


//OBJ ME SPREAD-----

// let obj ={a:1,b:2}
// let obj2 = {...obj,c:3}  // rule => spread me dobara ek hi key run nhi kr skte.
// console.log(obj2);   

//-----------------------------------------------------------------------------------

//---------------------------------------rest operator----------------------------

// function sum(...nums) {
//     console.log(nums);
// }

// sum(1, 2, 3, 4);

// ek or--------

// function  sum(...nums){
// let total = 0;
// for(let n of nums){
//      total+=n
// }
// return total
// }console.log(sum(1,2,3,4));


//---------------------------------------------------------------------------------------


//-------------- - -----------------Closure--------------------------------------


// function hello(){
//      let count = 0;
//      function plus(){
//           count++;
//           console.log(count);
          
//      } return plus
// }

// let sum = hello()

// sum()
// sum()
// sum()

//------------------------------------------------------------------------------------------


//-----------------------------------------Lexical Scope-------------------------------------------------


// // 👇 Parent Function
// function num() {

//   // 👇 Parent ka variable
//   let count = 0;

//   // 👇 Child (Inner) Function
//   function sum() {

//     // 👇 Lexical Environment:
//     // sum() parent function num() ke variable (count)
//     // ko access kar raha hai.

//     count++;

//     console.log(count);
//   }

//   // 👇 Child function ko return kar diya.
//   return sum;
// }

// // 👇 num() call hua.
// let plus1 = num();

// // 👆 Yahin par num() ka execution khatam ho gaya.

// // Lekin...
// // sum() return ho chuka hai aur plus1 me store hai.
// // Isliye JavaScript count ko delete nahi karti.
// // Isi ko Closure kehte hain.

// // Ab plus1() call karna matlab sum() call karna.

// plus1(); // count = 1
// plus1(); // count = 2
// plus1(); // count = 3
// plus1(); // count = 4


//----------------------------------------------------------------------------

//---------------------how to remove duplicate elements--------------------

// let arr = [1, 2, 2, 3, 4, 4];

// let unique = [...new Set(arr)];

// console.log(unique);


// //-----------with loop==>>>>>

// let arr = [1, 2, 2, 3, 4, 4];
// let unique = [];

// for (let i of arr) {
//   if (!unique.includes(i)) {
//     unique.push(i);
//   }
// }

// console.log(unique);

// //----with filter====>>>>>>>

// let arr = [1, 2, 2, 3, 4, 4];

// let unique = arr.filter((item, index) => {
//   return arr.indexOf(item) === index;
// });

// console.log(unique);

//-----------------------------------------------------------------------------------------------



//-------------------function to reverse string--------------------------------
// function reverse(){
//    let a = "gautam";
//    let rev = '';
//    for(let i = a.length-1;i>=0;i--){
//      rev+=a[i];
//    }return rev;
// }
// console.log(reverse());





// let string = "Full-Stack-Development";
// let reverse = '';
// for(let i = string.length-1;i>=0;i--){
//      reverse+=string[i];
// }
// console.log(reverse);



// let arr = [1,2,3,4,5];
// let rev = [];
// for(let i=arr.length-1;i>=0;i--){
// rev.push(arr[i])
// }
// console.log(rev);


//-----------------------------------------------------------------------------------

//--------------------------------largest niumber in array-=-----------------------------

// let arr = [2,4,5,7,8,9]
//  arr.sort((a,b)=>{
//      return b-a
// })
// console.log(arr[0]);





// let arr = [2,4,5,7,8,9]
// let res = Math.max(...arr)
// console.log(res);






// let arr = [2,4,5,7,8,9]
// let max = arr[0]
// for(let i = 0;i<arr.length;i++){
//      if(max>arr[i]){
//           max=arr[i]
//      }
// }

// console.log(max);


//-----------------------------------------------------------------------------------

//----------------------------------remove dupliicate form arr ------------------------


// let arr = [1,2,3,4,5,5,6,4]
// let orginal = [...new Set(arr)]
// console.log(orginal);


//-----------------------------------------------------------------------------------

//-----------------------flatten a nested array--------------------------------

// let arr = [1, [2, 3], [4, [5, 6]]];
// console.log(arr.flat(Infinity));



//-----------------------------------------------------------------------------------

//-------------------------------------Shallow copy----------------------------------

// let obj1 = {
//   name: "Ram",
//   address: { city: "Delhi" }
// };

// let obj2 = { ...obj1 };

// obj2.address.city = "Mumbai";

// console.log(obj1.address.city); // Mumbai

//-----------------------------------------------------------------------------------


//---------------------------------Deep Copy -------------------------------


// let obj1 = {
//   name: "Ram",
//   address: {
//     city: "Delhi"
//   }
// };

// let obj2 = structuredClone(obj1);

// obj2.address.city = "Mumbai";

// console.log(obj1.address.city); // Delhi
// console.log(obj2.address.city); // Mumbai

//-----------------------------------------------------------------------------------


//--------------------find longest string in variable--------------------------------

// let arr = ["cat", "elephant", "dog", "javascript"];
// let res = arr.reduce((a,b)=>{

//      if(a.length>b.length){
// return a;
          
//      }else{
// return b;
          
//      }
// })
// console.log(res);


//if in string ===========================

// let str = "full stack development";
// let long = str.split(' ')
// let longest = long.reduce((a,b)=>{
//      if(a.length > b.length){
//           return a;
//      }else {return b}
// })

// console.log(longest);

//-------------thoda or short -----------------

// let str = "hello this is gautam"
// let longest = str.split(" ").reduce((a,b)=>
//    a.length > b.length ? a:b
// )
// console.log(longest);


//--------------------------------------------------------------------------------------------------
//-------------------------------- infinite curring ------------------------------------------------------------------

// function add(a){
//      return function(b){
//      if(b) return add(a+b)
//           return a;
// }}
// console.log(add(5)(5)(4)());

//-------------------------more short-------------------------------------------------

// function add(a){
// return b => b ? add(a+b) : a}
// console.log(add(5)(8)(7)(30)());


//-----------------------------------------------------------------------------------------
//---------------------------------- Promise  -------------------------------------------------------

// let pro = new Promise((res,rej)=>{
//      let result = true;
//      if(result){
//           res("You are pass")
//      }else{
//           rej("You are fail")
//      }
// })

// pro.then((data)=>{console.log(data);
// })
// .catch((error)=>{console.log("Something is wrong");
// })

//------------------------------------------------------------------------------------------

//----------------arr disturtring- -------------------------------------------------

//  let arr = [1,2,3,4,5,6,7,8,9,10]
// // let[a,b,c] = arr;
// // console.log(a,b,c);

// // agr value bhut zyada ho to-->
// let [...rest] = arr;
// console.log(rest);

//-----------------------------------------------------------------------------------------

//------------------------------------rest parameter  -----------------------------------------------------

// function hello(...yo){
//      console.log(yo);
     
// }
// (hello(1,2,3,4,5));


//one more================>>>>>>>

// function sum(...num){
//      let total = 0;
//      for(let nums of num){
//            total+=nums;
//      }
//      console.log(total);
     
// }
// (sum(1,2,3,4))


//------------------------------------------------------------------------------------------
//-------------------------------- Infinite curryng ----------------------------------------------------------

// function hello(a){
//      return function(b){
//   if(b) return hello(a+b)
//      return a}
// }
// console.log(hello(1)(5)(6)());


//-----------------------------------string or nuber ko alga alag kro ------------------------------------------------------

// let str = [1,2,3,"gautam","hy",4,5]
// let strings = []
// let numbers = []

// for (let value of str){
//      if(typeof value==="string"){
//    strings.push(value)
//      }else if(typeof value==="number")
// {
//      numbers.push(value)
// }}
// console.log(strings);
// console.log(numbers);


//----------filter method se>>>>>>>>>>>>

// let str = [1,2,3,"gautam","hy",4,5]
// let numbers = str.filter(val => typeof val ==="number")
// let strings = str.filter(val => typeof val ==="string")
// console.log(numbers);
// console.log(strings);


//--------------------------------------------------------------------------------------------------

// console.log([]==![]);  true
   
// console.log([]==[]);  false
   
// console.log([]===[]);  false
   
// console.log([]===![]);   //  false

// console.log({}===!{});  false
//  //
// console.log({}==={});  //  false

// console.log({}==!{}); fasle

// console.log({}=={});   false

// console.log("seju"-100);  nan


//refrence = like a address
// primitive value store krte hai or onject or array refrence (address) store krte hai

//----------------------------------------------------------------------------------------

//--------------------split---------------------------------------------------------------

// let str = "HTML CSS JavaScript";

// let arr = str.split(" ");

// console.log(arr);
// convert string into an array-------------------------------------------------------------
//------------------------------------------------------------------------------------------



//-------------------------------Closure -----------------------------------------------

// function outer(){
//      let count = 0
//      function inner(){
//           count++
// return count
          
//      }
//      return inner
// }
// let add = outer()

// console.log(add());
// console.log(add());
// console.log(add());


//------------------------------------------------------------------------------------------------

//-------------------------------Pure Function ------------------------------------------

// function add(a, b) {
//     return a + b;
// }

// console.log(add(2, 3)); // 5
// console.log(add(2, 3)); // 5     //  same input or same output............

// Not Pure Function -->>>>>>>>>>>>>>>

// let count = 0;

// function increment() {
//     count++;
//     return count;
// }

// console.log(increment()); // 1
// console.log(increment()); // 2      har baroutput change ho rha hai.............

//-----------------------------------------------------------------------------------------------

//--------------------------Call  Apply   Bind  ----------------------------------

// let obj ={
//      name: "gautam",
// city : "delhi",
// age : 22
// }

// let hello = function(name,city){
// console.log(this.name +" "+"is from" + " "+this.city);
// console.log(name,city);


// }

// hello.call(obj,"ram","america")


//--------------aplly-->>>>>>>>>>>>>>.

// hello.apply(obj,["ram","america"])


//-------------bind==>>>>>>>>>>>>>>.

// let result = hello.bind(obj,"delhi" , "india")

// result()

//------------------------------------------------------------------------------------------



// console.log({}+[]);    // [object object]


//--------------------------------------------------------------------------------------------------

//---------------------------------remove fuplicate froma array -------------------------------------

// let arr = [1,2,3,4,4,5,4,5,6,7,8,4,4,4,4,5,6,7,5,8,9,5,1,10]
// let result = [...new Set(arr)]
// console.log(result);

//---------------------------------------------------------------------------------------


//-------------------------------Find the longest -----------------------------------------------

let arr = [4,5,6,7,8,9]
let longest = Math.max(...arr)
console.log(longest);
