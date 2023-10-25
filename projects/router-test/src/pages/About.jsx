import { Link } from "../Link.jsx"

export default function About () {
    return (
      <>
        <h2>About Page</h2>
        <div className="">
          <img src="https://pbs.twimg.com/profile_images/976959202659889157/uMeSrfNm_400x400.jpg" alt="Lautaro Benitez" />
          <p>Hola soy Lautaro y estoy probando con React Router </p>
        </div>
        <Link to={'/'}>Ir a la HomePage</Link>
      </>
    )
  }