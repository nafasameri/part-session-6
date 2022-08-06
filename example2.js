function prime(number) {
    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    }
    else if (number > 1) {
        for (let j = 2; j <= number; j++) {
            let isPrime = true;
            for (let i = 2; i < j; i++) {
                if (j % i == 0) { 
                    isPrime = false;
                    break;
                }
            }    
            if (isPrime)
                console.log(`${j} is a prime number`);
        }
    }
    
    else {
        console.log("The number is not a prime number.");
    }
 }

 prime(17);