//------------>>>>>.  largest and smallest 



//  let num = [12,2,5,54,23,43,4,64,65,44,65]

//  let largest = Math.max(...num)
//  let smallest = Math.min(...num)
// console.log(smallest);
// console.log(largest);





//-------------------------------------------------------------------------------------------



//---------------->>>>>>  second big element >>   


//  let num = [12,2,5,54,23,43,4,64,65,44,65,64]
// let remove = [...new Set(num)]
// console.log(remove);

//  let secondBig = remove.sort((a,b)=>{
//    return b-a;
//  })

//  console.log(secondBig[0]);
//  console.log(secondBig[1]);
//  console.log(secondBig[2]);




//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------





//---------------- reverse array =>>>>>>>>>>>>>.

//  let arr = [12,3,4,5,6,7];

//  let rev = []
// for(let i=arr.length-1 ;i>=0; i--){
//    rev.push(arr[i])
// }

// console.log(rev);




//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------






//----------------------------------  spread ---

// let arr = [1,2,3,4,5]

// console.log(...arr);


//------------------------------ rest>>>

// function sum(...add){
//    console.log(add);

// }

// sum(1,2,3,4)



//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------






//---------------------- counter 1 bdhao>>>>

// function add(){
//    let count = 10;
//    function sum(){
//       count++;
//       console.log(count);
      
//    }return sum
// }
// let hy = add()
// hy()
// hy()
// hy()


//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------




//------------------- remove duplicate with filter >>>>>>>>>>>>


// let arr = [1, 2, 2, 3, 4, 4];

// let remove = arr.filter((a,b)=>{
//   return arr.indexOf(a) === b
// })
// console.log(remove);



//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------





//------------------------ reverse string ->>>>

// function reverse(str){
//    if(str.length===0) return "";
//    return reverse(str.slice(1)) + str[0]
// }
// console.log(reverse("gautam"));



//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------





//------------------- check vowel kitne hai---------


// let str = "javascript";
// let count = 0;
// for(let i = 0; i<str.length ; i++){
//    if("aeiouAEIOU".includes(str[i])){
//       count++
//    }
// }
// console.log(count);


//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------




//-------------------------- second largest -----------------


// let arr = [10,20,5,30,25]
// let largest = arr[0]
// let Slargest = arr[0]
// for(let i=0; i<arr.length;i++){
//    if(arr[i]>largest){
//       largest=arr[i]
//    }
//    if(arr[i]>Slargest && arr[i] !== largest){
//       Slargest=arr[i]
//    }
// }
// console.log(largest);
// console.log(Slargest);




//-----------------------------------------------------------------------------------------------------



//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\----- largest word

// let words = ["cat", "elephant", "dog", "javascript"]

// let largest = words.reduce((a,b)=>{
//    return a.length > b.length ? a:b;
// })
// console.log(largest);



//-----------------------------------------------------------------------------------------------------





//-------------------------------- count even or odd----------


// let arr = [1, 2, 3, 4, 5, 6 , 8];

// let countForOdd = 0
// let countForEven = 0
// for(let i = 0; i<arr.length; i++){
//    if(arr[i]%2===0){
//      countForEven++}
//     else{
//       countForOdd++
//     }
//    }
// console.log(countForEven)
// console.log(countForOdd)


//-----------------------------------------------------------------------------------------------------






//------------------------------------ find only sum of even number


// let arr = [1, 2, 3, 4, 5, 6];

// let sumOfEven = 0
// for(let value of arr){
//    if(value%2===0){
//       sumOfEven+=value
//    }
// }
// console.log(sumOfEven);


// for(let i = 0;i<arr.length; i++){
//    if(arr[i]%2===0){
//       sumOfEven+=arr[i]
//    }
// }

// console.log(sumOfEven);




//-----------------------------------------------------------------------------------------------------





//---------------------------- count positive negative and zero---

// let arr = [2, -5, 0, 8, -1, 0, 10];

