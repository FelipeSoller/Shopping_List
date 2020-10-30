import React, { Component } from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

export default class ShoppingItem extends Component {
    render() {
        const { title, handleDelete, handleEdit } = this.props

        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2 border text-dark">
                <h6>{title}</h6>
                <div className="shopping-icon">
                    <span className="mx-2 text-primary" onClick={handleEdit}>
                        <i><FaPencilAlt /></i>                        
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete} >                        
                        <i><FaTrashAlt /></i>
                    </span>
                </div>
            </li>            
        );
    };
};
