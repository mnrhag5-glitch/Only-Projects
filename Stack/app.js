// console.log("Hello World");


//------------------------------- Stack -------------------------------------

// Stack is Linear Data Structure that follows the LIFO principle ...
// lIFO means jo last me add hoga vhi sbse pehle remove hoga...
// iska precticale use jese back button or undo me hota hai..




// class stack{
//     constructor(){
//         this.items = []
//     }

//     push(value){
//         this.items.push(value)
//     }
//     pop(){
//         return this.items.pop()
//     }
//     peak(){
//         return this.items[this.items.length-1]
//     }
//     size(){
//         return this.items.length
//     }
//     isEmpty(){
//         return this.items.length === 0;
//     }

// }
// let a = new stack()

// a.push(10)
// a.push(30)
// a.push(20)
// console.log(a.items);
// console.log(a.size());
// console.log(a.pop());
// console.log(a.peak());
// console.log(a.isEmpty());


//-----------------------------------------------------------------------------------------------------------



//---------------------------------------- Reverse String  -----------------------------------------


// function reverse(str){
//     let stack = []

//     for(let val of str){
//         stack.push(val)
//     }
//     let ans = "";
//     while(stack.length>0){
//         ans+=stack.pop()
//     }return ans;
// }
// console.log(reverse("gautam"));




// function reverse(str) {          // reverse naam ka function banaya jo ek string (str) lega

//     let stack = [];              // Ek empty stack (array) banaya

//     for (let val of str) {       // String ke har character par loop chala
//         stack.push(val);         // Har character ko stack me add (push) kiya
//     }

//     let ans = "";                // Reversed string store karne ke liye empty string banayi

//     while (stack.length > 0) {   // Jab tak stack me elements hain tab tak loop chalega
//         ans += stack.pop();      // Top element remove karke ans me add kar diya
//     }

//     return ans;                  // Final reversed string return kar di
// }

// console.log(reverse("india"));   // Function call kiya aur output print kiya


//------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------



// ------------------------------------------ Valid Parantheses ---------------------------------------------



// function valid(str){
//     let stack = [];
//     for(let val of str){
//         if(val === "(" || val === "{" || val === "["){
//             stack.push(val)
//         }else{
//             let top = stack.pop()
//             if((val === ")"&&top !=="(")||
//             (val === "}" && top !=="{") ||
//             (val === "]" && top !=="["))
//             {
// return false;
//             }
//         } 
//     } return stack.length === 0
// }
// console.log(valid("{{({})}}"));


//------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------






//----------------------------------- Remove all Adjustmenet String -------------------------------------------------------------------


// function remove(str){
//     let stack = [];
//     for( let val of str){
//      if(stack[stack.length - 1] === val){
//         stack.pop()
//      }else{
//         stack.push(val)
//      }

// } return stack.join("")
// }
// console.log(remove("aaakaabkbcskkkkk"));





//------------------------------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------------------------------



function calPoints(ops) {
    let stack = []; // Scores store karne ke liye stack

    // Har operation ko ek-ek karke check karo
    for (let op of ops) {

        // Agar "C" hai to last score remove karo
        if (op === "C") {
            stack.pop();
        }

        // Agar "D" hai to last score ka double add karo
        else if (op === "D") {
            let last = stack[stack.length - 1];
            stack.push(last * 2);
        }

        // Agar "+" hai to last 2 scores ka sum add karo
        else if (op === "+") {
            let last = stack[stack.length - 1];
            let secondLast = stack[stack.length - 2];

            stack.push(last + secondLast);
        }

        // Agar number hai to stack me push kar do
        else {
            stack.push(Number(op));
        }
    }

    // Sab scores ka total nikalo
    let sum = 0;

    for (let score of stack) {
        sum += score;
    }

    return sum;
}

console.log(calPoints(["5", "2", "C", "D", "+"])); // 30