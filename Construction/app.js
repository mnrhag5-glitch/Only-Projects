
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
 




// function Student(name,marks){
//     this.name = name;
//     this.marks = marks;
//     this.checkResult = function(){


    
//     if(this.marks>=40){
//         console.log("Pass");
//     }else{
//         console.log("Fail")
//     }

// }}

// let firstStudent = new Student("Gautam",80)
// let secondStudent = new Student("Rohit",20)

// firstStudent.checkResult();
// secondStudent.checkResult();





//=====Day Two=============================
//=====Day Two=============================
//=====Day Two=============================
//=====Day Two=============================
//=====Day Two=============================
//=====Day Two=============================
//=====Day Two=============================




//=========================question 1


// function car(brand,speed){
//       this.brand = brand;
//       this.speed = speed;
 
      
// }

//   car.prototype.showspeed = function(){
//     console.log(this.brand,"speed is",this.speed)
//   }



// let bmw = new car("BMW",200)
// let tata = new car("TATA",170)


// bmw.showspeed()




//===========question 2================

// function Animal(name,sound){
//     this.name = name;
//     this.sound = sound;
// }
//  Animal.prototype.makeSound = function(){
//     console.log(this.name,"says",this.sound);
    
//  }

//  let Dog = new Animal("Dog","Bark")
//  let Tiger = new Animal("Tiger","Roar")
//  let Elephent = new Animal("Elephent","Trumphing")
 
//  Dog.makeSound();
//  Elephent.makeSound();
//  Tiger.makeSound();




 //============question 3===================


//  function Employee(name,salary){
//     this.name = name;
//     this.salary = salary;
//  }

//  Employee.prototype.showSalary = function(){
//     console.log(this.name,"salary is" , this.salary)
//  }

//  let employee1 = new Employee("gautam",50000);

//  employee1.showSalary();


 //=============question 4======================



// function Book(title,author){
//     this.title = title;
//     this.author = author;

// }
 
//   Book.prototype.details = function(){
//     console.log(this.title , "by", this.author);
    
//   }

//   let name = new Book("Atomic","James Clear");

//   name.details();


//============

// function Student(name,roll){
//   this.name = name;
//   this.roll = roll;
// }
// Student.prototype.id = function(){
//   console.log(this.name ,"Roll number is", this.roll);
  
// }

// let student1 = new Student("ram" , 22)
// let student2 = new Student("ramanujan" , 21)

// student1.id()
// student2.id()

