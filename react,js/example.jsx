const obj1 = { dog: 'woof' };
const obj2 = { cat: 'meow' };
console.log({ ...obj1, ...obj2 }); // prints { dog: 'woof', cat: 'meow' }

const arr1 = [1, 2];
const arr2 = [3, 4];
console.log([ ...arr1, ...arr2 ]); // prints [1, 2, 3, 4]

const name = 'Ryland';
const helloString = `Hello ${name}`;

//деструктуризация 3
[a, b] = [10, 20];
console.log(a); // prints 10

// Используйте Lint eslint или prettier // eslint с правилами AirBNB.
//Prettier – это средство форматирования кода

//тестирование 
//Test Driver – Ava Jest, Mocha, Jasmine