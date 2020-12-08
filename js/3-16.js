function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Пиши код ниже этой строки
  const value = Object.values(salaries);

  for (const num of value) {
    totalSalary += num;
  }

  // Пиши код выше этой строки
  return console.log(totalSalary);
}

countTotalSalary({}); // возвращает 0.
countTotalSalary({ mango: 100, poly: 150, alfred: 80 }); // возвращает 330.
countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }); // возвращает 400.

// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.
