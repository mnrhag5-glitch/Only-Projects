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









//---------------- reverse array =>>>>>>>>>>>>>.

//  let arr = [12,3,4,5,6,7];

//  let rev = []
// for(let i=arr.length-1 ;i>=0; i--){
//    rev.push(arr[i])
// }

// console.log(rev);










//----------------------------------  spread ---

// let arr = [1,2,3,4,5]

// console.log(...arr);


//------------------------------ rest>>>

// function sum(...add){
//    console.log(add);

// }

// sum(1,2,3,4)









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






//------------------- remove duplicate with filter >>>>>>>>>>>>


// let arr = [1, 2, 2, 3, 4, 4];

// let remove = arr.filter((a,b)=>{
//   return arr.indexOf(a) === b
// })
// console.log(remove);








//------------------------ reverse string ->>>>

// function reverse(str){
//    if(str.length===0) return "";
//    return reverse(str.slice(1)) + str[0]
// }
// console.log(reverse("gautam"));








//------------------- check vowel kitne hai---------


// let str = "javascript";
// let count = 0;
// for(let i = 0; i<str.length ; i++){
//    if("aeiouAEIOU".includes(str[i])){
//       count++
//    }
// }
// console.log(count);






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







//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\----- largest word

// let words = ["cat", "elephant", "dog", "javascript"]

// let largest = words.reduce((a,b)=>{
//    return a.length > b.length ? a:b;
// })
// console.log(largest);








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









//--------------------------------- fincd mimimum number in array ---------

// let arr = [8, 3, 10, 5, 7];
// let minimum = arr[0]
// for(let value of arr){
//    if(value < minimum){
//       minimum = value
//    }
// }
// console.log(minimum);