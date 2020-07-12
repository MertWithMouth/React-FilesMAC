import React, { Component } from 'react';
import Person from './Person';
import './App.css';

class App extends Component {

  state = {

    persons: [

      {id:'asvf1',  name: "Max", age: 28},
      {id:'asvf2', name: "Mert", age: 19},
      {id:'asvf3',  name: "Annie", age: 25}
    ],
    showpersons: false



  };
  
  nameChangedHandler= (event, id) =>{

    const personIndex =this.state.persons.findIndex(p => {

      return p.id ===id;

    });


    const person = {
      
      
      
      ...this.state.persons[personIndex]
    };

    person.name =event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex]=person;

    this.setState({

      persons: persons
      
    })


  }


  deletePersonHandler = (personIndex) => {


    //const persons=this.state.persons.slice();
    const persons= [...this.state.persons];

    persons.splice(personIndex,1);
    this.setState({persons:persons})





  }



  togglePersonHandler = () =>{

      const doesShow = this.state.showpersons;
      this.setState({showpersons: !doesShow});

  }

  render(){
    const style ={

      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
      
    };


    let persons =null;

    if(this.state.showpersons){

      

      persons = (
      
      
      <div>

        {this.state.persons.map((person,index) => {

            return <Person 
            click={() =>this.deletePersonHandler(index)}
            name= {person.name} 
            age= {person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event,person.id)}/>

        })}
      
    </div>)

    }
  return (

   

    <div className="App">


      <button style = {style} onClick ={this.togglePersonHandler} >Switch Name</button>
      {persons}
      
        
          



      

     


    </div>
  );
  }
}

export default App;
