import React from 'react';
import{ BrowserRouter, Switch, Route } from 'react-router-dom';
import ShoppingApp from '../pages/ShoppingApp';
import ShoppingListPrinted from '../pages/ShoppingListPrinted'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ShoppingApp} />  
                <Route exact path="/pages/ShoppingListPrinted" component={ShoppingListPrinted} />               
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;