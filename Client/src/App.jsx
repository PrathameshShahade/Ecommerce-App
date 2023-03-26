import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Search from "./pages/Search";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Wishlist from "./pages/Wishlist";
import Shops from "./pages/Shops";
import SearchShops from "./pages/SearchShops";
import About from "./pages/About";
import Success from "./pages/Success";
import ShippingAdd from "./pages/ShippingAdd";
import PaymentOption from "./pages/PaymentOption";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";








const App = () => {
  const user = useSelector((state)=> state.user.currentUser);
  return (

  <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/login">
          { user ? <Redirect to="/"/>:<Login/>}
        </Route>

        <Route path="/register">
        { user ? <Redirect to="/"/>:<Register/>}
        </Route>

        <Route path="/search">
           <Search/>
        </Route>

        <Route path="/searchshops">
          <SearchShops/>
        </Route>

        <Route path="/products/:category">
          <ProductList/>
        </Route>

        <Route path="/product/:id">
          <Product/>
        </Route>


        <Route path="/cart">
          <Cart/>
        </Route>

        <Route path="/success">
          <Success/>
        </Route>

        <Route path="/wishlist">
          <Wishlist/>
        </Route>

<Route path="/shops">
  <Shops/>
</Route>

<Route path="/about">
  <About/>
</Route>

<Route path="/contact">
  <Contact/>
</Route>

<Route path="/feedback">
  <Feedback/>
</Route>

<Route path="/shippingAdd">
  <ShippingAdd/>
</Route>

<Route path="/payOption">
  <PaymentOption/>
</Route>
        
      </Switch>
    </Router>
  );
};

export default App;