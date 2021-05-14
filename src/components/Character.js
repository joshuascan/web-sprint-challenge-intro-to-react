// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.div`
    width: 70%;
    text-align: left;
    /* display: flex;
    justify-content: left;
    align-items: center; */
    background-color: rgba(0,0,0,0.5);
    padding: 2%;
    margin: 4%;
    box-shadow: 0px 0px 25px purple;

    h2 {
        font-size: 28px;
        color: darkred;
        text-shadow: 0px 0px 15px lightgray;
    }
`

export default function Character({ character }) {
    return (
        <StyledCharacter>
        {/* <div> */}
            <h2>{character.name}</h2>
        {/* </div> */}
        </StyledCharacter>
    );
};