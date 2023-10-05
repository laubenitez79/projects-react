import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [enabled , setEnabled] = useState(false)
  const [position, setPosition] = useState({x : 0 , y :0})

  useEffect(() => {
  
    const handleMove = (event) => {
      console.log(event)
      const {clientX , clientY} = event
      setPosition({x: clientX, y: clientY})
    }
    
    if (enabled){
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }

  }, [enabled])

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  })

  return (
    <>
      <div style={{
        position: "absolute",
        backgroundColor : '#09f',
        borderRadius: '50%',
        opacity : '0.8',
        pointerEvents : 'none',
        left : -25,
        top : -25,
        width : 40,
        height : 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}/>
      <h3>Proyecto 3</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )

}

function App() {
  const [mounted , setMounted] = useState(true)

  return (
    <>
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}>{mounted ? 'Desactivar' : 'Activar'} Componente FollowMouse</button>
    </>
  )
}

export default App
