import React, { Component } from 'react';
import ShoppingItem from './ShoppingItem';

export default class ShoppingList extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit } = this.props;

        return (
            <ul className="list-group my-2">
                <h3 className="text-capitalize text-center text-dark">Shopping List</h3>
                {items.map(item => {
                    return (
                        <ShoppingItem 
                            key={item.id}
                            title={item.title}
                            realQuantity={item.realQuantity}
                            realUnit={item.realUnit}
                            handleDelete={() => handleDelete(item.id)}
                            handleEdit={() => handleEdit(item.id)}
                        />
                    );                        
                })}
                
                <button 
                    type="button" 
                    className="btn btn-danger text-capitalize mt-5 font-weight-bold"
                    onClick={clearList}
                >
                    Clear List
                </button>
            </ul>
        );
    };
};
