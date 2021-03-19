//Quando o usuário clicar em um dos botões, faça um fetch do produto
//https://ranekapi.origamid.dev/json/api/produto/ smartphone notebook
//Mostre o nome e preço na tela( separe essa informação em um componente Produto.js)
//Define o produto clicado como uma preferência do usuário no localStorage
//Quando o usuário entrar no site, se existe um produto no localStorage, puxe-o

import React from 'react'
import Produto from './Produto'

const App = () => {

    const [produto, setProduto] = React.useState(null)

    function handleClick({target}) {
        setProduto(target.innerText);
    }

    React.useEffect(() => {
        const produtoLocal = window.localStorage.getItem('produto')
        if(produtoLocal !== null) setProduto(produtoLocal)
    }, [])

    React.useEffect(() => {
        if(produto !== null)
        window.localStorage.setItem('produto', produto)
    }, [produto]);

    

    return (
        <div>
            <h1>Prefência: {produto}</h1>
            <button onClick={handleClick}>Notebook</button>
            <button onClick={handleClick}>Smartphone</button>
            <Produto produto={produto}/>
        </div>
    )
}

export default App
