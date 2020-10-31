
import React, { Component } from 'react';
import PrintedList from '../components/PrintedList';


import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';

import '../styles/App.css';

class ShoppingListPrinted extends Component {
  state = {
    items:[],
    id: uuidv4(),
    item: '',
    quantity: '',
    unit: '',
    editItem: false    
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

  render() {
    return (      
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">            
            <PrintedList
              items={this.state.items}
              quantity={this.state.quantity} 
              unit={this.state.unit}             
            />            
          </div>
        </div>
      </div>      
    );
  };
};

export default ShoppingListPrinted;
