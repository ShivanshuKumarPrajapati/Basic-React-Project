import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',')
  const hex=rgbToHex(...rgb)
  // console.log(rgb);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert]);
  return (
    <article className={`color ${index > 8 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${rgb})` }}
      onClick={() => {
        setAlert(true);
      navigator.clipboard.writeText(hex)}}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hex}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor