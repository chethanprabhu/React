import React from "react";

const Person = (props) => {
    console.log(props);
    return (
        <div>
            <p>My name is {props.name} and I am {props.age} years old.</p>
            <input type="text" onChange={props.updateName} value={props.name}/>
        </div>
    )
}

export default Person;