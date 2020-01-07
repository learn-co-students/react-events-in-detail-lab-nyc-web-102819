import React from 'react';

class CoordinatesButton extends React.Component {
    click = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }
    
    render () {
      return <button onClick={this.click}></button>
    }
  }

  export default CoordinatesButton;
