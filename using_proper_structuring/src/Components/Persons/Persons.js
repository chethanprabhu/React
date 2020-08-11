import React from 'react'
import Person from "./Person/Person"

const Persons = (props) => {
    return (
        <div>
            {props.persons.map((el, index) => {
                return <Person 
                        name={el.name}
                        age={el.age}
                        /*key is important to uniquely identify an element. So that the render function can only render that particular
                        element and not the entire DOM.*/
                        key={el.id}
                        onClick={props.onClick.bind(props, index)}
                        /*so the onChange on person return as event. Earlier our updateNameHandler was getting this automatically
                        But since we have this arrow function here. Hence the onChange returns the event object to this function and
                        not the updateNameHandler function. So we manually need to pass this event to our updateNameHandler.*/
                        onEdit={(e) => {props.onEdit(e, el.id)}}
                    />
            })}
        </div>
    )
}

export default Persons
