import React from 'react'

export default (props) => {
    function action() {
        var vlr = Math.random();
        return props.onClick(vlr, 'Gerado');
    };

    return (
        <div>
            <button onClick={action}>Gerar Número</button>
        </div>
    );
};
