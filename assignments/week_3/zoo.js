class Animal {
    constructor(alive) {
        this.living = alive;
    }

    died() {
        this.living = false;
    }
}




class Mammal extends Animal{
    constructor(alive, eyeColor) {
        super(alive);
        this.tail = 1;
        this.type = "mammal";
        this.eyes = 2;
        this.eyeColor = eyeColor;
    }   
        eat() {
            if("name" in this){
                console.log(this.name + " eats some food.");
            } else {
                console.log("Animal eats some food");
            } 
        }

        breed(partner, childName) {
            if (partner.constructor.name == this.constructor.name) {

                let eyeInheritance = Math.random() * 2;
                eyeInheritance = Math.floor(eyeInheritance);

                let childEyeColor;
                if (eyeInheritance == 0) {
                    childEyeColor = this.eyeColor;
                } else {
                    childEyeColor = partner.eyeColor;
                }
                let child = new this.constructor(childName, true, childEyeColor);
                return child;
            }
        }
}



class Dog extends Mammal {
    constructor(dogName, alive, eyeColor) {
        //This function runs the constructor of the class we are inheriting, it is important to run it first before any other lines of our Dog constructor class.   
        super(alive, eyeColor);
        this.legs = 4;
        this.name = dogName;
    }

    bark() {
        console.log("woof woof!");
    }
}

class Cat extends Mammal {
    constructor(catName, alive) {
        super(alive);
        this.legs = 4;
        this.name = catName;
    }

    meow() {
        console.log("meow!")
    }
}

let dog1 = new Dog("Fido", true, "brown");
let dog2 = new Dog("Joe", true, "green");
let dog3 = new Dog("James", true, "black");

let animal2 = new Cat("Garfield", true);

let newdog = dog2.breed(dog1, "Spot");
let newdog2 = dog3.breed(dog2, "Dex");

console.log(newdog);
console.log(newdog2);
