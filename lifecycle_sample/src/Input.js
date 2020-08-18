import React, { PureComponent } from "react";

class Input extends PureComponent {

    //   componentDidMount = (nextProp, nextState) => {
    //     console.log("Input - component did mount");
    //     console.log(nextProp);
    //     console.log(nextState);
    //   }
    
    //   shouldComponentUpdate = (nextProp, nextState) => {
    //     if(nextProp.state.name === this.props.state.name) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    //   }

      componentDidUpdate = (prevProp, PrevState) => {
        console.log("Input - component did update");
        console.log(prevProp);
        console.log(PrevState);
      }

    render() {
        return (
            <React.Fragment>
                <h2>{this.props.state}</h2>
                <input onChange={this.props.onEdit}></input>
            </React.Fragment>
        )
    }
}

export default Input;