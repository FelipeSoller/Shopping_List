import React, { Component } from 'react';
import PrintedItem from './PrintedItem';

export default class PrintedList extends Component {
    render() {
        const { items } = this.props;

        return (
            <ul className="list-group my-2">
                <h3 className="text-capitalize text-center text-dark">Shopping List</h3>
                {items.map(item => {
                    return (
                        <PrintedItem 
                            key={item.id}
                            title={item.title}
                            realQuantity={item.realQuantity}
                            realUnit={item.realUnit}                            
                        />
                    );                        
                })}               
            </ul>
        );
    };
};
