import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Store from './pages/Store'
import Chat from './pages/Chat'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

function App() {

  return (
    <>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/search' element={<Search/>} />
         <Route path='/store' element={<Store/>} />
         <Route path='/chat' element={<Chat/>} />
         <Route path='/cart' element={<Cart/>} />
         <Route path='/checkout' element={<Checkout/>} />
       </Routes>
    </>
  )
}

export default App
