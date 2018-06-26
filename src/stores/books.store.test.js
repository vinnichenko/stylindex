import BooksStore from './books.store';

describe('Tests for BooksStore', () => {
  it('Should init books', () => {
    const store = new BooksStore();
    expect(store.books).toBeDefined();
    expect(store.books.length).toBe(0);
  });

  it('Should check setBooks action', () => {
    const store = new BooksStore();
    const books = [
      {
        isbn: '111'
      }
    ];
    store.setBooks(books);
    expect(store.books.length).toBe(1);
    expect(store.books[0].isbn).toEqual('111');
  });
});
