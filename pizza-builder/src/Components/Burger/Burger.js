import React, { Component } from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.js'
import BurgerBuilder from '../../Containers/BurgerBuilder/BurgerBuilder';


const burger = (props) => {


    return(

        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            <BurgerIngredient type='cheese'/>
            <BurgerIngredient type='mear'/>
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );



}


export default burger;