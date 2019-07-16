// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {
    callbackFn = (event) => {
        event.persist();
        setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
    }

    render(){
        return(
            <button onClick={(event) => {this.callbackFn(event)}}> Delayed Button</button>
        )
    }
}

export default DelayedButton
