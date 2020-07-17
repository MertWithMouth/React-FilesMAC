import React, { Component } from 'react';

import './App.css';
import Layout from './Components/Layout/Layout.js';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder.js'

class App extends Component  {
  render(){
  return (
    <div className="App">

      <Layout/>
      <BurgerBuilder/>

    </div>
  );
  }
}

export default App;
