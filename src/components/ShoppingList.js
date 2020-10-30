import React, { Component } from 'react';
import ShoppingItem from './ShoppingItem';

export default class ShoppingList extends Component {
    render() {
        const { items, clearList, handleDelete } = this.props;

        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">Shopping List</h3>
                {items.map(item => {
                    return (
                        <ShoppingItem 
                            key={item.id} 
                            title={item.title}
                            handleDelete={() => handleDelete(item.id)}
                        />
                    );                        
                })}
                
                <button 
                    type="button" 
                    className="btn btn-danger text-capitalize mt-5"
                    onClick={clearList}
                >
                    Clear List
                </button>
            </ul>
        );
    };
};
