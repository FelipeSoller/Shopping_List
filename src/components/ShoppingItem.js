import React, { Component } from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

export default class ShoppingItem extends Component {
    render() {
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>List Item</h6>
                <div className="shopping-icon">
                    <span className="mx-2 text-warning">
                        <i><FaPencilAlt /></i>                        
                    </span>
                    <span className="mx-2 text-danger">                        
                        <i><FaTrashAlt /></i>
                    </span>
                </div>
            </li>            
        );
    };
};
