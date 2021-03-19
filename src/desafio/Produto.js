import React from 'react'

const Produto = ({produto}) => {
    return (
        <div style={{border: "1px solid", margin: '1rem 0', padding: '1rem'}}>
            <p>{produto.nome}</p>
            <ul>
                {produto.propriedades.map(propriedade => <li>{propriedade}</li>)}
            </ul>
        </div>
    )
}

export default Produto
