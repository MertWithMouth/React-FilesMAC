import React, { Component } from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.js'
import BurgerBuilder from '../../Containers/BurgerBuilder/BurgerBuilder';


const burger = (props) => {

    //Turns objects into arrays and shows hany of them are in need to build.
    let transformedingredient = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) =>
        {
            return <BurgerIngredient key={igKey + i} type ={igKey}/>
        });
    }).reduce((arr,el) =>{
        return arr.concat(el)
    },[]);
    if(transformedingredient.length===0){
        transformedingredient=<p>Please start adding ingredients</p>
    }
    
    console.log(transformedingredient)
    return(

        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedingredient}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );



}


export default burger;