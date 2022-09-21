import { ThumbsUp, Trash } from 'phosphor-react'

import styles from './styles.module.css'
import { Avatar } from '../Avatar'

export function Comment() {
  return (
    <div className={ styles.comment }>

      <Avatar 
        avatarClass="commentAvatar" 
        src="https://avatars.githubusercontent.com/u/31144107?v=4" 
      />

      <div className={ styles.commentBox}>

        <div className={ styles.commentContent}>

          <header>

            <div className={ styles.authorAndTime }>
              <strong>Guilherme Duccini</strong>
              <time title="11 de maio às 11h13" dateTime="2022-05-12">Cerca de 1h atrás.</time> 
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>

          </header>

          <p>Muito bom dev! Aprender sempre!</p>

        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>

      </div>

    </div>
  )
}