import React, { useState } from 'react';
import { createUser } from '../utils/actionFunctions';
// import { Redirect } from 'react-router-dom';
import styles from '../styles/user.module.css';

export default function CreateUser(props) {

  let [name, setName] = useState('');
  let [lastname, setLastname] = useState('');
  let [age, setAge] = useState('');

  const create = () => {
    createUser();
    props.history.push('/');
  }
  return (
    <div className={styles.page}>
      <h1>Criar usuário</h1>
      <form onSubmit={() => create()}>
        <label>Nome</label>
        <input onChange={(event) => setName(event.target.value)} value={name} />
        <label>Sobrenome</label>
        <input onChange={(event) => setLastname(event.target.value)} value={lastname} />
        <label>Idade</label>
        <input onChange={(event) => setAge(event.target.value)} value={age} />
        <button type='submit' className={styles.confirm}>Confirmar</button>
        <button className={styles.back}>Voltar</button>
      </form>
    </div>
  )
}
