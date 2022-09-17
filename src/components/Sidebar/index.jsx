import { PencilLine } from 'phosphor-react'

import styles from './styles.module.css'

export function Sidebar() {
  return (
    <aside className={ styles.sidebar }>
      <img 
        className={ styles.cover }
        src="https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
      />

      <div className={ styles.profile }>
        <img className={ styles.avatar } src="https://avatars.githubusercontent.com/u/31144107?v=4" alt="github.com/duccini" />

        <strong>Guilherme Duccini</strong>
        <span>React Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  )
}