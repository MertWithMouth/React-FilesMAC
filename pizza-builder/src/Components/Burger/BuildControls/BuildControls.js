import React, { Component } from 'react';
import BuildControl from '../BuildControls/BuildControl/BuildControl.js'
import classes from './BuildControls.module.css';

const controls = [

    {label:'Salad', type: 'salad'},
    {label:'Bacon', type: 'bacon'},
    {label:'Cheese', type: 'cheese'},
    {label:'Meat', type: 'meat'}
  

];

const buildControls =(props) => (
    <div className={classes.BuildControls}>

        {controls.map(ctrl => (<BuildControl 
        
        added = {() => props.ingredientadded(ctrl.type)}
        removed = {() => props.ingredientremoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
         key ={ctrl.label} label={ctrl.label}/>))}

      

    </div>



);

export default buildControls;