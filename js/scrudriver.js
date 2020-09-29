

function screw(height, stepheight, turn) {
    const sregis = height / stepheight;
    const turnsperstep = 360 / turn;
    const turnscount = turnsperstep * sregis;
    return turnscount
}

console.log(screw(15, 1.5, 140))