// let countpositive = 0
// let countNegative = 0
// let countZero = 0

// for(let i = 0; i<arr.length; i++){
//    if(arr[i]>0){
//       countpositive++
//    } else if(arr[i]<0){
//      countNegative++
//    }else if(arr[i]===0){
//       countZero++
//    }
      
// }
// console.log(countpositive);
// console.log(countNegative);
// console.log(countZero);




//-----------------------------------------------------------------------------------------------------





//--------------------------------- fincd mimimum number in array ---------

// let arr = [8, 3, 10, 5, 7];
// let minimum = arr[0]
// for(let value of arr){
//    if(value < minimum){
//       minimum = value
//    }
// }
// console.log(minimum);



//-----------------------------------------------------------------------------------------------------



//-------------------------- reverse the array -------------------------


// let arr = [1, 2, 3, 4, 5];
// let reverse = [];
// for(let i = arr.length-1;i>=0; i--){
//    reverse.push(arr[i])
// }
// console.log(reverse);



//-----------------------------------------------------------------------------------------------------




//-------------------------- find largest and smallesrt in single loop



// let arr = [8, 3, 10, -5, 7];
// let largest = arr[0]
// let smallest = arr[0]

// for(let i =0; i<arr.length;i++){
//    if(arr[i]>largest){
//       largest = arr[i]
//    }else if(arr[i]<smallest){
//       smallest = arr[i]
//    }

// }
// console.log(largest);
// console.log(smallest);





//-----------------------------------------------------------------------------------------------------



//------------------- fincd second largest nimber ------------

// let arr = [8, 3, 10, -5, 7];

// let largest = arr[0]
// let slargest = arr[0]

// for(let i = 0; i<arr.length;i++){
//    if(arr[i]<largest)
//    { slargest = largest
//       largest = arr[i]
//    }else if(arr[i]<slargest && arr[i]!==largest){
//       slargest = arr[i]
//    }
// }
// console.log(largest);

// console.log(slargest);




//-----------------------------------------------------------------------------------------------------





//------------------------- string or number ko alag alag kro 


//  let str = [1,2,3,"gautam","hy",4,5]
// let string = []
// let number = [];
// for(let value of str){
//    if(typeof value === "string"){
//       string.push(value)
//    }if( typeof value ==="number"){
//       number.push(value)
//    }
// }
// console.log(string);
// console.log(number);



//-----------------------------------------------------------------------------------------------------



//---------------------------------------  call apply bind  ----

// let obj = {
//    name : "ram",
//    age : 22,
// }
//  hello= function (name,age){
//    console.log("hello" + " " + this.name);
//    console.log(name,age);
   
// }

// hello.apply(obj,["shayam",45])





//-----------------------------------------------------------------------------------------------------





// /------------- fincd longest word in sentence ----

// let sentence = "hy my name is gautam ";
// let longest = sentence.split(" ").reduce((a,b)=>{
//    return a.length > b.length ? a:b
// })
// console.log(longest);



//-----------------------------------------------------------------------------------------------------





//----------------------------- how to merge string alternatvie---

// let str1 = "ram"
// let str2 = "sita"
// let both = ""
// for(let i=0; i<str1.length || i<str2.length; i++){
//    if(str1[i]) both +=str1[i]
//    if(str2[i]) both += str2[i]
// }
// console.log(both);





//-----------------------------------------------------------------------------------------------------



//---------------------------   classes ====

// class yoo {
//    constructor(name,age){
//       this.name = name;
//       this.age = age;
// console.log("hello" + this.name);

// }}

// let newObj = new yoo("ram" , 22)
// console.log(newObj);







//-----------------------------------------------------------------------------------------------------



//-------------------------------  Recursion test-----


// function print(n){
//    if(n===0) return 0;
//    console.log(n);
//    print(n-1)
   
// }
// print(5)

