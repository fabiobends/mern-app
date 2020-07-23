import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../styles/home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faUserMinus, faUserPlus, faUserTag, faAt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div className='page'>
      <header className={styles.header}>
        <nav>
          <div id='title'>Aplicação CRUD</div>
        </nav>
      </header>

      <div className={styles.container}>
        <p className={styles.info}>
          Essa aplicação tem o intuito de criar, ler, atualizar e deletar usuários
          <br />Foi criada utilizando a stack MERN (Mongo, Express, React e NodeJS)
        </p>

        <Link to='/create' title='Criar' className={styles.create}>
          <span >Novo usuário</span>
          <FontAwesomeIcon
            icon={faUserPlus}
          />
        </Link>


        <table>
          <thead className='thead'>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Ações</th>
          </thead>
          <tbody>
            <tr>
              <td>Fulano</td>
              <td>de tal</td>
              <td className={styles.rowOfButtons}>
                <Link to='/update' className={styles.btnEdit} title='Editar'>
                  <FontAwesomeIcon
                    icon={faUserEdit}
                    color='white'
                  />
                </Link>
                <Link to='/info' className={styles.btnInfo} title='Ver informação'>
                  <FontAwesomeIcon
                    icon={faUserTag}
                    color='white'
                  />
                </Link>
                <div className={styles.btnDanger} title='Deletar'>
                  <FontAwesomeIcon
                    icon={faUserMinus}
                    color='white'
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <footer className='footer'>
        <p className={styles.stamp}>
          Essa página foi desenvolvida por Fábio Mendes <br />
          Desenvolvedor Fullstack Web e Mobile
          </p>
        <div className={styles.contact}>
          Contato:
          <ul className={styles.media}>
            <li>
              <FontAwesomeIcon icon={faGithub} />
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </li>
            <li>
              <FontAwesomeIcon icon={faAt} />
            </li>
          </ul>
          <ul className={styles.links}>
            <li>
              github.com/fabiobends
            </li>
            <li>
              linkedin.com/in/fabiobends
            </li>
            <li>
              fabiobends@gmail.com
            </li>
          </ul>
        </div>

      </footer>
    </div>
  )
}
