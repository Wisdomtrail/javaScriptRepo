let vehicle = {
    wheel: 4,
};

let car = {
    seats: 5,
    __proto__: vehicle,
};

console.log(vehicle, vehicle.__proto__)
console.log(car, car.wheel)
function Employee(_name, _age, _designation){
    this.age = _age;
    this.name = _name;
    this.designation = _designation;

    this.setAge = (newAge) => {
        console.log(`Age has been changed from ${this.age} to ${newAge}`);
        this.age = newAge;
    };
};

let emp1 = new Employee("gee", 34, "manager")
let emp2 = new Employee("kev", 45, "Accountant")
console.log(emp1.age)
emp1.setAge(64)
console.log(emp1.age)
Employee.prototype.office = "True";
emp1.officeNumber = 101;
console.log(emp1.officeNumber,emp2.officeNumber);
console.log(emp1.office, emp2.office)


