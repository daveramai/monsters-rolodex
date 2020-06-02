import React from 'react';
import './App.css';
//my custom imports
import {CardList} from './component/card-list/card-list.component';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  } //constructor

  onChange = (e) => {
    console.log(e.target.value);
    this.setState({searchField: e.target.value});
  }

  render() {
    // destructure state into reusable array variables
    const { monsters, searchField } = this.state;
    // filter new monster array based on search
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    // return
    return (
      <div className="App">
        {/* Searchbox to filter by monster */}
        <input onChange={this.onChange} type="search" placeholder="search monster" />
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
