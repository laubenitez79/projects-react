import { useEffect, useState, useRef, useCallback} from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { TopMovies } from './components/TopMovies'
import debounce from 'just-debounce-it'

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current){
      isFirstInput.current = search === ''
      return
    }

    if(search === ''){
      setError('No se puede buscar una pelicula vacía')
      return
    }

    if(search.length < 2){
      setError('La busqueda debe tener al menos 2 caracteres')
      return
    }

    setError(null)

  }, [search])

  return {search , updateSearch , error}
}

function App() {
  const [sort , setSort] = useState(false)
  const {search , updateSearch , error} = useSearch()
  const {movies, getMovies, loading} = useMovies({ search, sort })
  // const [buttonClicked, setButtonClicked] = useState(false);

  const getMoviesDebounce = useCallback(
    debounce(search => {
    getMovies({ search })
  }, 300)
  , [getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    // setButtonClicked(true);
    getMovies({search})
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    getMoviesDebounce(newSearch)
  }

  return (
    <div className="page">

      <header>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} placeholder='Avengers, Strar Wars, Toy Story...' />
          <input type="checkbox" onChange={handleSort} checked={sort}/>
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        { !search ? <TopMovies/> : 
          loading ? <p>Cargando...</p> : <Movies movies={movies}/>
        }
      </main>
    </div>
  )
}

export default App
