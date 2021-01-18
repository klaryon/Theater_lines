import { Component } from "react"
import React from 'react';

function Lines({lines}) {
    const renderedLines = lines.map(line => (
        <div>{line}</div>
        )
    )
    return (
        <div>{renderedLines}</div>
    )
}

export default Lines;