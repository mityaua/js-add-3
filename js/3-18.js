const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Пиши код ниже этой строки
  let total = null;
  for (const product of products) {
    if (productName === product.name) {
      return (total = product.price);
    }
  }
  return total;
  // Пиши код выше этой строки
}

getProductPrice('Радар'); // возвращает 1300.
getProductPrice('Захват'); // возвращает 1200.
getProductPrice('Сканер'); // возвращает 2700.
getProductPrice('Дроид'); // возвращает 400.
getProductPrice('Двигатель'); // возвращает null.

// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта.
// Функция ищет объект продукта с таким именем(свойство name) в массиве products и возвращает его цену(свойство price).
// Если продукт с таким названием не найден, функция должна возвращать null.
