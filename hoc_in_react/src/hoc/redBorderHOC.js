import React from "react"

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

