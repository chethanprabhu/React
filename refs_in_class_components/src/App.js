import React, { Component } from "react";

class App extends Component {

    constructor() {
        super();
        this.myRef = React.createRef();
    }

    componentDidMount() {
        this.myRef.current.click();
    }

    clickHandler = () => {
        console.log("button was clicked");
    }

    render() {
        return (
            <button ref={this.myRef} onClick={this.clickHandler}>HIT ME</button>
        )
    }
}

export default App;

// const App = () => {

//     const myRef = useRef();

//     useEffect(() => {
//         myRef.current.click();
//     }, [])
//     const clickHandler = () => {
//         console.log("button was clicked");
//     }

//     return (
//         <button ref={myRef} onClick={clickHandler}>HIT ME</button>
//     )
// }
