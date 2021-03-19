import React from 'react'
import styles from './Contato.module.css';
import foto from '../contato.jpg'
import Head from './Head.js'

const Contato = () => {
    return (
        <section className={styles.contato + " animeLeft"}>
            <Head title="Ranek | Contato" description="Entre em contato" />
            <img src={foto} alt="contato" />
            <div>
                <h1>Entre em contato</h1>
                <ul className={styles.dados}>
                    <li>bryanbruzinga@1990.com</li>
                    <li>99999-9999</li>
                    <li>Rua algo perdido, 73</li>
                </ul>
            </div>
            
        </section>
    )
}

export default Contato
