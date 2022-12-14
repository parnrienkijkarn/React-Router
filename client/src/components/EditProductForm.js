import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditProductForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [product, setProduct] = useState([]);
  const params = useParams();

  const getProduct = async () => {
    const result = await axios.get(
      `http://localhost:4001/products/${params.productId}`
    );
    setProduct(result.data.data);
  };
  const editProduct = async () => {
    await axios.put(`http://localhost:4001/products/${params.productId}`, {
      name,
      image,
      price,
      description,
    });
    navigate("/");
  };

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    setName(product.name);
    setImage(product.image);
    setPrice(product.price);
    setDescription(product.description);
  }, [product]);

  const handleSubmit = (event) => {
    event.preventDefault();
    editProduct();
  };
  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(event) => setImage(event.target.value)}
            value={image}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(event) => setPrice(event.target.value)}
            value={price}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(event) => setDescription(event.target.value)}
            value={description}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}
export default EditProductForm;
