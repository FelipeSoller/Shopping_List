import React, { Component } from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

export default class ShoppingItem extends Component {
    render() {
        const { title, realQuantity, realUnit, handleDelete, handleEdit } = this.props

        return (            
            <div className="list-group-item text-capitalize border text-dark">
                <div className="container">                    
                    <div className="row">
                        <div className="title col-6 border">
                            <h6 className="my-1">{title}</h6>
                        </div>

                        <div className="quantity col-2 border text-center">
                            <h6 className="my-1">{realQuantity}</h6>
                        </div>

                        <div className="unit col-2 border text-center">
                            <h6 className="my-1">{realUnit}</h6> 
                        </div>

                        <div className="edit-icon col-1 text-center">
                            <span className="mx-2 text-primary" onClick={handleEdit}>
                                <i><FaPencilAlt /></i>                        
                            </span>
                        </div>

                        <div className="delete-icon col-1 text-center">
                            <span className="mx-2 text-danger" onClick={handleDelete} >                        
                                <i><FaTrashAlt /></i>
                            </span>
                        </div>                        
                    </div>                    
                </div>
                
            </div>            
        );
    };
};
