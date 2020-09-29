function birth(vardas, metai) {
const dabartiniaimetai = 2020;
let amzius = dabartiniaimetai - metai;

    return `${vardas} dabar yra ${amzius} metu;`

}

console.log(birth('Vardenis', 2002));
console.log(birth('Marija', 1985));