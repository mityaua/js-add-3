function countProps(object) {
  // Пиши код ниже этой строки
  const keys = Object.keys(object);
  return keys.length;
  // Пиши выше ниже этой строки
}

countProps({}); // возвращает 0.
countProps({ name: 'Mango', age: 2 }); // возвращает 2.
countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }); // возвращает 3.

// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.