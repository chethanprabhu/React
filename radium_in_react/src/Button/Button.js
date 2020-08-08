import React from 'react'
import Radium from "radium";

const Button = (props) => {

    const button = {
        '@media (min-width: 500px)': {
            color: 'blue'
        }
    }

    return (   
            <button style={button} onClick={props.onClickHandlerFunc}>{props.buttonName}</button>        
    )
}

export default Radium(Button)
