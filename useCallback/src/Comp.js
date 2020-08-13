import React from 'react'

function Comp(props) {
    React.useEffect(() => {
        props.handleChild();
        console.log("child component use Effect is running")
    }, [props.handleChild])
    return (
        <div>
            
        </div>
    )
}

export default Comp
