import React, { Component } from 'react';
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";

class app extends Component {

    state = {
        inputValue: "",
        state: "Uninitialized",
        showHide: false,
        char: 0,
        buttonText: "show"
    }

    onEditHandler = (event) => {
        this.setState({
            ...this.state,
            inputValue: event.target.value,
            char: this.state.state === "Active" ? event.target.value.length : 0
        })
    }

    onClickHandler = () => {
        this.setState({
            ...this.state,
            showHide: !this.state.showHide,
            state: this.state.state === "Active" ? "Inactive" : "Active",
            char: this.state.state === "Inactive" ? 0 : 0,
            buttonText: (this.state.state === "Uninitialized") || (this.state.state === "Inactive") ? "Hide": "Show"
        })
    }
    
    render() {
        return (
            <React.Fragment>
                <h1>{this.state.state} , No of characters:{this.state.char}</h1>
                {this.state.showHide ? <Input onEdit={(event) => this.onEditHandler(event)} /> : null }
                <br/>
                <br/>
                <Button state={this.state} buttonText={this.state.buttonText} onClick={this.onClickHandler}/>
            </React.Fragment>
        )
    }
}

export default app;
