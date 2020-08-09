import React from 'react'
import Radium from "radium";

const Button = (props) => {

    const button = {
        //This code cannot be written in App.js. For more details check 3rd point in readme.md under Main folder "React"
        '@media (min-width: 500px)': {
            color: 'blue'
        }
    }

    return (   
            <button style={button} onClick={props.onClickHandlerFunc}>{props.buttonName}</button>        
    )
}

export default Radium(Button)
