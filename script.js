"use strict";

// 1. Напишите функцию sumTo(n), которая вычисляет сумму чисел
//  1 + 2 + ... + n. Для решения задачи необходим использовать рекурсию.

function sumTo(number) {
  if (number === 1) {
    return number;
  } else {
    return number + sumTo(number - 1);
  }
}

console.log(sumTo(4)); // 10
console.log(sumTo(3)); // 6

// 2. Написать функцию findShort , которая будет находит
// самое короткое слово в предложении. В случае если
// длина двух слов совпадает - вернуть первое найденое
// короткое слово. Пример работы функции:

function findShort(str) {
let string = str.split(' ')
let min = string[0];
for (const word of string) {
  if (word.length < min.length) {
    min = word;
  }
}
return min
}

const sentance = "Lorem ipsum dolor sit amet";

console.log(findShort(sentance)); // sit
console.log(findShort("Hello world")); // Hello
console.log(findShort("Hi")); // Hi
console.log(findShort("She is David's sister")); // is
