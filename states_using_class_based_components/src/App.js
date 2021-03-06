import React, { Component } from "react";
import Person from "./Person/Person"

class App extends Component {

    /*state is a reserved keyword. We can assign anything to a state. In this case it's an array of objects. But it can be anything say,
    a string, a number or a boolean, a function, etc etc anything */
    state = {
        persons: [
            {name: "Chethan", age: 24},
            {name: "Akshay", age: 24},
            {name: "Pavan", age: 24},
            {name: "Akshay", age: 24}
        ],
        whoAreWe: "Best Buddies"
    }
    
    /*This getFullNameHandler can be any name given by the developer. But it's a good practice to append the word 'handler' at the end
    Inside this we use the method setState(again it's a reserved keyword). Here inside this function we basically pass the new state that
    we want to update. Remember if there are any additional states in original state, it won't be altered. Only thing is whatever u pass in 
    setState gets merged with original state. In this case the original state and setState had same person array. Hence, it just overrided
    the same object and updated it with these new values. However the 'whoAreWe' would still remain unchanged. */
    getFullNameHandler = () => {
        this.setState(
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

    getShortNameHandler = () => {
        this.setState(
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

    render() {
        return (
            <div>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
                <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
                <p>{this.state.whoAreWe}</p>
                <button onClick={this.getFullNameHandler}>Get Full Name</button>
                <button onClick={this.getShortNameHandler}>Get Short Name</button>
            </div>
        )
    }
}

export default App;