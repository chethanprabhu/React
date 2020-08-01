import React, { useState } from "react";
import Person from "./Person/Person"

const App = () => {

    const [personState, setPersonState] = useState({
        persons: [
            {name: "Chethan", age: 24},
            {name: "Akshay", age: 24},
            {name: "Pavan", age: 24},
            {name: "Akshay", age: 24}
        ]
    })

    const getFullNameHandler = () => {
        setPersonState(
            {
                persons: [
                    {name: "Chethan Prabhu", age: 24},
                    {name: "Akshay Pai", age: 24},
                    {name: "Pavan Pai", age: 24},
                    {name: "Akshay Shenoy", age: 24}
                ]
            }
        )
    }

    const getShortNameHandler = () => {
        setPersonState(
            {
                persons: [
                    {name: "Chethan", age: 24},
                    {name: "Akshay", age: 24},
                    {name: "Pavan", age: 24},
                    {name: "Akshay", age: 24}
                ]
            }
        )
    }

    return (
        <div>
            <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
            <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
            <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
            <Person name={personState.persons[3].name} age={personState.persons[3].age}/>
            <button onClick={getFullNameHandler}>Get Full Name</button>
            <button onClick={getShortNameHandler}>Get Short Name</button>
        </div>
    )
}

export default App;



    