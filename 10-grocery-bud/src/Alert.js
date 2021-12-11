import React, { useEffect } from 'react'

const Alert = (props) => {
  return (
    <p className={`alert ${props.class}`}>
      {props.value}
    </p>
  )
}

export default Alert
