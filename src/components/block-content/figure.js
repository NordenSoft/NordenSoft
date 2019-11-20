import React from 'react'

import styles from './figure.module.css'

function Figure (props) {
  return (
    <figure className={styles.root}>
      {props.asset}
      <figcaption className={styles.caption}>{props.caption}</figcaption>
    </figure>
  )
}

export default Figure
