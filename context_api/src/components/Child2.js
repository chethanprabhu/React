import React, { useContext } from 'react';
import {NameComponent, PasswordComponent} from '../App'



const Child2 = (props) => {
    const name = useContext(NameComponent);
    const password = useContext(PasswordComponent);
    console.log(name);

    return (
        <div>
            <h1>{name.name}</h1>
            <h1>{name.age}</h1>
            <h1>{password}</h1>
        </div>
    )
}

export default Child2
