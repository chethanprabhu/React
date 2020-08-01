import React, { Component } from "react";
import Person from "./Person/Person"

class App extends Component {
    state = {
        persons: [
            {name: "Chethan", age: 24},
            {name: "Akshay", age: 24},
            {name: "Pavan", age: 24},
            {name: "Akshay", age: 24}
        ],
        whoAreWe: "Best Buddies"
    }

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