import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello Dave'
    }
  } //constructor

  ChangeState = () => {
    this.setState({message: 'Look Up'})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.message}</p>
          <button onClick={this.ChangeState}>Change State</button>
        </header>
      </div>
    );
  } //render
} //class


  


export default App;
