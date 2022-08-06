function func() {
    console.log("func");
}

function doSomeThinge(n) {
    for (let i = 0; i < n; i++)
        func();
}

doSomeThinge(5);