let a1 = new Object(["NULL"]);

 let a2 = new Object({
    name: "brooklyn",
    population: 65009,
    temp: 26,
    currency: "dollar"
 });


 let a3 = new Object({
    name: "new maxico",
    population: 293556,
    temp: 17,
    currency: 'dollar',
 });

 let a4 = new Object({
    name: 'columbia',
    population: 64889,
    temp: 17,
    currency: 'pound',
 });


 let a5 = new Object({
    name: 'atlanta georgia',
    population: 95009,
    temp: 14,
    currency: 'dollar',
});

let a6 = new Object({
   name: 'detriot',
   population: 33009,
   temp: 16,
   currency: 'dollar',
});


let a7 = new Object({
   name: 'lagos',
   population: 2000000,
   temp: 21,
   currency: 'Naira',
 });
 let a8 = new Object (['NULL'])

 let a9 = new Object({
    name: 'Tokyo',
    population: 654449,
    temp: 9,
    currency: 'dollar',
 });


 let a10 = new Object(['NULL']);

 let a11 = new Object({
    name: 'bouston',
    population: 890000,
    temp: 18,
    currency: 'dollar',
 });


 let a12 = new Object({
    name: 'seoul',
    population: 99009,
    temp: 16,
    currency: 'dollar'
 })

 let demography = [[a1,a2,a3,a4],[a5,a6,a7,a8],
 [a9,a10,a11,a12]]
 var sumOfPopulation = 0;
 
 
 console.log(a2)
 console.table(demography)
 
 total = 0;
 for (const i of demography) {
    for (const item of i) {
        if(item.population <= 10)
        total+= item.population;
    }
}

console.log(sumOfPopulation)
console.log(total)
