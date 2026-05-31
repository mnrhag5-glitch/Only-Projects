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