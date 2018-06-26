import stores from './stores';

describe('Tests for stores', () => {
  it('Should check booksStore', () => {
    expect(stores.booksStore).toBeDefined();
    expect(stores.booksStore.books).toBeDefined();
    expect(stores.booksStore.books.length).toBe(0);
  });
});
