import React, { useState } from 'react'
import styled from 'styled-components'

const StyledDetails = styled.div`

button {
    background-color: darkred;
    color: whitesmoke;
    padding: 1%;
    border-radius: 12px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
}

div {
    margin-top: 1%;
    text-align: left;
}
`

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-around;
    color: white;
    font-size: 20px;
`

export default function Details({ character }) {
    const [toggle, setToggle] = useState(false)

    return (
        <StyledDetails>
            <button onClick={() => setToggle(!toggle)}>More details</button>
            {toggle && (
                <>
                <StyledContainer>
                    <div>
                        <p>Born: {character.birth_year}</p>
                        <p>Gender: {character.gender}</p>
                        <p>Hair Color: {character.hair_color}</p>
                        <p>Eye Color: {character.eye_color}</p>
                        <p>Height: {character.height}cm</p>
                    </div>
                    <div>
                       <p>Appeared in:</p>
                        <ul>
                            {character.films.map((film) => <li key={film}>{film}</li>)}
                        </ul>
                    </div>
                </StyledContainer>
                </>
            )}
        </StyledDetails>
    )
}