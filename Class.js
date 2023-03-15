class Car{
    static wheel;
    constructor(_wheels, _models, _seats) {
        Car.wheel = _wheels;
        this.model = _models;
        this.seats = _seats;

        this.getModel = () => {
            return this.model;
        };
    }
    printModel() {
        console.log(`The model id is ${this.model}`)
    }

    static getWheels(){

        console.log(`Car has ${this.wheel} wheels`)
    }
}
let car = new Car(4,"bmw", 6);
car.printModel();
Car.getWheels();
console.log(car.getModel())