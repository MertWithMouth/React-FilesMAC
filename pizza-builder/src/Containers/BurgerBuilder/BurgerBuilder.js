
import React, { Component } from 'react';
import Aux from '../../hoc/Aux.js'
import Burger from '../../Components/Burger/Burger.js'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls.js'





const INGREDIENT_PRICES = {

    salad: 0.5,
    cheese:1,
    meat:2,
    bacon:1


};


class BurgerBuilder extends Component{

    
    state= {

        ingredients: {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0

        },
        totalPrice: 9
       };


       addIngredientHandler =(type) => {

        const oldCount =this.state.ingredients[type];
        const updatedCount=oldCount+1;
        const updatedIngradients = {

            ...this.state.ingredients

        };

       updatedIngradients[type] =updatedCount;
    const priceAddition =INGREDIENT_PRICES[type];
    const oldPrice= this.state.totalPrice;
    const newPrice= oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngradients})

       }


       removeIngredientHandler =(type) => {

        const oldCount =this.state.ingredients[type];
        if(oldCount <= 0){

            return;
        }
        const updatedCount=oldCount-1;
        const updatedIngradients = {

            ...this.state.ingredients

        };

       updatedIngradients[type] =updatedCount;
    const priceDeduction =INGREDIENT_PRICES[type];
    const oldPrice= this.state.totalPrice;
    const newPrice= oldPrice - priceDeduction;
     
    this.setState({totalPrice: newPrice, ingredients: updatedIngradients})
    
       }



    render(){

        const disabledInfo = {

            ...this.state.ingredients
        };
        for (let key in disabledInfo){


            disabledInfo[key]= disabledInfo[key]<=0 
        }

        return(
            <Aux>

                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientadded={this.addIngredientHandler}
                    ingredientremoved={this.removeIngredientHandler}
                    disabled={disabledInfo}/>
                    {this.state.totalPrice}

            </Aux>

            

        );
    }

}

export default BurgerBuilder;