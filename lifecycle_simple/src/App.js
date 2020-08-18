import React, { Component } from 'react'
import Input from ".//Components/Input"

class App extends Component {

    state = {
        name: ""
    }

    onChangeHandler = (event) => {
        this.setState({
            ...this.state,
            name: event.target.value
        })
    }

    shouldComponentUpdate = (nextProp, nextState) => {
        console.log(this.props);
        console.log(this.state);
        console.log(nextProp);
        console.log(nextState);
        return true;
    }

    render() {
        return (
            <React.Fragment>
                <h1>{this.state.name}</h1>
                <Input onChange={(event) => this.onChangeHandler(event)}></Input>
            </React.Fragment>
        )
    }
}

export default App
