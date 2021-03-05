import React from 'react';
import {StyledLines, StyledDiv, Button} from './styles';

function Lines({lines}) {
    const renderedLines = lines.map((line, id) => ( //include an id as a key
        <div key={id}>{line}</div>
        )
    )
    return (
        <>
            <StyledDiv>
                <Button>Previous</Button>
                <Button>Next</Button>
            </StyledDiv>
            <StyledLines>{renderedLines}</StyledLines>
        </>
    )
}

export default Lines;