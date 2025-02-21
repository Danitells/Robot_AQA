const addition = (array: (string | number)[]): string | number => {
  const hasString: boolean = array.some((item) => typeof item === 'string');
  let result: string | number = hasString ? '' : 0;
  for (const item of array) {
      result += item;
  }
  return result;
};

const numbers: number[] = [1, 2, 3, 4, 5];
const strings: string[] = ['Hello', ' ', 'World', '!'];

console.log(addition(numbers)); 
console.log(addition(strings)); 
