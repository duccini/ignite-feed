import styles from './styles.module.css'

export function Avatar({ avatarClass, src }) {
  let typeAvatar = ''

  switch (avatarClass) {
    case 'sidebarAvatar':
      typeAvatar = styles.sidebarAvatar
      break;
  
    case 'commentAvatar':
      typeAvatar = styles. commentAvatar
      break;

    case 'postAvatar':
      typeAvatar = styles.postAvatar
      break;
  }

  return (
    <img className={typeAvatar} src={ src } alt="github.com/duccini" />
  )
}