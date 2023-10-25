import { useEffect, useState } from 'react'
import './App.css'
import { EVENTS } from './consts.js'
import  HomePage  from './pages/Home.jsx'
import  About from './pages/About.jsx'


function App() {
  const [currentPath , setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  return (
    <main>
      <h1>Router test</h1>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <About/>}
    </main>
  )
}

export default App
