import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

export default props => (

    <div>
        <h1>Familia</h1>
        { childrenWithProps(props.children, props) }
    </div>    
)
/*{ React.children.map(props.children,
            child => React.cloneElement(child, {...props})) }
A versão a grosso modo de resolver o problema       */ 

//React.cloneElement(child, {...props}
// a função cloneElement tem dois parametros
//1. Ele passa o elemento que a gente quer clonar e
//2. depois qual a propriedade que vc quer que seja passado para o filho
// nesse caso, é a props do componente familia. Qualquer propriedade do componente, será passado para o filho
