import { Switch, Route } from "react-router-dom";
import { useProducts } from "./context/ProductsContext";
import { useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import "./App.css";
import ProductDetail from "./pages/ProductDetail";
import Payment from "./pages/Payment";
import PaymentUpdated from "./pages/PaymentUpdated";

function App() {
  const { getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/product/:id">
          <ProductDetail />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/paymentupdated">
          <PaymentUpdated />
        </Route>
      </Switch>
    </>
  );
}

export default App;
