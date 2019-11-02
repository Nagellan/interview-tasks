/*
Task:
const o = {
  a: {
    b: {},
    c: 42
  },
  z: null
};
(o, 'a.c') => 42
(o, 'a.d') => undefined
(o, 'z') => null
 */

const obj = {
    a: {
        b: {},
        c: 42
    },
    d: null
};

const getProperty = (obj, props) => {
    const [property, ...rest] = props.split('.');
    const got = obj[property];
    return rest.length === 0 ? got : getProperty(got, rest.join('.'))
};

console.log(getProperty(obj, 'a'));
console.log(getProperty(obj, 'a.b'));
console.log(getProperty(obj, 'a.c'));
console.log(getProperty(obj, 'a.z'));
console.log(getProperty(obj, 'd'));
console.log(getProperty(obj, ''));