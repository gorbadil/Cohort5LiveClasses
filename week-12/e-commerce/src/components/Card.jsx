import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProducts } from "../context/ProductsContext";

export default function ProductCard({ product }) {
  const [existingProduct, setExistingProduct] = useState(false);
  const { addToCart, cart, updateQuantity, removeFromCart } = useProducts();

  useEffect(() => {
    const existingProduct = cart.find((item) => item.id === product.id);
    setExistingProduct(existingProduct);
  }, [cart, product]);

  const handleIncrease = (productId) => {
    const newQuantity = existingProduct.quantity + 1;
    updateQuantity(productId, newQuantity);
  };

  const handleDecrease = (productId) => {
    const newQuantity = existingProduct.quantity - 1;
    updateQuantity(productId, newQuantity);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.thumbnail}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <div className="product-card-actions">
          <div className="cart-actions">
            {!existingProduct ? (
              <Button onClick={() => addToCart(product)} size="small">
                Add To Cart
              </Button>
            ) : (
              <div>
                <Button
                  onClick={() => handleDecrease(product.id)}
                  variant="contained"
                  size="small"
                >
                  -
                </Button>

                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleIncrease(product.id)}
                >
                  +
                </Button>
                <span> Quantity: {existingProduct.quantity} </span>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
          <Button size="small">
            <Link to={`/product/${product.id}`}>Detail Page</Link>
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
