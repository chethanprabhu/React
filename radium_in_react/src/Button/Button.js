import React from 'react'
import Radium from "radium";

const Button = (props) => {
    return (   
            <button onClick={props.onClickHandlerFunc}>{props.buttonName}</button>        
    )
}

export default Radium(Button)
