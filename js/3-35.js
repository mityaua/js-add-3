const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
    const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
    // Пиши код выше этой строки
  },
};

bookShelf.updateBook('Мгла', 'Хроники подземелий'); // значение свойства books это массив ['Последнее королевство', 'Хроники подземелий', 'Страж снов'].

console.log(bookShelf);

// bookShelf.updateBook('Последнее королевство', 'Дюна'); // значение свойства books это массив ['Дюна', 'Мгла', 'Страж снов'].

// console.log(bookShelf);

// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books.
// Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент.
