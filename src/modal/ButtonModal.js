import React from 'react'

const ButtonModal = ({ setModal }) => {
    return (
        <div>
            <button onClick={() => setModal(true)}>Abrir Modal</button>
        </div>
    )
}

export default ButtonModal
