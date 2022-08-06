function fib(n) {
    let a = 1
    let b = 1;
    let fib = 0;
    for (let i = 1; i <= n; i++) {
        // console.log(a);
        fib = a;
        temp = a + b;
        a = b;
        b = temp;
    }
    return fib;
};

const f1 = function () { console.log("f1"); };
const f2 = function () { console.log("f2"); };

function doSomeThinge(n, f1, f2) {
    let fibnanchi = fib(n);

    if (fibnanchi % 2 == 0)
        f1();
    else 
        f2();
}

doSomeThinge(1000000, f1, f2);