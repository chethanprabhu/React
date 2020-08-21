import React from 'react'
import PropTypes from "prop-types";

const Person = (props) => {
    return (
        <p>{`Hi! My name is ${props.name} and I am ${props.age} old. I am working as a ${props.designation}
            in ${props.companyName}.`}</p>
    )
}

Person.propTypes  = {
    name: PropTypes.string,
    age: PropTypes.number,
    companyName: PropTypes.string,
    designation: PropTypes.string
}

export default Person
