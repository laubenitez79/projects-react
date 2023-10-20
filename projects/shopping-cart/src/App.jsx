import { Header } from "./components/Header"
import { Products } from "./components/Products"
import { products as initialProducts} from './mocks/products.json'
import { IS_DEVELOPMENT } from './config.js'
import { Footer } from "./components/Footer"
import { useFilters } from "./hooks/useFilters"
import { Cart } from "./components/Cart"
import { CartProvider } from "./context/cart"

function App() {
  const {filters, filterProducts} = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
      <CartProvider>
        <Header/>
        <Cart/>
        <Products products={filteredProducts}/>
        {IS_DEVELOPMENT && <Footer />}
      </CartProvider>
  )
}

export default App
