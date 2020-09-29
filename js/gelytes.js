function flowers(vazonai, pradinisvazonokiekis, vaikai) {
let pots = pradinisvazonokiekis;
let year = 1

while (pots < vazonai) {
    pots = pots + pots * vaikai;
    year++;
}

    return year;
}

console.log(flowers(20, 1, 1));
console.log(flowers(50, 1, 2));