import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Header from './components/Header'
import { CartProvider } from './context/CartContext'
import { ThemeProvider } from './context/ThemeContext'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="app">
          <Header />
          <main>
            <ProductList />
            <Cart />
          </main>
        </div>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
