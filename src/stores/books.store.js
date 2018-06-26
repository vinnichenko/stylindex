import { observable, action } from 'mobx'
import axios from 'axios';

class BooksStore {
  @observable books = [];

  @action
  setBooks(books) {
    this.books = books;
  }

  getBooks() {
    axios.get('https://s3-eu-west-1.amazonaws.com/styl-reading-list/data.json')
      .then(res => {
        if (res && res.data && res.data.books) {
          this.setBooks(res.data.books);
        }
      })
      .catch(err => console.log(err));
  }
}

export default BooksStore;
