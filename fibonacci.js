/*
print N-th fibonacci number
 */

const fibonacci = (num, fib1 = 0, fib2 = 1) => {
    if (num === 0)
        return fib1;
    if (num === 1)
        return fib2;
    return fibonacci(num - 1, fib2, fib1 + fib2);
};

for (let i = 0; i < 20; i++)
    console.log(fibonacci(i));