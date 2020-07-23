import React from 'react';
import styles from '../styles/info.module.css';

export default function CreateUser() {
  return (
    <div className={styles.page}>
      <h1>Atualizar usuário</h1>
      <form>
        <label>Nome</label>
        <div className={styles.infos}>
          text
        </div>
        <label>Sobrenome</label>
        <div className={styles.infos}>
          text
        </div>
        <label>Idade</label>
        <div className={styles.infos}>
          text
        </div>
        <label>ID</label>
        <div className={styles.infos}>
          text
        </div>
        <button className={styles.back}>Voltar</button>
      </form>
    </div>
  )
}
