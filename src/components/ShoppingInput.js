import React, { Component } from 'react';
import { FaBook } from 'react-icons/fa';

export default class ShoppingInput extends Component {
    render() {
        return (
            <div className="card card-body my-3">
                <form>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-success text-white">
                                <i className=""><FaBook /></i>
                            </div>
                        </div>
                        <input 
                            type="text" 
                            className="form-control text-capitalize" 
                            placeholder="Add an item to your list"
                        />
                    </div>
                    <button type="submit" className="btn btn-block btn-success mt-3">Add Item</button>
                </form>
            </div>
        );
    };
};
