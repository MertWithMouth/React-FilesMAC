import React from 'react';
import Aux from '../../hoc/Aux.js'
import classes from './Layout.modules.css'

const layout =(props) => (

    <Aux>

    <div>Toolbar, SideDrawer, Backdrop</div>

    <main className={classes.Content}>
        {props.children}
    </main>

    </Aux>

)

export default layout;