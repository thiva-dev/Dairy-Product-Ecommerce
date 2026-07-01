import { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [category, setCategory] = useState("");
  const [rate, setRate] = useState("");
  const [image, setImage] = useState("");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/products/"
      );

      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
  };

  // Add Product
  const handleAddProduct = async () => {
    if (
      !name ||
      !price ||
      !weight ||
      !category ||
      !rate ||
      !image
    ) {
      alert("Please fill all fields");
      return;
    }

    if (Number(rate) < 1 || Number(rate) > 5) {
      alert("Rating must be between 1 and 5");
      return;
    }

    const formData = new FormData();

    formData.append("name", name);
    formData.append("price", price);
    formData.append("weight", weight);
    formData.append("category", category);
    formData.append("rate", rate);
    formData.append("image", image);

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/products/create/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Product Added Successfully");

      fetchProducts();

      setName("");
      setPrice("");
      setWeight("");
      setCategory("");
      setRate("");
      setImage("");
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Product
  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(
        `http://127.0.0.1:8000/api/products/delete/${id}/`
      );

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container py-5">
      <div
        className="card p-4 shadow"
        style={{
          maxWidth: "700px",
          margin: "auto",
          borderRadius: "12px",
        }}
      >
        <h2 className="mb-4">Add Product</h2>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          className="form-control mb-3"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="number"
          className="form-control mb-3"
          placeholder="Rating (1-5)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />

        <input
          type="file"
          className="form-control mb-3"
          accept="image/*"
          onChange={handleImageChange}
        />

        <button
          className="btn btn-success w-100"
          onClick={handleAddProduct}
        >
          Add Product
        </button>

        <hr />

        <h3 className="mb-3">Uploaded Products</h3>

        {products.length === 0 ? (
          <p>No Products Added Yet</p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="border rounded p-3 mb-3"
            >
              <img
                src={`http://127.0.0.1:8000${product.image}`}
                alt={product.name}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <h5 className="mt-2">{product.name}</h5>

              <p>
                <strong>Price:</strong> ₹{product.price}
              </p>

              <p>
                <strong>Weight:</strong> {product.weight}
              </p>

              <p>
                <strong>Category:</strong> {product.category}
              </p>

              <p>
                <strong>Rating:</strong> ⭐ {product.rate}
              </p>

              <p>
                <strong>ID:</strong> {product.id}
              </p>

              <button
                className="btn btn-danger"
                onClick={() =>
                  handleDeleteProduct(product.id)
                }
              >
                Delete Product
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Admin;