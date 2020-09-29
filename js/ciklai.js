
const nuo = 0;
const iki = 4;

let suma = 0

for (let i = nuo; i <= iki; i++) {
suma = suma + i; 
console.log(suma);
}

console.log('-------------------------');

const zodis = 'sometimeslifesucks'
const zodzioilgis = zodis.length;
console.log(zodzioilgis);
let atbulas = '';

console.log(zodis);

for ( i = 0; i < zodzioilgis; i++) {
// atbulas = zodis[i] + atbulas;

const raide = zodis[zodzioilgis - 1 - i];
atbulas = raide + atbulas
console.log(atbulas);
}



