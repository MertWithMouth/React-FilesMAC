import React, { Component } from 'react';
import Validation from './Validation'
import Char from './Char'
import './App.css';


class App extends Component {

  state= {

    userInput: ''
  }


  lengthHandler = (event) =>{

    this.setState({userInput: event.target.value})






  }

  deleteCharacterHandler =(index)=>{

    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText})





  }
  render(

   


  ){


     const charList =this.state.userInput.split('').map((ch, index) => {


        return <Char character={ch} key = {index}
        clicked ={() =>this.deleteCharacterHandler(index)}/>;
     })
  return (
    <div className="App">
      <div className="questions">
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li> <br/>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li><br/>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li><br/>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li><br/>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li><br/>
          <li>When you click a CharComponent, it should be removed from the entered text.</li><br/>
      </div>

      
      <input className= 'inputbox' 
      onChange = {this.lengthHandler}/>

      <p>{this.state.userInput}</p>
      <Validation inputLength={this.state.userInput.length}/>
      {charList}

      
    </div>
  );
  }
}

export default App;
