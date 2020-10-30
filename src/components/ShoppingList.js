import React, { Component } from 'react';
import ShoppingItem from './ShoppingItem';

export default class ShoppingList extends Component {
    render() {
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">Shopping List</h3>
                <ShoppingItem />
                <button 
                    type="button" 
                    className="btn btn-danger text-capitalize mt-5"
                >
                    Clear List
                </button>
            </ul>
        );
    };
};
