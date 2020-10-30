import React, { Component } from 'react';
import ShoppingInput from './components/ShoppingInput';
import ShoppingList from './components/ShoppingList';

import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">
              Shopping List Input
            </h3>
            <ShoppingInput />
            <ShoppingList />
          </div>
        </div>
      </div>      
    );
  };
};

export default App;
