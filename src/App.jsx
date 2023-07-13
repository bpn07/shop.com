import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Categories from "./pages/Categories"
import Cart from "./pages/Cart"

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
