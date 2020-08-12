import React from 'react';
import {NameComponent} from '../App'

const Child2 = (props) => {
    return (
        <div>
            <NameComponent.Consumer>
                {(name) => {
                    return (
                        <h1>This Child 2: {name} </h1>
                    )
                }}
            </NameComponent.Consumer>
           
        </div>
    )
}

export default Child2
