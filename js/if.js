// if, switch, ternary

const vaisius = 'pomidoras';
console.log(vaisius);

if (vaisius === 'pomidoras') {
    console.log('pomidoras');
} else {
        console.log('Bandykite dar karta');
    }

console.log('----------------------------');

const num1 = 7;
const num2 = 7;
const num3 = 8;
const num4 = 3;

if (num1 < num2) {
    console.log(num1, 'yra mazesnis uz', num2);
} 
if (num1 > num2) {
    console.log(num1, 'yra didesnis uz', num2);
} 
if (num1 === num2) {
    console.log(num1, 'yra lygus', num2);
}

console.log('------------------------------');

const darzove = 'bulve';

switch (darzove) {
    case 'pomidoras':
    case 'agurkas':
    case 'bulve':
    case 'morka':
    case 'cukinija':
    console.log('darzove');
}
switch (darzove) {
    case 'obuolys':
    case 'kriause':
    console.log('vaisius');
} 

console.log('-----------------------------');

const diena = 'aleliuja';

switch (diena) {
    case 'pirmadienis':
        console.log('pirmadienis');
        break;
    case 'antradienis':
        console.log('antradienis');
        break;
    case 'treciadienis':
        console.log('treciadienis');
        break;
    case 'ketvirtadienis':
        console.log('ketvirtadienis');
    case 'penktadienis':
        console.log('penktadienis');
    case 'sestadienis':
        console.log('sestadienis');
    case 'sekmadienis':
        console.log('sekmadienis');

    default: 
    console.log(diena, '- tokios dienos nera');
}


