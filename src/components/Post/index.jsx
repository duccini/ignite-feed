import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './styles.module.css'

export function Post({ author, publishedAt, content }) {
  const [comments, seTComments] = useState([ 1, 2 ])

  function handleCreateNewComment() {
    event.preventDefault()

    seTComments([...comments, comments.lenght + 1])
  }

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <article className={ styles.post }>

      <header>
        <div className={ styles.author }>
          <Avatar 
            avatarClass="postAvatar"
            src={ author.avatarUrl } 
          />

          <div className={ styles.authorInfo}>
            <strong>{ author.name }</strong> 
            <span>{ author.role }</span>
          </div>
        </div>

        <time 
          title={ publishedDateFormatted } 
          dateTime={publishedAt.toISOString()}>
            { publishedDateRelativeToNow }
        </time>  
      </header>

      <div className={ styles.content}>

        { content.map(line => {
          if(line.type === 'paragraph') {
            return <p>{ line.content }</p>
          } else if(line.type === 'link') {
            return <p><a href='#'>{ line.content }</a></p>
          }
        })}

      </div>

      <form onSubmit={ handleCreateNewComment } className={ styles.commentForm }>
        <strong>Deixe seu Feedback</strong>

        <textarea placeholder='Deixe seu comentário' />

        <button type="submit">Comentar</button>
      </form>

      <div className={ styles.commentList}>
        
        { comments.map(comment => {
          return <Comment />
        })}
        
      </div>

    </article> 
  )
}

