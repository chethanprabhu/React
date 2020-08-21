import React, { memo, useEffect } from "react";

const Input = (props) => {

  useEffect(() => {
    console.log("runs everytime")
  })

  return (
    <React.Fragment>
        <h2>{props.state}</h2>
        <input onChange={props.onEdit}></input>
    </React.Fragment>
  )
}


export default memo(Input);