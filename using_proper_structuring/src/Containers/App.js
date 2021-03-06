import React, { Component } from "react";
import Persons from  "../Components/Persons/Persons"
import CockPit from "../Components/CockPit/CockPit"

class App extends Component {

    /*state is a reserved keyword. We can assign anything to a state. In this case it's an array of objects. But it can be anything say,
    a string, a number or a boolean, a function, etc etc anything */
    state = {
        persons: [
            {id:11231, name: "Chethan", age: 24},
            {id:21241, name: "Akshay", age: 24},
            {id:11253, name: "Pavan", age: 24},
            {id:51414, name: "Akshay", age: 24}
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

    updateNameHandler = (e, key) => {
        const personIndex = this.state.persons.findIndex((el) => {
            return el.id === key;
        })

        //since objects are reference based. We use spread operator to get fresh location in memory
        const person = {...this.state.persons[personIndex]};

        //changing name of that particular key only
        person.name = e.target.value;

        const persons = [...this.state.persons];
        //updating the index of the person state with the new person at same index but with updated values
        persons[personIndex] = person;
        
        this.setState({persons: persons})
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

    deleteOnClickHandler = (index) => {
        console.log(this);
        /*this.state.person returns an array. Now since arrays are reference types. This will point to exact same location as original state
        Hence, we use spread operator to give a fresh location*/
        const persons = [...this.state.persons]
        //splice removes the specified no of elements(1) from an array from the specified index(index)
        persons.splice(index,1);
        this.setState({persons: persons});
    }

    render() {
        /*Remember when the state changes, entire screen is rerendered. Hence this render function will run
        First thing it does here is assign persons to null. Then it checks if this.state.showPersons is true
        If true then it assigns the persons else it will stay null. */
        let persons = null;

        if(this.state.showPersons) {
            persons = (
                <Persons persons={this.state.persons} onClick={this.deleteOnClickHandler} onEdit={this.updateNameHandler}/>
            )
            
        }
        
        return (
                <div>
                    {/* Here as you can see we just write {persons}. This is well organised compared to previous approach*/}
                    {persons}
                    <CockPit fullName={this.getFullNameHandler} shortName={this.getShortNameHandler} showHide={this.showHideHandler} />
                </div>
        );
    }
}
export default App;