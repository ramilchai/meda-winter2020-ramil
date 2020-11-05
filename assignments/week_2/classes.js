let car1 = {
    "make" : "Honda",
    "year" : 1998,
    "model" : "Civic"
};

let car2 = {
    "year" : 2010,
    "model" : "Accord"
};

class Car {
    //create object
    constructor(make, model, year) {
        this.make = make;
        this.year = year;
        this.model = model;
        this.currentFuelGallon = 0;
        this.fuelCap = 15;
        this.registeredDate = new Date(Date.now());
    }

    checkFuel() {
        console.log(`The car ${this.make} ${this.model} has ${this.currentFuelGallon} of gallons of gas left in the tank.`)
    }

    refuel(gallons) {
        if (typeof gallons === "number") {
            if (gallons > this.fuelCap - this.currentFuelGallon) {
                this.currentFuelGallon = this.fuelCap;
                gallons = this.fuelCap;
            } else {
                this.currentFuelGallon = this.currentFuelGallon + gallons;
            }
            console.log("Refuel successful, adding " + gallons + " to the tank.");
            
        } else {
            console.log("Refueling needs a valid number!");
        } 
    }
}

let car3 = new Car("Tesla", "X", 2016);
let car4 = new Car("Chevy", "Bolt", 2016);

car4.checkFuel();
car4.refuel(50);

// console.log(car1, car2);
// console.log(car3, car4);