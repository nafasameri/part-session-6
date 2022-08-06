function fibWithFor(n) {
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
}

function fibWithReq(n) {
    if(n < 2)
        return n;
    else
        return fibWithReq(n-1) + fibWithReq(n - 2);
}

console.log(fibWithFor(6));

console.log(fibWithReq(6));