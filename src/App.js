import React from 'react';
import './App.css';
//my custom imports
import {CardList} from './component/card-list/card-list.component';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: '1'
        },
        {
          name: 'Dracula',
          id: '2'
        },
        {
          name: 'Zombie',
          id: '3'
        }
      ]
    };
  } //constructor

  ChangeState = () => {
    this.setState({message: 'Look Up'})
  }

  render() {
    return (
      <div className="App">
        {/* CardList component - responsible for listing all the cards */}
        <CardList monsters={this.state.monsters}/>
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
