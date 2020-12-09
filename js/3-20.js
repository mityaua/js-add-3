const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  let total = 0;
  for (const product of products) {
    if (productName === product.name) {
      return (total = product.price * product.quantity);
    }
  }
  return total;
  // Пиши код выше этой строки
}

calculateTotalPrice('Бластер'); // возвращает 0.
calculateTotalPrice('Радар'); // возвращает 5200.
calculateTotalPrice('Дроид'); // возвращает 2800.
calculateTotalPrice('Захват'); // возвращает 10800.
calculateTotalPrice('Сканер'); // возвращает 8100.

// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара.
// Функция должна вернуть общую стоимость(цена * количество) товара с таким именем из массива products.
