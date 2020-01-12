import React from 'react'

class CoordinatesButton extends React.Component {

    handleClick = (e) => {
        let arr = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(arr)
    }

    render() {
        return <button onClick={this.handleClick}>Test</button>
    }

}

export default CoordinatesButton
