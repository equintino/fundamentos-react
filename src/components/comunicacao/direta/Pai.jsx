import React from 'react'
import Filho from './Filho'

export default props =>
    <div>
        {/*<Filho sobreNome={props.sobreNome}>{props.children}</Filho>*/}
        <Filho {...props}>{props.children}</Filho>
    </div>
