import Home from "./Pages/Home";
import Product from "./Pages/Products/Products";
import Announcement from './Components/Announcement/Announcement'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import ProductList from "./Pages/ProductList/productList";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Cart from "./Pages/Cart/Cart"

const App = () => {
  return (
    <>
    {/* if reg or login hide header and footer* */}
      <Navbar/>
      <Announcement/>
      {/* <Product/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Cart/> */}
      {/* <ProductList/> */}
      <Home/>
      <Footer/>
    </>
  )
};

export default App;