import React from 'react';
import './App.css';


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
        {this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1> )}
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
