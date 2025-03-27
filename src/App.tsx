import React from 'react'
import Navbar from './components/Navbar.tsx'
import About from './components/About.tsx'

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <About />
    </div>
  )
}

export default App 