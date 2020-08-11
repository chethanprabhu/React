import React from 'react'
import Button from "../Button/Button"
import classes from "../../Containers/App.module.css";

const CockPit = (props) => {
    let classAllowed = [classes.para];
        
    if(props.length === 1) {
        classAllowed.push(classes.red);
    }

    return (
        <div>
            <p className={classAllowed.join(" ")}>SOME RANDOM TEXT</p>
            <Button onClickHandlerFunc={props.fullName.bind(props, "Mr.")} buttonName="Get Full Name"/>
            <Button onClickHandlerFunc={props.shortName} buttonName="Get Short Name"/>
            <Button onClickHandlerFunc={props.showHide} buttonName="Show/Hide"/>
        </div>
    )
}

export default CockPit
