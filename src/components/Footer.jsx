import React from 'react'
import styles from './Footer.module.css'
import Dog from '../assets/dogs-footer.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={Dog} alt="" />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  )
}

export default Footer