import React from 'react';
import './App.css';
//my custom imports
import {CardList} from './component/card-list/card-list.component';
import {SearchBox} from './component/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [], //loading handled by componentDidMount()
      searchField: ''
    };
  } //constructor

  // custom arrow function to handle onChange events on searchbox
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    // destructure state into reusable array variables
    const { monsters, searchField } = this.state;
    // filter new monster array based on search (if blank then it returns all monsters)
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    console.log(filteredMonsters);
    // return
    return (
      <div className="App">
        {/* Searchbox to filter by monster */}
        <SearchBox 
        placeholder='search monsters'
        handleChange={this.handleChange}
        />
        {/* CardList component - responsible for listing all the cards */}
        <CardList monsters={filteredMonsters}/>
      </div>
    ); //return
  } //render

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') //promise made to URL endpoint
    .then( response => response.json()) //get back JSON formatted data
    .then(users => this.setState({monsters: users})); //pull out users array from JSON
  }//componentsDidMount

} //class


  


export default App;
