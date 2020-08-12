import React from 'react';
import Child2 from "./Child2";

const Child1 = (props) => {
    return (
        <div>
            <h1>This Child 1</h1>
            <Child2 name={props.name}/>
        </div>
    )
}

export default Child1
