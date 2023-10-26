import { Suspense, lazy } from 'react'
import './App.css'
import  HomePage  from './pages/Home.jsx'
import Page404 from './pages/404'
import SearchPage from './pages/SearchPage'
import { Router } from './Router'
import { Route } from './Route'

const About = lazy(() => import(`./pages/About.jsx`))

const routes = [
  {
    path : '/:lang/about',
    Component: About
  },
  {
    path : '/search/:query',
    Component: SearchPage
  }
]

function App() {

  return (
    <main>
      <h1>Router test</h1>
        <Suspense fallback={null}>
          <Router routes={routes} defaultComponent={Page404}>
            <Route path='/' Component={HomePage}/>
            <Route path='/about' Component={About}/>
          </Router>
        </Suspense>
    </main>
  )
}

export default App
