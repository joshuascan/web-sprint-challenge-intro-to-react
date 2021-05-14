// Write your Character component here
import React from 'react'
import styled from 'styled-components'
import Details from './Details'

const StyledCharacter = styled.div`
    width: 50%;
    text-align: center;
    background-color: rgba(0,0,0,0.5);
    padding: 1%;
    margin: 2%;
    box-shadow: 0px 0px 25px indigo;

    transition: all 0.5s ease-in-out;
    &:hover {
        transition: all 0.5s ease-in-out;
        background-color: rgba(0,0,0,0.75);
    }

    h2 {
        font-size: 35px;
        color: goldenrod;
        text-shadow: 0px 0px 15px lightgray;
    }
`

export default function Character({ character }) {
    
    return (
        <StyledCharacter>
            <h2>{character.name}</h2>
            <div>
                <Details character={character}/>
            </div>
        </StyledCharacter>
    );
};