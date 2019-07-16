// Code CoordinatesButton Component Here
import React, { Component } from 'react';
export default class CoordinatesButton extends Component {
    
      coordinate = (event) => {
        const {onReceiveCoordinates} = this.props
        return onReceiveCoordinates([event.clientX, event.clientY])
      }

    render() { 
       
        return ( 
            <button onClick={this.coordinate}>Mouse Coordinate</button>
         );
    }
}
 
