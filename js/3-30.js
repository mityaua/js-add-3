function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
  // Пиши код ниже этой строки
  let obj = { ...data };

  return console.log(obj);
  // Пиши код выше этой строки
}

makeTask({}); // возвращает { category: 'Общее', priority: 'Обычный', completed: false }.
makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }); // возвращает { category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор', completed: false }.
makeTask({ category: 'Финансы', text: 'Забрать проценты' }); // возвращает { category: 'Финансы', priority: 'Обычный', text: 'Забрать проценты', completed: false }.
makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' }); // возвращает { category: 'Общее', priority: 'Низкий', text: 'Выбрать шампунь', completed: false }.
makeTask({ text: 'Купить хлеб' }); // возвращает { category: 'Общее', priority: 'Обычный', text: 'Купить хлеб', completed: false }.

// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.

// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data.
// В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать.
// Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.
