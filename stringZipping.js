/*
Task: ('AAABbbbBcCCC') => 'A3Bb3BcC3'
 */

const zipString = str => {
    let zipped = '',
        current = str[0],
        count = 0;
    for (const index in str.split('')) {
        const char = str[index];
        if (char === current)
            count++;
        else {
            zipped += count > 1 ? `${current}${count}` : current;
            current = char;
            count = 1;
        }
    }

    return count > 1 ? `${zipped}${current}${count}` : zipped + current;
};

console.log(zipString('AAABbbbBcCCC'));
console.log(zipString('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB'));