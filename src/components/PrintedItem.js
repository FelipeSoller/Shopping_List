import React, { Component } from 'react';

export default class ShoppingItem extends Component {
    render() {
        const { title, realQuantity, realUnit} = this.props

        return (            
            <div className="list-group-item text-capitalize border text-dark">
                <div className="container">                    
                    <div className="row">
                        <div className="title col-4 border text-center">
                            <h6 className="my-1">{title}</h6>
                        </div>

                        <div className="quantity col-4 border text-center">
                            <h6 className="my-1">{realQuantity}</h6>
                        </div>

                        <div className="unit col-4 border text-center">
                            <h6 className="my-1">{realUnit}</h6> 
                        </div>                  
                    </div>                    
                </div>
                
            </div>            
        );
    };
};
