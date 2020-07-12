import React, { Component } from 'react';
import UserOutput from './Components/UserOutput'
import UserInput from './Components/UserInput'


import './App.css';

class App extends Component {

  state = {

    username : "mertwithamouth"
    
  }


  inputChangedHandler = (event) => {


    this.setState({username: event.target.value});





  }



  
  render(){
  return (
    <div className="App">

      <UserInput changed={this.inputChangedHandler}
      
      currentname={this.state.username}/>
      <UserOutput username= {this.state.username}/>
      <UserOutput username= {this.state.username}/>
      <UserOutput username= "Katarina"/>
      
    </div>
  );
  }
}

export default App;
