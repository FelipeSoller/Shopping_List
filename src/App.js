import React, { Component } from 'react';
import ShoppingInput from './components/ShoppingInput';
import ShoppingList from './components/ShoppingList';

import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';


class App extends Component {
  state={
    items:[],
    id: uuidv4(),
    item: '',
    editItem: false    
  };

  handleChange = event => {
    this.setState({
      item: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newItem = {
      id: this.state.id,
      item: this.state.item      
    };

    console.log(newItem);

    const updateItems = [...this.state.items, newItem];

    this.setState({
      items: updateItems,
      item: '',
      id: uuidv4(),
      editItem: false
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">
              Shopping List Input
            </h3>
            <ShoppingInput 
              item={this.state.item} 
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit} 
            />
            <ShoppingList />
          </div>
        </div>
      </div>      
    );
  };
};

export default App;
