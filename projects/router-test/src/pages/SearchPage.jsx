import { useEffect } from "react"

export default function SearchPage({routesParams}) {
    useEffect(() => {
      document.title = `Busqueda ${routesParams.query}`
    }, [])

    return (
        <p>Estas buscando una query con el nombre de <strong>{routesParams.query}</strong></p>
    )
}