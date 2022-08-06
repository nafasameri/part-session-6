function zirReshte(str, zir) {
    // let STR = "";
    // let len = str.length / zir.length;
    // for (let i = 0; i < len; i++) {
    //     STR += str;
    // }
    str += str;
    str += str;
    let temp = str.includes(zir);
    return temp;
}

console.log(zirReshte("Developer4", "Develop"));