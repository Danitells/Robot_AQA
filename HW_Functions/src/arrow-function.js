const addition = (array) => {
    const hasString = array.some((item) => typeof item === 'string');
    let result = hasString ? '' : 0;

    for (const item of array) {
        result += item;
    }

    return result;
};

const numbers = [1, 2, 3, 4, 5];
const strings = ['Hello', ' ', 'World', '!'];

console.log(addition(numbers));
console.log(addition(strings));
