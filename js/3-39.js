const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  removePotion(potionName) {
    // Пиши код ниже этой строки
    const potioIndex = this.potions.indexOf(potionName);
    this.potions.splice(potioIndex, 1);
    // Пиши код выше этой строки
  },
};

atTheOldToad.removePotion('Дыхание дракона'); // в свойстве potions будет массив ['Зелье скорости', 'Каменная кожа'].
atTheOldToad.removePotion('Зелье скорости'); // в свойстве potions будет массив ['Каменная кожа'].

console.log(atTheOldToad);

// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.
