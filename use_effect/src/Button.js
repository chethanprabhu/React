import React, { PureComponent } from 'react'

class Button extends PureComponent {
    render() {
        console.log("let's see")
        return (
            <button onClick={this.props.onPress}>{this.props.state2}</button>
        )
    }
}

export default Button;