// function print(n){
// //    if(n===0) return 0;
// //    print(n-1)
// //    console.log(n);
   
// // }
// // print(5)


// let arr = [1,2,3,4,5]
// let sum = arr.reduce((a,b)=>{
//    return a+b;
// },10)
// console.log(sum);


// function sum(n){
//    if(n===0) return 0;
//    return n + sum(n-1)
// }
// console.log(sum(5));


// function fact(n){
//    if(n===0) return 1;
//    return n * fact (n-1)
// }
// console.log(fact(5));


// function fibonacci(n){
//    if(n<=1) return n;
//    return fibonacci (n-1) + fibonacci (n-2)
// }
// console.log(fibonacci(6));


// function reverse(str){
//    if(str.length===0) return "";
//    return reverse(str.slice(1)) + str[0]
// }
// console.log(reverse("hello"));





// function sumOFDigit(n){
//    if(n===0) return 0;
//    return (n%10) + sumOFDigit(Math.floor(n/10))
// }
// console.log(sumOFDigit(12345));



// function power(x,n){
//    if(n===0) return 1;
//    return x * power(x,n-1)
// }
// console.log(power(3,3));



// let arr = [1,[2,[3,4]],5]

// console.log(arr.flat(Infinity));






//-----------------------------------------------------------------------------------------------------



//----------------------------------------- Palindrome with built method---


// function palindro(str){
//    return str === str.split("").reverse().join("")
// }
// console.log(palindro("madam"));
// console.log(palindro("hello"));




//-------------- without build method ----



// function palindrone(str , left = 0 , right = str.length-1){
//   if(left >= right){
//    return true;
//   }  if(str[left] !== str[right]){
//    return false
//   }
//   return palindrone(str , left + 1 , right - 1)
// }
// console.log(palindrone("madam"));
// console.log(palindrone("hello"));




//-----------------------------------------------------------------------------------------------------






//----------------------------  largest in 3 numbers


// let a = 10;
// let b = 25;
// let c = 15;


// if(a>b && a>c){
//    console.log(a);
   
// }else if(b>a && b>a){
//    console.log(b);
   
// }else{
//    console.log(c);
   
// }



//-----------------------------------------------------------------------------------------------------





//-------------------------- check number is poitiv eor negative or zero

// let num = -15;
// if(num>0){
//    console.log("positive");
   
// }else if(num<0){
//    console.log("nagetive");
   
// }else{
//    console.log("zero");
   
// }




//-----------------------------------------------------------------------------------------------------





// --------------- 1-100 tak even ke sum nikalo
// let sum = 0
// for(let i = 1; i<=100; i++){
//    if(i%2===0){
// sum += i   
// }
// }
// console.log(sum);


//-----------------------------------------------------------------------------------------------------



//------------------- 123456 kitne digit hai 


// let num = 123456;

// let count = 0;

// while (num > 0) {
//     count++;
//     num = Math.floor(num / 10);
// }

// console.log(count);





//---------------------------------- -------------------------------------------------------------------




///////////////////-- even and there sum====


// let arr = [1,2,3,4,5,6]
//  let even=arr.filter((a)=>{
//    return a%2==0
// }).reduce((a,b)=>{
//    return a+b;
// })

// console.log(even);





//---------------------------------- -------------------------------------------------------------------




//------------------ 80 se uper num print

// let obj = [{
//     name:"gautam",marks:89},
//     {name:"seju",marks:90},
//     {name:"luffy",marks:79},
//     {name:"zoro",marks:69}
// ]

//  newobj = obj.filter((a)=>{
//    return a.marks>80
// })
// console.log(newobj);





//---------------------------------- -------------------------------------------------------------------




//----------------------------------------  rigth element ko end or left or fist me

 
// let arr = [1,2,3,4,5];  // 5 1 2 3 4

// arr.unshift(arr.pop())
// console.log(arr);



 
// let arr2 = [1,2,3,4,5];   // 23451

