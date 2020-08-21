import React from "react"

/*This is regular js function which returns a react component */
const redBorderHOC = (WrapperComponent, nameOfClass) => {
    return (
        () => {
            return (
                <div className={nameOfClass}>
                    <WrapperComponent />
                </div>
            )
        }
    )
}

export default redBorderHOC

