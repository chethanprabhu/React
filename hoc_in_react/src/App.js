import React, { Component } from "react"
import Button from "./Button";
import classes from "./style.module.css"

class App extends Component {

    state = {
        buttonName: "Hit me"
    }

    render() {
        return (
            <div className={classes.app}>
                <Button buttonName={this.state.buttonName}/>
                <Button buttonName={this.state.buttonName}/>
            </div>
        )
    }
}

export default App;