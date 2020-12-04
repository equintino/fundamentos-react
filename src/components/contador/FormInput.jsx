import './Contador.css'
import React from 'react'

export default props =>
    <div>
        <label>Passo:</label>
        <input className="Contador" type='number' value={props.passo} onChange={props.setPasso}>
        </input>
    </div>