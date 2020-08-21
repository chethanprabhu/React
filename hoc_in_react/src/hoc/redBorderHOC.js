import React from "react"
import classes from "../style.module.css"

const redBorderHOC = (props) => {
    return (
        <div className={classes.app}>
            {props.children}
        </div>
    )
}

export default redBorderHOC

