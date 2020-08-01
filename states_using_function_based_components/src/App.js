import React, { useState } from "react";
import Person from "./Person/Person"

const App = () => {
    /*useState is a React HOOK. This useState basically takes what we pass as state. Again it can be anything like a number, a string etc
    This useState returns an array of 2. First will be the entire state itself. 2nd is the method that allows us to update the state. We
    can collect these like below using destructuring in JS */
    const [personState, setPersonState] = useState({
        persons: [
            {name: "Chethan", age: 24},
            {name: "Akshay", age: 24},
            {name: "Pavan", age: 24},
            {name: "Akshay", age: 24}
        ]
    })

     /*This getFullNameHandler can be any name given by the developer. But it's a good practice to append the word 'handler' at the end
    Inside this we use the method setState(again it's a reserved keyword). Here inside this function we basically pass the new state that
    we want to update. But unlike class based states here we have our method that we got while destructing. Hence we use that method. But the 
    main difference between Class based and function based states are that in class based as you know if that state has additional states then 
    it would remain unchanged and this SetState would merge it with previous state. That is not the case in function based states. It won't merge
    with original but it replaces the original state. So we need to manually set the remaining states. However there is a better way of doing
    this. In class based state we could create only 1 state. But in function based state we can create multiple states for different scenarios as
    we need. Hence we add only that states that the particular state requires. If we need any other state then we dont add it to that state but 
    we create a entire seperate state for that using the useState HOOK. Remember this is not possible in class based states because in class
    based states we can have only 1 state for entire page */
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


    