// arr2.push(arr2.shift())
// console.log(arr2);




//----------------------------------  API  -------------------------------------------------------------------



//-------async await .then ka easy version hai-------

// async function getUsers(){
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await response.json();

//   data.forEach(user => {
//     console.log(user.address);
//   });
// }

// getUsers();





//----------------------------------  API  -------------------------------------------------------------------




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



//----------------------------------  Classes  -------------------------------------------------------------------


// class Animal{
//     constructor(name,sound){
//         this.name = name;
//         this.sound = sound;
//     }
// }
// Animal.prototype.makeSound = function(){
//     console.log(this.name , "says", this.sound);
    
// }
//  let Dog = new Animal("Dog","Bark");
//  Dog.makeSound();







//----------------------------------- Closure -----------------------------------------


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





//----------------------------------------- Promise----------------------------------------


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



//-----------------------------------------------------------------------------------------------------




//- ------------------------ Reverse Trinagle --------------------

// let n = 5;

// for (let i = n; i >= 1; i--) {
//   let str = "";

//   for (let j = 1; j <= i; j++) {
//     str += "*";
//   }

//   console.log(str);
// }





//---------------------------------------- right trainagle ---------------------


// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let str = "";

//   for (let j = 1; j <= i; j++) {
//     str += "*";
//   }

//   console.log(str);
// }




//---------------------------------- pyramid ----------------------------------


// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let str = "";

//   // spaces
//   for (let j = 1; j <= n - i; j++) {
//     str += " ";
//   }

//   // stars
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     str += "^";
//   }

//   console.log(str);
// }




//--------------------------------- each ka character count kro ----------------------------------




// let str = "full stack developmenet";
// let count = {};

// for (let value of str) {
//     if (count[value]) {
//         count[value]++;
//     } else {
//         count[value] = 1;
//     }
// }

// console.log(count);




//--------------------------------------------------------------------------------------------------

///////---------------------------------- find the interrsection ----------------------------------------

// let arr = [1,2,3,4,5]
// let arr2 = [3,4,5,6,7,8,]

// let intersection = arr.filter((a)=>{
//     return arr2.includes(a)
// })
// console.log(intersection);


//--------------------------------------------------------------------------------------------------------------


//-------------------------------------  duplicate find kr-------------------------------------------------------------------------


// let arr = [1,2,3,4,5,6,3,4]

// let duplicate = arr.filter((a,b)=>{
//     return arr.indexOf(a)!==b
// })
// console.log(duplicate);


// ------------------------------ Linked List ADD from starting ----------------------------




// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null;
//     }
     
//     addStarting(data){
//         let newNode = new Node(data)
//         newNode.next = this.head;
//         this.head = newNode;
//     }


//     list(){
//         let current = this.head;
//         while  (current !== null ){
//             console.log(current.data);
//             current = current.next
            
// }}}


// let newList = new linkedList()
// newList.addStarting(10)
// newList.addStarting(11)
// newList.addStarting(12)
// newList.addStarting(13)
// newList.addStarting(14)
// newList.addStarting(15)

// newList.list()










//----------------------------------------------  add from last ----------------------------------





// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     addLast(data) {
//         let newNode = new Node(data);

//         // Agar list empty hai
//         if (this.head === null) {
//             this.head = newNode;
//             return;
//         }

//         // Last node tak jao
//         let current = this.head;

//         while (current.next !== null) {
//             current = current.next;
//         }

//         // Last node ko new node se connect karo
//         current.next = newNode;
//     }

//     list() {
//         let current = this.head;

//         while (current !== null) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }

// let newList = new LinkedList();

// newList.addLast(10);
// newList.addLast(11);
// newList.addLast(12);
// newList.addLast(13);
// newList.addLast(14);
// newList.addLast(15);

// newList.list();








//----------------------------------------- Check every count of element ---------------------------


