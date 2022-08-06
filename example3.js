function checkStrLength(...strings) {
    let max = 0;
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > max)
            max = strings[i].length;
    }
    return max;
}

console.log(checkStrLength("gfdhjskl", "hgtrfjkdls", "iesr udfiei", "ritu mawesedifnf"));