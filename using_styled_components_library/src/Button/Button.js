import React from 'react'
import Styled from 'styled-components';

const Button = (props) => {

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
