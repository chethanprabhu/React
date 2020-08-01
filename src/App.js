import React, { Component } from "react";
/*
The below class componenet can also be written in function component like this
const App = () => {
    return(
        <div>
            <h1>Hello world</h1>
        </div>
    )
}
*/
class App extends Component {
    render() {
        return(
            <div className="backColor">
                <h1>Hello world</h1>
            </div>
        )
    }
}
 

export default App;