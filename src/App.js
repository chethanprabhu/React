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
        /* 
        return(
            <div className="backColor">
                <h1>Hello world</h1>
            </div>
        )
        */
       /* The above JSX is exactly same as below line. Since the below line would be horrible for programmers to write. React developers decided 
       to give it a HTML like syntax */
       return React.createElement("div", {className: "backColor"},React.createElement("h1", null , "Hello world"));
    }
}
 

export default App;