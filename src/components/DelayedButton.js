// Code CoordinatesButton Component Here
import React, { Component } from 'react';
import { setTimeout } from 'timers';
export default class DelayedButton extends Component {
    
      handleClick = (event) => {
        const { onDelayedClick, delay } = this.props;
        setTimeout(() => onDelayedClick(event), delay)
      }

    render() { 
       
        return ( 
            <button onClick={this.handleClick}>Mouse Delay</button>
         );
    }
}
 
