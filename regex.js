var regex = /^[a-z]+[A-Z]+[0-9]$/;
var regex2 = RegExp("[a-z]");
console.log(regex.test("abcdeK8"));
console.log(regex2.test("Aa"));

var name = "HelloWorld"
console.log(name.match("hello"))
console.log(name.match("Hello"))
console.log(name.replace(/hello/i, "GoodBye"))

let password = "H@hdjdhd3"

function isSafe(password){
password = /^[a-z]/;
}