//Os links abaixo puxam dados de um produto em formato JSON
//https://ranekapi.origamid.dev/json/api/produto/tablet smartphone notebook
//Crie uma interface com 3 botões, um para cada produto
//Ao clicar no botão, faça um fetch a a pi e mostre os dados do produto
//Mostre apenas um produto por vez
//Mostre a mensagem carregando... enquanto o fetch é realizado

import React from 'react'
import Produto from './Produto'

const App = () => {

    const [dados, setDados] = React.useState(null);
    const [carregando, setCarregando] = React.useState(null)

    async function handleClick(event) {
        setCarregando(true);
        const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);
        const json = await response.json()
        setDados(json);
        setCarregando(false);
    }

    return (
        <div>
            <button onClick={handleClick}>Tablet</button>
            <button onClick={handleClick}>Smartphone</button>
            <button onClick={handleClick}>Notebook</button>
            {carregando && <p>Carregando...</p>}
            {carregando && dados && <Produto dados={dados}/>}
        </div>
    )
}

export default App
