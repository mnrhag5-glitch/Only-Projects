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


class Player{
    constructor(name,score){
      this.name = name;
      this.score = score;
    }

    increaseScore(add){
        this.score+=add;
    }

    showCase(){
        console.log(this.name ,"score is", this.score);
        
    }
}

let firstPlayer = new Player("gautam" , 50);
 
firstPlayer.increaseScore(10);
firstPlayer.showCase();