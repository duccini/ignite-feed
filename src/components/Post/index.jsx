import styles from './styles.module.css'

export function Post() {
  return (
    <article className={ styles.post }>

      <header>
        <div className={ styles.author }>
          <img 
            className={ styles.avatar }
            src="https://avatars.githubusercontent.com/u/31144107?v=4" alt="github.com/duccini" 
          />

          <div className={ styles.authorInfo}>
            <strong>Guilherme Duccini</strong> 
            <span>React Developer</span>
          </div>
        </div>

        <time title="11 de maio às 11h13" dateTime="2022-05-12">Publicado há 1h.</time>  
      </header>

      <div className={ styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉{' '} <a href="#">jane.design/doctorcare</a></p>

        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={ styles.commentForm }>
        <strong>Deixe seu Feedback</strong>

        <textarea placeholder='Deixe seu comentário' />

        <button type="submit">Comentar</button>
      </form>

    </article> 
  )
}

