// Hint: If you having trouble with this feature, remember event pooling in React. By the time the setTimeout fires, the event object will have already been returned to the pool. So how can we fix that?

import React from 'react'

class DelayedButton extends React.Component {

    handleClick = (e) => {
        e.persist()
        let arr = [e.clientX, e.clientY]
        window.setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
    }

    render() {
        return <button onClick={this.handleClick}>Delay Test</button>
    }

}

export default DelayedButton
