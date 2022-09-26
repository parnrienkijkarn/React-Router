import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ViewProductPage() {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const params = useParams();

  const getProduct = async () => {
    const result = await axios.get(
      `http://localhost:4001/products/${params.productId}`
    );
    setProduct(result.data.data);
  };

  console.log(product);

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{product.name}</h2>
        <p>{product.image}</p>
        <p>{product.price}</p>
        <p>{product.description}</p>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default ViewProductPage;
