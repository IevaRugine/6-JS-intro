const num1 = 2
const num2 = 4
const num3 = 5

console.log(num1, num2, num3);

let suma = num1 + num2 + num3

console.log(`visu skaiciu suma lygi ${suma}`);

console.log(suma);

const zodis1 = 'viskas'
const zodis2 = 'bus'
const zodis3 = 'gerai'

console.log('Believe me ' + zodis1, zodis2, zodis3);

const skaiciusarasas = [3, 4, 5, 6, 7, 9] ;
console.log(skaiciusarasas);
//let index = 0
// let skaiciusuma = skaiciusarasas[index++];
// skaiciusuma = skaiciusuma - skaiciusarasas[index++] 
// skaiciusuma = skaiciusuma + skaiciusarasas[index++] 
// skaiciusuma = skaiciusuma - skaiciusarasas[index++]  
// skaiciusuma = skaiciusuma + skaiciusarasas[index++] 
// skaiciusuma = skaiciusuma - skaiciusarasas[index++]
// console.log(skaiciusuma);
    


console.log('---------------------------------------');

const balai = [4, 8, 5, 6, 7, 10, 24]
console.log(balai);
let bananas = 0;
let baluilgis = balai.length;
console.log(baluilgis);

let balusuma = balai[bananas++];
balusuma = balusuma + balai[bananas++];
balusuma = balusuma * balai[bananas++]
console.log(balusuma);

const zodziusarasas = ['vienas', 'du', 'trys', 'keturi', 'penki'];
console.log(zodziusarasas);

const tarpas = ', '

console.log( zodziusarasas[0] + tarpas + zodziusarasas [1]);


const logo1 = 2
const logo2 = 3


if (logo1 >= logo2) {
    console.log('Pomidoras')
} else {
        console.log('Bandykite kitą kartą');
    }


const gatve1 = 'gelvonujkljkljkljkl';
const gatve1ilgis = gatve1.length;
console.log(gatve1ilgis);
const gatve2 = 'seimyniskiu';
const gatve2ilgis = gatve2.length
console.log(gatve2ilgis);

if (gatve1ilgis > gatve2ilgis) {  
    console.log('Pomidoras')
} else {
        console.log('Bandykite kitą kartą');
    }

const gatves = ['anapilio', 'rudaamzinoji']
console.log(gatves);

let ilgis1 = gatves[0].length
console.log(ilgis1);

let ilgis2 = gatves[1].length
console.log(ilgis2);

if (ilgis1 > ilgis2) {    
    console.log('Pomidoras')
} else {
        console.log('Bandykite kitą kartą');
    }


const grandine1 = [ 'alio', 'ar', 'jau', 'pbudai'];
const grandine2 = ['taip', 'seniai']

grandine1ilgis = grandine1.length;
console.log(grandine1ilgis);

grandine2ilgis = grandine2.length;
console.log(grandine2ilgis);

if (grandine1ilgis < grandine2ilgis) {
    console.log('Pomidoras');
   } else {
       console.log('Bandykite dar karta');

    }

    
