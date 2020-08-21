import React, { Component } from "react"
import Person from "./person";

class App extends Component {

    state = {
        name: "Chethan",
        age: 23,
        companyName: "Verisk Financial Fintellix",
        designation: "Full stack Web developer"
    }

    render() {
        return (
            <React.Fragment>
                <Person myProp={this.state}/>
            </React.Fragment>
        )
    }
}

export default App;