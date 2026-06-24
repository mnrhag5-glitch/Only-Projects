//----------Basic syntax======================

// class User{

// }

//-----------------------------------------------


//constructor inside Class =====================


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



 //==========you can add method in class function ==============

 

// class Animal{
//     constructor(name,sound){
//         this.name = name;
//         this.sound = sound;
//     }

// makeSound(){
//     console.log(this.name , "says", this.sound);
    
// }}
//  let Dog = new Animal("Dog","Bark");
//  Dog.makeSound();


// ---------question 3-----------------------


// class BankAccount{
//     constructor(owner,balance){
//         this.owner = owner;
//         this.balance = balance;
//     }

//     showBalance(){
//         console.log(this.owner , "balance is", this.balance);
        
//     }
// }

// let account = new BankAccount("gautam",7000);

// account.showBalance();


// ----------question 4---------------------


// class Player{
//     constructor(name,score){
//       this.name = name;
//       this.score = score;
//     }

//     increaseScore(add){
//         this.score+=add;
//     }

//     showCase(){
//         console.log(this.name ,"score is", this.score);
        
//     }
// }

// let firstPlayer = new Player("gautam" , 50);
 
// firstPlayer.increaseScore(10);
// firstPlayer.showCase();


//---------------inhertance question-----------------


// class Person{
//     constructor(name){
//         this.name = name;
//     }
// }


// class Rohit extends Person{
//     constructor(name){
//         super(name)
   
//     }
// sayName(){
//     console.log("my name is",this.name);
    
// }

// }

// let p1 = new Rohit("Rohit")

// p1.sayName()



//--------question 2------------------


// class Vehicle{
//     constructor(brand){
//       this.brand = brand
//     }


//  showBrand(){
//     console.log("brand is",this.brand);
    
//  }


// }

// class Bike extends Vehicle{
//     constructor(brand,speed){
//         super(brand)
//     }
// }

// let newCar = new Vehicle("bmw")
// let newBike = new Bike("Yamaha",200)
// newCar.showBrand()
// newBike.showBrand()





//--------------------------------------

class hello{
    constructor(name,sur){
this.name = name;
this.sur = sur;
    }
helloo(){
    console.log("Hello "+ this.name);}}

    let person1 = new hello("gautam","thakur")
    let person2 = new hello("sejal","rana")

    person1.helloo()
    person2.helloo()