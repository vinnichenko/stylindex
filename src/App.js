import React, { Component } from 'react';
import BooksList from './components/BooksList/BooksList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Books List App</h1>
        </header>
        <BooksList />
      </div>
    );
  }
}

export default App;
