import React from 'react';

function Lines({lines}) {
    const renderedLines = lines.map((line, id) => ( //include an id as a key
        <div key={id}>{line}</div>
        )
    )
    return (
        <div>{renderedLines}</div>
    )
}

export default Lines;