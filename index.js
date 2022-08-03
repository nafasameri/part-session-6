
function mult(a = 1, b = 1) {
    let digit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (a === undefined || a === null || !digit.includes(a))
        a = 1;
    if (b === undefined || b === null || !digit.includes(b))
        b = 1;

    return a * b;
}

let m = mult(" ");
console.log(m);