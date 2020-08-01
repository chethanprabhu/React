import React from 'react'

const Person = (props) => {
    return (
        <div>
            <p>Hello! My name is {props.name} and I'm {props.age} years old. {props.children}</p> 
        </div>
        /*Here props.children contains that info which we did not pass as a attribute to the component but just as info between tags
        Now this is used when we want to display something additional only to one particular occurence of a component and not others */
    )
}

export default Person
