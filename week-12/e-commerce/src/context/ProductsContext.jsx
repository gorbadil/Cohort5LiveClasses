import { createContext, useContext, useState } from "react";
import axios from "axios";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState();
  const [cart, setCart] = useState([]);

  const getProducts = () => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setProducts(res.data.products);
    });
  };

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    setCart([...cart, { ...product, quantity: 1 }]);
    console.log(cart);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity: quantity } : item
        )
      );
    }
  };

  const data = {
    products,
    getProducts,
    addToCart,
    cart,
    removeFromCart,
    updateQuantity,
  };

  return (
    <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
  );
};

// export const useProducts = () => useContext(ProductsContext);

export function useProducts() {
  return useContext(ProductsContext);
}
