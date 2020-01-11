import React from 'react';

export default class DelayedButton extends React.Component {

    onDelayedClick = (e) => {
        e.persist();
        window.setTimeout(() => {
            this.props.onDelayedClick(e)
        }, this.props.delay
        )
    }

    render(){
        return (
            <button
                onClick={this.onDelayedClick}
            >
                Delay
            </button>
        )
    }

}