import React from "react";

const Person = (props) => {
    return (
            <div>
                <p onClick={props.onClick}>My name is {props.name} and I am {props.age} years old.</p>
                {/* onChange runs whenever we change any value in that input */}
                <input type="text" onChange={props.onEdit} value={props.name}/>
            </div>
    )
}

export default Person;