import Home from "./Pages/Home";
import Product from "./Pages/Products/Products";
import Announcement from './Components/Announcement/Announcement'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import ProductList from "./Pages/ProductList/productList";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Cart from "./Pages/Cart/Cart"
import Success from "./Pages/Success"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector(state => state.user.currentUser)
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Announcement/>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}/>
          <Route path="/success" element={<Success />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
};

export default App;