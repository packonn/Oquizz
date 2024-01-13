class Vehicle {
    nbWheels;
    brand;
    weight;

    constructor(nbWheels, brand, weight) {
        this.nbWheels = nbWheels;
        this.brand = brand;
        this.weight = weight;
    }
}

// ! exemple d'erreur avec les classes : ReferenceError: must call super constructor before using 'this' in derived class constructor

class Car extends Vehicle {
    type;
    constructor(nbWheels, brand, weight, type) {
        // ! Quand on hérite, on doit appeler le constructeur de la classe parente avec le mot clé super() avant de pouvoir utiliser this dans le constructeur.
        super(nbWheels, brand, weight);
        this.type = type;
    }
}
class Truck extends Vehicle {
    constructor(nbWheels, brand, weight) {
        super(nbWheels, brand, weight);
    }
}

const car = new Car(4, 'Ferrari', '600kgs', 'sportster');
const truck = new Truck(18, 'Volvo', '48t');

console.log(car);
console.log(truck);
