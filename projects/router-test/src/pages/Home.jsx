import { Link } from "../Link.jsx"

export default function HomePage () {
    return (
      <>
        <h2>HomePage</h2>
        <p>Ejemplo de la HomePage</p>
        <Link to={'/about'}>Ir al Sobre nosotros</Link>
      </>
    )
  }