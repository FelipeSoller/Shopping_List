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
      title: this.state.item      
    };

    const updateItems = [...this.state.items, newItem];

    this.setState({
      items: updateItems,
      item: '',
      id: uuidv4(),
      editItem: false
    });
  };

  clearList = () => {
    this.setState({
      items: []
    });
  };

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);

    this.setState({
      items: filteredItems
    });
  };

  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);

    const selectedItem = this.state.items.find(item => item.id === id)

    console.log(selectedItem);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    })
  }

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
              editItem={this.state.editItem}
            />
            <ShoppingList 
              items={this.state.items} 
              clearList={this.clearList} 
              handleDelete={this.handleDelete} 
              handleEdit={this.handleEdit} 
            />
          </div>
        </div>
      </div>      
    );
  };
};

export default App;
