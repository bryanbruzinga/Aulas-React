//Faça um fetch (Post) para a API abaixo
//Para a criação ser aceita é necessário enviar dados de:
//nome, email, senha, cep, rua, numero, bairro, cidade e estado
/*
fetch('https://ranekapi.origamid.dev/json/api/usuario', {
    method: 'POST,
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(form)
})
*/
//form é o objeto com os dados do formulário
//Mostre uma mensagem na tela, caso a resposta da API seja positiva

import React from 'react'

const formFields = [
    {
        id: 'nome',
        label: 'Nome',
        type: 'text',
    },
    {
        id: 'email',
        label: 'E-mail',
        type: 'email',
    },
    {
        id: 'senha',
        label: 'Senha',
        type: 'password',
    },
    {
        id: 'cep',
        label: 'CEP',
        type: 'text',
    },
    {
        id: 'rua',
        label: 'Rua',
        type: 'text',
    },
    {
        id: 'numero',
        label: 'Número',
        type: 'number',
    },
    {
        id: 'bairro',
        label: 'Bairro',
        type: 'text',
    },
    {
        id: 'cidade',
        label: 'Cidade',
        type: 'text',
    },
    {
        id: 'estado',
        label: 'Estado',
        type: 'text',
    }
]

const App = () => {

    //Isso foi uma maneira de automatizar a passagem dos campos do formFields
    const [form, setForm] = React.useState(formFields.reduce((acc, field) => {
        return {
            ...acc,
            [field.id]: ''
        };
    }, {}));
    const [response, setResponse] = React.useState(null)

    function handleChange({target}) {
        const { id, value } = target;
        setForm({...form, [id]: value})
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch('https://ranekapi.origamid.dev/json/api/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        }).then( response => {
            setResponse(response)
        })
    }

    return (
        //Maneira de automatizar a listagem de inputs
        <form onSubmit={handleSubmit}>
            {formFields.map(({id, label, type}) => <div key={id}>
                <label htmlFor={id}>{label}</label>
                <input type={type} id={id} value={form[id]} onChange={handleChange}></input>
            </div>)}
            {response && response.ok && <p>Formulário Enviado</p>}
            <button>Enviar</button>
        </form>
    )
}

export default App
