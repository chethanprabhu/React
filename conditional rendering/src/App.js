import React, { Component } from "react";
import Person from "./Person/Person";
import Button from "./Button/Button";

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
        Note: "Only Chethan's name can be changed through input button",
        showPersons: false
    }
    
    /*This getFullNameHandler can be any name given by the developer. But it's a good practice to append the word 'handler' at the end
    Inside this we use the method setState(again it's a reserved keyword). Here inside this function we basically pass the new state that
    we want to update. Remember if there are any additional states in original state, it won't be altered. Only thing is whatever u pass in 
    setState gets merged with original state. In this case the original state and setState had same person array. Hence, it just overrided
    the same object and updated it with these new values. However the 'whoAreWe' would still remain unchanged. */
    getFullNameHandler = (appendMR) => {
        this.setState(
            {
                persons: [
                    {name: `${appendMR} Chethan Prabhu`, age: 24},
                    {name: `${appendMR} Akshay Pai`, age: 24},
                    {name: `${appendMR} Pavan Pai`, age: 24},
                    {name: `${appendMR} Akshay shenoy`, age: 24}
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

    updateNameHandler = (e) => {
        this.setState(
            {
                persons: [
                    /*e.target.value will contain value entered in currently selected element i.e input field in this case */
                    {name: e.target.value, age: 24},
                    {name: "Akshay", age: 24},
                    {name: "Pavan", age: 24},
                    {name: "Akshay", age: 24}
                ]
            }
        )
    }

    showHideHandler = () => {
        // if(this.state.showPersons) {
        //     this.setState(
        //         {
        //             showPersons: false
        //         }
        //     )
        // } else {
        //     this.setState(
        //         {
        //             showPersons: true
        //         }
        //     )
        // }

        this.setState(
            {
                //if it's false it becomes true and vice versa. The equivalent code for it is above commented
                showPersons: !this.state.showPersons
            }
        )
        
    }

    render() {

        /*Remember when the state changes, entire screen is rerendered. Hence this render function will run
        First thing it does here is assign persons to null. Then it checks if this.state.showPersons is true
        If true then it assigns the persons else it will stay null. */
        let persons = null;

        if(this.state.showPersons) {
            persons = (
                <div>
                    <Person name={this.state.persons[0].name} age={this.state.persons[0].age} updateName={this.updateNameHandler}/>
                    <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                    <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
                    <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
                </div>
            )
        }
       
        return (
            <div>
                {/* Here as you can see we just write {persons}. This is well organised compared to previous approach*/}
                {persons}
                <p>{this.state.Note}</p>
                <Button onClickHandlerFunc={this.getFullNameHandler.bind(this, "Mr.")} buttonName="Get Full Name"/>
                <Button onClickHandlerFunc={this.getShortNameHandler} buttonName="Get Short Name"/>
                <Button onClickHandlerFunc={this.showHideHandler} buttonName="Show/Hide"/>
            </div>
        )
    }
}
export default App;