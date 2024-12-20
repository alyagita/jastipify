import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Cart from './pages/Cart'
import Chat from './pages/Chat'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import Search from './pages/Search'
import Store from './pages/Store'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/store" element={<Store />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
    </Router>
    </>
  )
}

export default App
