import React, { Component} from 'react'
import Input from "./Input";
import Button from "./Button";

class App extends Component {
  state= {
    name: "",
    button: {
      buttonName: "1"
    }
  }

  onEditHandler = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  onPressHandler = () => {
    this.setState({
      button: this.state.button.buttonName === "1" ? {
        buttonName: "2"
      } : {
        buttonName: "1"
      }
    })
  }

  render() {
    return (
      <React.Fragment>
          <h1>{this.state.name}</h1>
          <Input state={this.state.name} onEdit={(event) => this.onEditHandler(event)}/>
          <Button state2={this.state.button.buttonName} onPress={this.onPressHandler}/>
        </React.Fragment>
    )
  }
}

export default App
