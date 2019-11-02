/*
Task: implement a function that get '*', 'c', 'b','i' as parameters and returns a string 'c*b*i'
 */

const joinTask = (concatValue, ...args) => args.join(concatValue);

// OR

function getJoined() {
    return [].slice.call(arguments, 1).join(arguments[0])
}

console.log(joinTask('*', 'c', 'b', 'i'));
console.log(getJoined('*', 'c', 'b', 'i'));