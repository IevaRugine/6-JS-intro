// skaicius kvadratu


function power (skaicius) {

    return skaicius * skaicius
}

console.log(power(skaicius));



function power (skaicius, laipsnis) {
    let ats = 1
    for (i=0; i<=laipsnis; i++) {
         ats *= skaicius; 
    }
    return ats;
}

console.log(power(0, 100 ));

