import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { use } from "react";
import Variants from "../components/Variants";

function ProductDetail() {
  let { id } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
        setProduct(res.data);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [id]);

  if (loading) {
    return <Variants />;
  }

  return (
    <div>
      <img src={product?.thumbnail} alt="" />
      <h1> {product?.title} </h1>
      <p> {product?.description} </p>
    </div>
  );
}

export default ProductDetail;
