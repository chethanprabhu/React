import React from 'react'
import Styled from 'styled-components';

const Button = (props) => {

    /*For info on styled components please refer app.js or readme.md of Main react folder */
    const StyledButton = Styled.button`
                        &:hover {
                            color: blue
                        }
            `

    return (   
            <StyledButton onClick={props.onClickHandlerFunc}>
                {props.buttonName}
            </StyledButton>       
    )
}

export default Button;
