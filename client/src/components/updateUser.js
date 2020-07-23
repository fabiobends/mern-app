import React from 'react';
import styles from '../styles/update.module.css';

export default function CreateUser() {
  return (
    <div className={styles.page}>
      <h1>Atualizar usuário</h1>
      <form>
        <label>Nome</label>
        <input />
        <label>Sobrenome</label>
        <input />
        <label>Idade</label>
        <input />
        <button className={styles.update}>Atualizar</button>
        <button className={styles.back}>Voltar</button>
      </form>
    </div>
  )
}
