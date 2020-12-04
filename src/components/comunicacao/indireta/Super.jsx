import React, { useState } from 'react'
import Sub from './Sub'

export default props => {
    const [text, setText] = useState("Valor")
    const [num, setNum] = useState(0)

    function onClickButton(valorGerado, text) {
        setNum(valorGerado);
        setText(text);
    }

    return (
        <div>
            <h2>{text}: {num}</h2>
            <Sub onClick={onClickButton}></Sub>
        </div>
    )
}