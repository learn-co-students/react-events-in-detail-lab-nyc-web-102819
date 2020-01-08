// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

    clickHelper = (e) => {
        let ar = []
        let x = e.clientX
        let y = e.clientY
        ar.push(x)
        ar.push(y)
        this.props.onReceiveCoordinates(ar)
    }

    render() {
        return (
            <button onClick={this.clickHelper}></button>
            // this.onRecieveCoordinates()
        )
    }
}

export default CoordinatesButton