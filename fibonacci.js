/*
print N-th fibonacci number
 */

const fibonacci = (num, pre = 0, accum = 1) => {
    if (num < 2)
        return accum;
    return fibonacci(num - 1, accum, pre + accum);
};

for (let i = 1; i < 20; i++)
    console.log(i, ':', fibonacci(i));