// Write your Character component here
import React from 'react'
import Styled from 'styled-components'

export default function Character({ character }) {
    return (
        <div>
        <h2>{character.name}</h2>
        </div>
    );
};