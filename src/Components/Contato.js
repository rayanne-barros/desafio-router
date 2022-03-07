import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg'
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de datilografia" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>rayanne@email.com</li>
          <li>99999-9999</li>
          <li>Rua das Laranjeiras, 000</li>

        </ul>
      </div>
    </section>
  )
}

export default Contato