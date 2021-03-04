import React from 'react';
import StyledLines from './styles';

function Lines({lines}) {
    const renderedLines = lines.map((line, id) => ( //include an id as a key
        <div key={id}>{line}</div>
        )
    )
    return (
        <StyledLines>{renderedLines}</StyledLines>
    )
}

export default Lines;