import React, { Component } from "react";
import Person from "./Person/Person"

class App extends Component {
    render() {
        return(
            <div>
                <Person name="chethan Prabhu" age="24"/>
                <Person name="Akshay Pai" age="24">I'm the the person of contact</Person>
                <Person name="Akshsy Shenoy" age="24"/>
                <Person name="Pavan Pai" age="24"/>
            </div>
        )
    }
}

export default App;