import React, { PureComponent, Component } from "react";

class Input extends Component {

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
      shouldComponentUpdate(nextProp) {
        console.log(nextProp);
        console.log(this.props);
        console.log(nextProp === this.props);
        return true
      }

    render() {
        return (
            <React.Fragment>
                {console.log("will this run? hope not")}
                <h2>{this.props.state}</h2>
                <input onChange={this.props.onEdit}></input>
            </React.Fragment>
        )
    }
}

export default Input;