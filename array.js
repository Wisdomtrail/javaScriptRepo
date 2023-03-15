//creating array 
let arr = [1,2,3,4];
// inputing values at creation
let arr2 = new Array(1,2,3,4);
// declaring array size
let arr3 = new Array(12);
console.log(arr3.length);

Array.prototype.lmao = "kiokiooooookiooooha"
Array.prototype.lol = function () {
    for(let i = 0; i < this.length; i++){
    this[i] = this[i].toUppercase();
    }
    return this;
};

console.log(arr2.lol());