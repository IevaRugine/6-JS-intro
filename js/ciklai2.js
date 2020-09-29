const nuo = -18
const iki = 18
let daliklis = 7
let count = 0
let suma = 0

//Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.

for (i = nuo; i<=iki; i++) {
let count = i % daliklis;
//console.log(i, count);

if (count === 0) { 
   suma++
   console.log(suma);
   
 }
}

console.log(`Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${suma} vienetai.`);



function autoAshys (ratai) {


if (ratai <=4) {
    return ratai/2 
    
} else {
    return (ratai - 2)/4+1;

}

}
console.log (autoAshys (4));
console.log (autoAshys (10));
console.log (autoAshys (14));
console.log (autoAshys (2));

// let asiuKiekis = 1
// let darnepanaudoturatukiekis = ratukiekis - 2

// if(darnepanaudoturatukiekis ===2)
// {}

function hello(name) {
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
    if (name === ('string')) { 
      return 'Hello, World!'
    } else return 'Hello, ' +nameCapitalized +'!'; 

    }
console.log (hello('antanas'));