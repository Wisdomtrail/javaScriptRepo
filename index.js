console.log("Hello There!");

var x = 5000;
console.log(x);

var firstName = "Bolaji";
var lastName = "Omayuku";
const ID = "jSjB67HLj";

console.log(firstName);
console.log(lastName);  
console.log(ID);

var one  = 2;
var two = 4;
var three = 6;
 
num = [];
num[1] = two;
num[2] = three;
num[3] = one;
console.log(num[1], num[2], num[3])

console.log(2 + 4 * 3 % 5 - 1 * 6 / (1+1))

let n = 0;
n = Boolean(n).valueOf()
console.log(n)

let available = "true";
available = Boolean(available).valueOf();
console.log(typeof available);

let count = "4"
count = Number(count).valueOf();
console.log(typeof count )

let libarian = Object();
libarian["data"]={ 
id: "001",
available: available,
count: count,
name: "eloquent javaScript",
author:  "Ugo c.Ugo"
}
console.log(libarian["data"])


let isValid = true
isValid ? console.log("Got it") : console.log("damn!")

let r = 4;
r == 1 ?
console.log("gee") 
: r == 2 
? console.log("yee") 
: r == 2 
? console.log("opor") 
: r == 4 
? console.log("confirm") 
: console.log("ode")