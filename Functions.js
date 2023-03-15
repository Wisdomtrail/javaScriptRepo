let f = function Multiplier(firstNumber, secondNumber) {
    return firstNumber * secondNumber
}(5, 6);

console.log(f)
function outer(){
    let even = 2
    function inner(number){
        console.log("Inner func: ", number)
    }
    inner(even)
    console.log("outer func")
}
outer()

function sample1(){

    let even = 2;
    return even;
}

function sample2(number){
    console.log(number*5)
}

sample2(sample1)

//
let addition = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
};

let addition2 = () => console.log("Im here")


let addition3 = color => {
    return {"bala": color}
};
addition3("blue")
console.log(addition3())

function helloWorld(func){
    console.log("I am in here rn")
    func()
    console.log("After the function")
}

function me(){
    console.log("I am the functon")
}

helloWorld(me)

helloWorld(() => console.log("i am the func"))


let arr = [10, 30, 40, 50, 60, 90, 70]
let multipliedArr = []

arr.forEach((value) => multipliedArr.push(value*2))
console.log(arr)
console.log(multipliedArr)

let newArr = arr.filter((value) => value > 40)
console.log(newArr)

let newArray = arr.reduce((pre,curr) => pre + curr)
console.log(newArray)
let a = 2;
 a = 1;
 console.log(a)

 var b = 1;
 var b = 2;
 console.log(b)
 
 if(a==0){
    let a = 4;
 }

 