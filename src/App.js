import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cats: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ cats: users }))

      .catch((err) => {
        console.log(err);
      });

  }

  // Arrow function to avoid using bind for context for this
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    // Destructuring! Cleaner than e.g. const monsters = this.state.monsters
    const { cats, searchField } = this.state;
    const filteredCats = cats.filter(cat =>
      cat.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
      <h1>React Cats</h1>
        <SearchBox
          placeholder='search cat ...'
          handleChange={this.handleChange}
        />
        <CardList cats={filteredCats}>

        </CardList>

      </div>
    );
  }
}
export default App;
