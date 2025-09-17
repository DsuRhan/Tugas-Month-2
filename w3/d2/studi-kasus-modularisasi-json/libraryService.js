import books from "./books.json" with { type: "json" };

export function getAllBooks() {
  return books;
}

export function addBook(book) {
  books.push(book);
}

export function findBookByTitle(title) {
  return books.find(b => b.judul.toLowerCase() === title.toLowerCase());
}
