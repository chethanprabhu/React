import React, { Component } from "react";
import Input from "./Input";
import Button from "./Button"

class App extends Component {

  state = {
    name: "",
    buttonName: "1"
  }

  // componentDidMount = (nextProp, nextState) => {
  //   console.log("App - component did mount");
  //   console.log(nextProp);
  //   console.log(nextState);
  // }

  // componentDidUpdate = (prevProp, PrevState) => {
  //   console.log("App - component did update");
  //   console.log(prevProp);
  //   console.log(PrevState);
  // }

  onEditHandler = (event) => {
    this.setState({
      ...this.state,
      name: event.target.value
    })
  }

  onPressHandler = () => {
    this.setState({
      ...this.state,
      buttonName: this.state.buttonName === "1" ? "2" : "1"
    })
  }

  render() {

    return (
      <React.Fragment>

        <h1>{this.state.name}</h1>
        <Input state={this.state.name} onEdit={(event) => this.onEditHandler(event)}/>
        <Button state2={this.state.buttonName} onPress={this.onPressHandler}/>
      </React.Fragment>
    )
      
  }

}

export default App;