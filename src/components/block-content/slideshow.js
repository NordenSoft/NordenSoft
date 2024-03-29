import React, { useState } from 'react'

import styles from './slideshow.module.css'

function Slideshow (props) {
  if (!props.slides) return null
  const len = props.slides.length
  const [index, setIndex] = useState()
  function handlePrev () {
    setIndex(Math.max(index - 1, 0))
  }
  function handleNext () {
    setIndex(Math.min(index + 1, len - 1))
  }
  return (
    <div className={styles.root}>
      <div className={styles.nav}>
        <button onClick={handlePrev} disabled={index === 0}>
          Prev
        </button>
        <span>
          {index + 1} of {len}
        </span>
        <button onClick={handleNext} disabled={index === len - 1}>
          Next
        </button>
      </div>
      <ul
        className={styles.carousel}
        data-index={index}
        style={{ transform: `translate3d(${index * -100}%, 0, 0)` }}
      >
        {props.slides.map(slide => (
          <li key={slide._key} className={styles.slide}>
            {slide.asset}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Slideshow
