//----------Basic syntax======================

// class User{

// }

//-----------------------------------------------


//constructor inside Class =====================


class Animal{
    constructor(name,sound){
        this.name = name;
        this.sound = sound;
    }
}
Animal.prototype.makeSound = function(){
    console.log(this.name , "says", this.sound);
    
}
 let Dog = new Animal("Dog","Bark");
 Dog.makeSound();