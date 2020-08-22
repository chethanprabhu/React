import React, { Component } from 'react';
import {NameComponent} from "../context"



// const Child2 = (props) => {
//     const name = useContext(NameComponent);
//     const password = useContext(PasswordComponent);
//     console.log(name);

//     return (
//         <div>
//             <h1>{name.name}</h1>
//             <h1>{name.age}</h1>
//             <h1>{password}</h1>
//         </div>
//     )
// }

//#####################################################################

// class Child2 extends Component {
//     render() {
//         return (
//                 <NameComponent.Consumer>
//                     {(context) => (
//                         <React.Fragment>
//                             <h1>{context.name}</h1>
//                             <h1>{context.age}</h1>
//                         </React.Fragment>
//                     )}
//                 </NameComponent.Consumer>
//         )
//     }
// }

//#####################################################################


class Child2 extends Component {


    render() {
        return (
                <React.Fragment>
                    <h1>{this.context.name}</h1>
                    <h1>{this.context.age}</h1>
                </React.Fragment>
        )
    }
}

export default Child2
