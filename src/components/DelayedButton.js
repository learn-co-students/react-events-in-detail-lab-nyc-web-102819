// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

    clickHelper = (event) => {
        event.persist()
        console.log(this.props)
        // debugger
        let e = this.props.onDelayedClick
        let delay = this.props.delay
        debugger
        return setTimeout(function() {e(event)}, delay)
    }

    render() {
        return (
            <button onClick={this.clickHelper}></button>
        )
    }
}

export default DelayedButton