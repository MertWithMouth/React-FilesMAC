
import React, { Component } from 'react';
import Aux from '../../hoc/Aux.js'
import Burger from '../../Components/Burger/Burger.js'

class BurgerBuilder extends Component{
    render(){

        return(
            <Aux>

                <Burger />
                <div>Build Control</div>

            </Aux>

            

        );
    }

}

export default BurgerBuilder;