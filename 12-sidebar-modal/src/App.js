import React from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
function App() {
  return (
    <main>
      <Home />
      <Sidebar/>
      <button className="btn" >show modal</button>
    </main>
  );
}

export default App
