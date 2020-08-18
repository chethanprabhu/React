import React, {useState} from 'react'
import Input from "./Input";
import Button from "./Button";

const App = () => {

  const [state, setState] = useState({name: "", buttonName: "1"})

  const onEditHandler = (event) => {
    setState({
      ...state,
      name: event.target.value
    })
  }

  const onPressHandler = () => {
    setState({
      ...state,
      buttonName: state.buttonName === "1" ? "2" : "1"
    })
  }

  return (
    <React.Fragment>
        <h1>{state.name}</h1>
        <Input state={state.name} onEdit={(event) => onEditHandler(event)}/>
        <Button state2={state.buttonName} onPress={onPressHandler}/>
      </React.Fragment>
  )
}

export default App
