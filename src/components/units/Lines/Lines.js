import React from 'react';
import {StyledLines, StyledDiv} from './styles';
import Button from '../Button/Button'

function Lines({lines}) {
    const renderedLines = lines.map((line, id) => ( //include an id as a key
        <div key={id}>{line}</div>
        )
    )
    return (
        <>
            <StyledDiv>
                <Button text="Previous" />
                <Button text="Next" />
            </StyledDiv>
            <StyledLines>{renderedLines}</StyledLines>
        </>
    )
}

export default Lines;