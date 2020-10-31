import React, { Component } from 'react';
import ShoppingInput from '../components/ShoppingInput';
import ShoppingList from '../components/ShoppingList';
import PrintButton from '../components/PrintButton';

import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';

import '../styles/App.css';

class App extends Component {
  state = {
    items:[],
    id: uuidv4(),
    item: '',
    quantity: '',
    unit: '',
    editItem: false    
  };

  handleChangeItem = event => {
    this.setState({
      item: event.target.value
    });
  };

  handleChangeQuantity = event => {
    this.setState({
      quantity: event.target.value
    });
  };

  handleChangeUnit = event => {
    this.setState({
      unit: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item,
      realQuantity: this.state.quantity,
      realUnit: this.state.unit     
    };

    const updateItems = [...this.state.items, newItem];

    this.setState({
      items: updateItems,
      item: '',
      quantity: '',
      unit: '',
      id: uuidv4(),
      editItem: false
    });
  };

  componentDidUpdate() {
    localStorage.setItem('itemsStorage', JSON.stringify(this.state.items));
  }

  componentDidMount() {
    const itemsStorage = JSON.parse(localStorage.getItem('itemsStorage'));
    
    if(itemsStorage !== null) {
      this.setState({ items: itemsStorage });
    }
  }

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

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      quantity: selectedItem.realQuantity,
      unit: selectedItem.realUnit,
      editItem: true,
      id: id
    })
  } 

  render() {
    return (      
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center text-dark">
              Shopping List Input
            </h3>
            <ShoppingInput              
              item={this.state.item}
              quantity={this.state.quantity}
              unit={this.state.unit}
              handleChangeItem={this.handleChangeItem}
              handleChangeQuantity={this.handleChangeQuantity}
              handleChangeUnit={this.handleChangeUnit}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <ShoppingList 
              items={this.state.items}
              quantity={this.state.quantity} 
              unit={this.state.unit} 
              clearList={this.clearList} 
              handleDelete={this.handleDelete} 
              handleEdit={this.handleEdit} 
            />
            <PrintButton/>
          </div>
        </div>
      </div>      
    );
  };
};

export default App;
