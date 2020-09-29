//kintamieji: numbers, string, array
//salygos: if, switch

// const week = ['pirmadienis', 'antradienis', 'treciadienis', 'ketvirtadienis', 'penktadienis', 'sestadienis', 'sekmadienis']
// const weekCount = week.length;
// console.log(week);

// for (let i = 0; i < weekCount; i++) {
//     console.log(week [i]);

// }


// 0 - 0
// 0 - 4
// 0 - 100
// 574 - 815
// -50 - 50
// -70 - 30


const nuo = 3;
const iki = 12;
let suma = 0



for (let i = nuo; i <= iki; i++) {
    suma = suma + i; 
    console.log(i, suma);
}

console.log('-------------------');

const text = 'labuka'; 
//console.log(text);
const textcount = text.length
//console.log(textcount);
let raide = ''
let atbulas = ''

for (let i = 0; i < textcount; i++) {
    //raide = text[5] + text[4] + text [3] + text [2] + text [1] + text [0]
    //console.log(raide);
    
    //atbulas = text [textcount - 1 - i];
    //console.log (atbulas);

    atbulas = text [i] + atbulas
    console.log(atbulas);
 }


const week = ['pirmadienis', 'antradienis', 'treciadienis', 'ketvirtadienis', 'penktadienis', 'sestadienis', 'sekmadienis']
const weekCount = week.length;
console.log(week);
let atvirksciai = '';

for (let i = 0; i < weekCount; i++) {
    atvirksciai = week [i] + ' ' + atvirksciai;
    console.log(atvirksciai);

}

