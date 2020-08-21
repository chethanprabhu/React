import React from 'react'

const person = (props) => {
    return (
        <p>{`Hi! My name is ${props.myProp.name} and I am ${props.myProp.age} old. I am working as a ${props.myProp.designation}
            in ${props.myProp.companyName}.`}</p>
    )
}

export default person
