// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {
  getCords= (e) => {
    // this.props.onReceiveCoordinates
    const cords = [e.clientX, e.clientY];
    this.props.onReceiveCoordinates(cords)
  }
  render(){
    return (
      <div>
        <button onClick={this.getCords}></button>
      </div>
    )
  }
}
