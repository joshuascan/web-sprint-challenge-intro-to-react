import React, { useState } from 'react'
import styled from 'styled-components'

export default function Details({ character }) {
    const [toggle, setToggle] = useState(false)

    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>More details</button>
            {toggle && (
                <>
                <p>Born: {character.birth_year}</p>
                <p>Appeared in:</p>
                <ul>
                    {character.films.map((film) => <li key={film}>{film}</li>)}
                </ul>
                </>
            )}
        </div>
    )
}