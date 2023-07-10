import Home from "./Pages/Home";
import Product from "./Pages/Products/Products";
import Announcement from './Components/Announcement/Announcement'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import ProductList from "./Pages/ProductList/productList";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Cart from "./Pages/Cart/Cart"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const user = true
  return (
    <>
    <Navbar/>
    <Announcement/>
    <BrowserRouter>
      <Routes>
        {/* can put header and footer in here and have a condition checking the path to see if its login or register */}
        {/* <Route path="/" element={<></>}> */}
          <Route exact path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}/>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
};

export default App;