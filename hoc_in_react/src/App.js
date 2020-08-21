import React, { Component } from "react"
import Button from "./Button";
import Hoc from "./hoc/redBorderHOC"

class App extends Component {

    state = {
        buttonName: "Hit me"
    }

    render() {
        return (
            <Hoc>
                <Button buttonName={this.state.buttonName}/>
                <Button buttonName={this.state.buttonName}/>
            </Hoc>
        )
    }
}

export default App;