// let str = "gautam"
// let count = {}
// for(let value of str){
//     if(count[value]){
//         count[value]++
//     }else{
//         count[value] = 1
//     }
// }
// console.log(count);




// --------------------------------------------------------------------------------------------




// class node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }
// class linkedList{
//     constructor(){
//         this.head = null
//     }
// addFirst (data){
//     let newNode = new node(data)
//     newNode.next = this.head;
//     this.head = newNode;
// }
// print(){
//     let temp = this.head;
//     while(temp){
//         console.log(temp.data);
//         temp = temp.next
//     }}}
// let list = new linkedList()
// list.addFirst(1)
// list.addFirst(2)
// list.addFirst(3)
// list.addFirst(4)
// list.addFirst(5)
// list.addFirst(5)

// list.print()






//  class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
//  }
//  class linkedList{
//     constructor(){
//         this.head = null
//     }

//         addFromEnd(data){
//             let newNOde = new Node(data)
//             if(!this.head){
//                 this.head = newNOde;
//                 return;
//             }
//             let temp = this.head;
//             while(temp.next){
//                 temp = temp.next;
//             }
//             temp.next = newNOde
//         }
//         print(){
//             let temp = this.head;
//             while(temp){
//                 console.log(temp.data);
//                 temp = temp.next
                
//             }
//         }
//  }

// let list = new linkedList();

// list.addFromEnd(1);
// list.addFromEnd(2);
// list.addFromEnd(3);
// list.addFromEnd(4);
// list.addFromEnd(5);

// list.print();



//--------------------------------------- Find element greater then 40-------------------

// // let arr = [10,15,30,75,40,61,23]
// let ans = arr.filter((a)=>{
//     return a>40
// })
// console.log(ans);


//--------------------------------------------- saperate -----------------------------------

// let arr = [10,15,30,"c","d",75,40,"q",61,23]
// // let string = []
// // let numbers = []
// // for(let value of arr){
// //     if(typeof value == "string"){
// //         string.push(value)
// //     }else if(typeof value == "number"){
// //         numbers.push(value)
// //     }
// // }
// // console.log(string);
// // console.log(numbers);

// ///---------------- with filter***********
// let str = arr.filter((a)=>{
//     return typeof a == "string"
// })
// let num = arr.filter((b)=>{
//     return typeof b =="number"
// })
// console.log(str);
// console.log(num);


//---------------------------------------- reduce method ------------------------------------

// let arr = [1,2,3,4]
// let sum = arr.reduce((a,b)=>{
//     return a+b
// },0)
// console.log(sum);



//---------------------------------------------------------------------------------------------

//--------------------------------- CallBack Function -----------------------------------------

// function add(a,b){
// console.log(a+b);

// }
// function calculate(a,b,callback){
//     callback(a,b)
// }
// calculate(5,5,add)


//---------------------------------------------------------------------------------------------------

//---------------------------------------------- Promise ---------------------------------------------------

// function hello(msg,time){
//     return new Promise((res)=>{
//         setTimeout(()=>{
//             console.log(msg);
            
//             res()
            
//         },time)
//     })
// }
// hello("kkkkkkk",2000)
// .then(()=>  {return hello("hiii" , 3000);
// }).then(()=>{return hello("yooo" , 2000);
// }).then(()=>{return hello("uiiiiii" , 4000);
// }).then(()=>{return hello("ululululu" , 2000);
// })



//------------------------------------------------------------------------------------------------


// let arr = [10,8,"c",11,"q",5]
// // let str = []
// // let num = []

// // for(let val of arr){
// //     if(typeof val == "number"){
// //         num.push(val)
// //     }if(typeof val == "string"){
// //         str.push(val)
// //     }
// // }
// // console.log(str);
// // console.log(num);

// let str = arr.filter((a)=>{
//     return typeof a =="string"
// })
// let num = arr.filter((a)=>{
//     return typeof a =="number"
// })
// console.log(num);
// console.log(str);
