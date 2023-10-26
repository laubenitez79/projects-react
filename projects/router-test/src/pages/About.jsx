import { Link } from "../Link.jsx"

const i18n = {
  es: {
    title: 'Sobre nosotros',
    button: 'Ir a la home',
    description : 'Hola, me llamo Lautaro y estoy probando de crear un clon de React Router!'
  },
  en: {
    title: 'About us',
    button : 'Go to home page',
    description: 'Hi, my name is Lautaro and creating a clone of React Router!'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function About ({routesParams}) {
  const i18n =useI18n(routesParams.lang ?? 'es')

    return (
      <>
        <h2>{i18n.title}</h2>
        <div className="">
          <img src="https://pbs.twimg.com/profile_images/976959202659889157/uMeSrfNm_400x400.jpg" alt="Lautaro Benitez" />
          <p>{i18n.description}</p>
        </div>
        <Link to={'/'}>{i18n.button}</Link>
      </>
    )
  }