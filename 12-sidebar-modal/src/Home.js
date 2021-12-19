import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'

const Home = () => {
  return (
    <button className='btn sidebar-toggle'>
      <FaBars/>
    </button>
  )
}

export default Home
