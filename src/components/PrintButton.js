import React, { Component } from 'react';


export default class PrintButton extends Component {
    render() {
        return (           
                <a className="list-group my-2" href="./pages/ShoppingListPrinted" target="_blank">
                    <button 
                            type="button" 
                            className="btn btn-success text-capitalize mt-2 font-weight-bold"                    
                    >
                            Print Button
                    </button>
                </a>            
        );
    };
};
