const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }

    this.potions.push(potionName);
  },
  // Перебираем циклом массив potions и добавляем условие - если перебираемое имя равно параметру, тогда применяем сплайс
  removePotion(potionName) {
    for (let potion of this.potions) {
      const potionIndex = this.potions.indexOf(potion);
      if (potion === potionName) {
        this.potions.splice(potionIndex, 1);
      }
    }
  },
  // Перебираем циклом potions и добавляем условие - если имя свойства равно параметру старому имени, тогда присваиваем новое имя
  updatePotionName(oldName, newName) {
    for (let potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
      }
    }
  },
};

// Пиши код выше этой строки

atTheOldToad.getPotions(); // для исходного объекта возвращает [ { name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 } ].

atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }); // в массиве potions последним элементом будет этот объект.

atTheOldToad.removePotion('Дыхание дракона'); // в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Каменная кожа', price: 520 } ].
atTheOldToad.removePotion('Зелье скорости'); // в свойстве potions будет массив [ { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 } ].

atTheOldToad.updatePotionName({ name: 'Невидимка', price: 620 }); // в массиве potions последним элементом будет этот объект.

atTheOldToad.updatePotionName({ name: 'Зелье силы', price: 270 }); // в массиве potions последним элементом будет этот объект.

// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// {
//   name: 'Дыхание дракона',
//   price: 700
// }

// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.
