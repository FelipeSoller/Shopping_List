import React, { Component } from 'react';
import { FaBook } from 'react-icons/fa';

export default class ShoppingInput extends Component {
    render() {
        const { item, handleChange, handleSubmit, editItem } = this.props;

        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className={
                                editItem 
                                ? "input-group-text bg-primary text-white font-weight-bold"
                                : "input-group-text bg-success text-white font-weight-bold"
                             }>
                                <i><FaBook /></i>
                            </div>
                        </div>
                        <input 
                            type="text" 
                            required
                            className="form-control text-capitalize" 
                            placeholder="Add an item to your list"
                            value={item}
                            onChange={handleChange}
                        />              
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
