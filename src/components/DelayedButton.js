import React from 'react';

export default class DelayedButton extends React.Component {
    
    render(){
        return (
            <div>
                <button onClick={(e) => {
                    e.persist();
                    setTimeout(() => { this.props.onDelayedClick(e) }, this.props.delay);
                }}>
                </button>
            </div>
        )
    }
        
}