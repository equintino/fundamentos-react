import React from 'react'

export default (props) =>
    <div>
        <h2>{props.titulo}</h2>
        <div>
            {props.children}
        </div>
    </div>
