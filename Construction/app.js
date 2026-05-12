
// Constructor function multiple similer object bnane ke liye use hota hai==
//agr ek hi baar me bhut se obj bnane ho ya repetitive code to ynha iska use hota hai===

//Basic Syntax===========

// function user(){

// }

// constructor ka first letter Capital hona chiye==========

//  function User(name,age){
//    this.name = name;
//    this.age = age;
//  }

//  let user1 = new User("Gautam",22)
//  let user2 = new User("Seju",21)

//  console.log(user1);
//  console.log(user2);
 

 //=====ye smjh lo ki Construction Obj bnane ki Machine hai===

 

 //=========Question==================
 //=========Question==================
 //=========Question==================
 //=========Question==================



//  function Phone(brand){
//     this.name = brand;
//  }
//  let company = new Phone("Samsung")
//  let company2 = new Phone("iPhone")

//  console.log(company);
//  console.log(company2);
 




function Student(name,marks){
    this.name = name;
    this.marks = marks;

    if(Student.marks>=40){
        console.log("Pass");
    }else{
        console.log("Fail")
    }

}

let firstStudent = new Student("Gautam",80)
let secondStudent = new Student("Rohit",20)

console.log(firstStudent)
console.log(secondStudent)