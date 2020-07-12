import React, { Component } from 'react';



const userInput = (props) => {

    return <input  onChange={props.changed} 
    value={props.currentname}
    type ='text'/>;

}

export default userInput;
