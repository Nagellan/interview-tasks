const array = [
    {name: 'width', value: 10},
    {name: 'height', value: 20}
];

const transform = array => {
  return array.reduce((accum, {name, value}) => ({...accum, [name]: value}), {})
};

console.log(transform(array));