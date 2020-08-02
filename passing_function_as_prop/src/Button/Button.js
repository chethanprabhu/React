import React from 'react'

const Button = (props) => {
    return (   
        <button onClick={props.onClickHandlerFunc}>{props.buttonName}</button>    
    )
}

export default Button
