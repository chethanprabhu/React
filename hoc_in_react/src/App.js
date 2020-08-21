import React, { Component } from "react"
import Button from "./Button";
import Hoc from "./hoc/redBorderHOC"
import classes from "./style.module.css"

class App extends Component {

    state = {
        buttonName: "Hit me"
    }

    render() {
        return (
            <React.Fragment>
                <Button buttonName={this.state.buttonName}/>
                <Button buttonName={this.state.buttonName}/>
            </React.Fragment>
        )
    }
}

export default Hoc(App, classes.app);