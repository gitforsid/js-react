import { Component } from 'react';

import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-bar/search-bax.component.jsx';
import './App.css';

class App extends Component {
constructor() {
  super();
  this.state = {
    monsters: [],
    searchField: ''
  };
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) =>
   this.setState(
    () => {
    return {monsters: users};
  },
  // () => {
  //   // console.log(this.state)
  // }
)
  )
}

onSearchChange = (event) =>
  { console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(() =>
    { return { searchField };
    })
}

  render() {
    const {monsters, searchField } = this.state
    const { onSearchChange } = this

    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        {/*{filterMonsters.map((monster) => {
          return (
            <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        );
        })}*/}
          <SearchBox onChangeHandler={onSearchChange} plasecholder='search' className='monster-search-box'/>
          <CardList monsters={filterMonsters} />
      </div>

    );
  }
}

export default App;
