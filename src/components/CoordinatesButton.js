// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

    logCoordinates = (event) => {
        let coordinates = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinates)
    }

    render(){
        return(
            <button onClick={(event) => {this.logCoordinates(event)}}>Click Me</button>
        )
    }
}

export default CoordinatesButton
