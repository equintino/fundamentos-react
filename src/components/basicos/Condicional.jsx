import React from 'react'

export default props => {
    function imparPar() {
        return (
            props.number % 2 === 0 ?
                'Par': 'Ímpar'
        )
    }

    return (
        <div>
            <h2>O número {props.number} é:</h2>
            <span>{imparPar()}</span>
        </div>
    )
}