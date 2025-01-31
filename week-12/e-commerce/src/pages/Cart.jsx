// import { useContext } from "react";
// import { ProductsContext } from "../context/ProductsContext";
import Card from "../components/Card";
import { useProducts } from "../context/ProductsContext";

function Cart() {
  // const { products } = useContext(ProductsContext);
  const { cart } = useProducts();
  return (
    <div>
      <h1> Cart </h1>
      {cart.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Cart;
