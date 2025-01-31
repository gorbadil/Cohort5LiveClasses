import ProductCard from "../components/Card";
import { useProducts } from "../context/ProductsContext";

function Home() {
  const { products } = useProducts();

  return (
    <div className="home">
      {/* optional variable */}
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;
