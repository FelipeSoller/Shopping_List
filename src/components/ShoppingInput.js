import React, { Component } from 'react';
import { FaBook } from 'react-icons/fa';

export default class ShoppingInput extends Component {
    render() {
        const { item, quantity, unit, handleChangeItem, handleChangeQuantity, handleChangeUnit, handleSubmit, editItem } = this.props;

        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>                                        
                    <div className="row m-0">
                        <div className="icon p-0 col-1">
                            <div className={
                                editItem 
                                ? "input-group-text px-2 bg-primary text-white font-weight-bold"
                                : "input-group-text px-2 bg-success text-white font-weight-bold"
                             }>
                                <i className="mx-auto"><FaBook /></i>
                            </div>
                        </div>
                        <div className="input p-0  col-5" autofocus>
                            <input 
                                type="text" 
                                required
                                autofocus                                                             
                                className="form-control" 
                                placeholder="Add an item"
                                value={item}
                                onChange={handleChangeItem}
                            /> 
                        </div>             
                        <div className="quantity p-0  col-4">                        
                            <input 
                                type="text" 
                                required
                                className="form-control" 
                                placeholder="Add the quantity"
                                value={quantity}
                                onChange={handleChangeQuantity}
                            />              
                        </div>
                        <div className="unit p-0  col-2">            
                            <input 
                                type="text" 
                                required
                                className="form-control" 
                                placeholder="Unit"
                                value={unit}
                                onChange={handleChangeUnit}
                            />             
                        </div>
                    </div>
                    
                    <button 
                        type="submit" 
                        className={
                            editItem 
                            ? "btn btn-block btn-primary mt-3 font-weight-bold" 
                            : "btn btn-block btn-success mt-3 font-weight-bold"
                        }
                    >
                        {editItem ? 'Edit Item' : 'Add Item'}               
                    </button>
                </form>
            </div>
        );
    };
};
