// Второй вариант решения

function countProps(object) {
  let propCount = 0;
  // Пиши код ниже этой строки
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  // Пиши выше ниже этой строки
  return propCount;
}

// // Первый вариант решения

// function countProps(object) {
//   let propCount = 0;
//   // Пиши код ниже этой строки
//   const arr = [];
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       arr.push(key);
//       propCount = arr.length;
//     }
//   }
//   // Пиши выше ниже этой строки
//   return console.log(propCount);
// }

countProps({}); // возвращает 0.
countProps({ name: 'Mango', age: 2 }); // возвращает 2.
countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }); // возвращает 3.

// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.
