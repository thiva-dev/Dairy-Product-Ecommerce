import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Categories.css";
import { useCart } from "../CartContext";

function Categories() {
  const [products, setProducts] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedRate, setSelectedRate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const { addToCart } = useCart();
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

  const filterProducts = products.filter((product) => {
  const searchMatch =
    product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

  let priceMatch = true;
  let rateMatch = true;

  if (selectedPrice === "Under 100") {
    priceMatch = Number(product.price) < 100;
  } else if (selectedPrice === "100-300") {
    priceMatch =
      Number(product.price) >= 100 &&
      Number(product.price) <= 300;
  } else if (selectedPrice === "Above 300") {
    priceMatch = Number(product.price) > 300;
  }

  if (selectedRate) {
    rateMatch =
      Number(product.rate) === Number(selectedRate);
  }

  return searchMatch && priceMatch && rateMatch;
});

const sortedProducts = [...filterProducts];

if (sortOption === "lowToHigh") {
  sortedProducts.sort(
    (a, b) => Number(a.price) - Number(b.price)
  );
}

if (sortOption === "highToLow") {
  sortedProducts.sort(
    (a, b) => Number(b.price) - Number(a.price)
  );
}

  return (
    <div className="container-fluid py-4">
      {/* Banner */}
      <div className="banner-section mb-5">
        <h1>Our Categories</h1>
        <p>
          Explore our wide range of fresh and healthy dairy products
        </p>
      </div>

      <div className="row">
        {/* Sidebar */}
        <div className="col-lg-3 mb-4">
          <div className="sidebar p-3">
            <h4>Categories</h4>

            <ul className="list-unstyled">
              <li>🥛 Milk</li>
              <li>🥣 Curd & Yogurt</li>
              <li>🧈 Butter & Ghee</li>
              <li>🧀 Cheese</li>
              <li>🍦 Ice Cream</li>
              <li>🍬 Sweets</li>
            </ul>

            <hr />

            <h5>Price Range</h5>

            <div className="alignment mb-2">
              <input
                type="checkbox"
                checked={selectedPrice === "Under 100"}
                disabled={
                  selectedPrice &&
                  selectedPrice !== "Under 100"
                }
                onChange={(e) =>
                  setSelectedPrice(
                    e.target.checked ? "Under 100" : ""
                  )
                }
              />
              {" "}Under ₹100
            </div>

            <div className="alignment mb-2">
              <input
                type="checkbox"
                checked={selectedPrice === "100-300"}
                disabled={
                  selectedPrice &&
                  selectedPrice !== "100-300"
                }
                onChange={(e) =>
                  setSelectedPrice(
                    e.target.checked ? "100-300" : ""
                  )
                }
              />
              {" "}₹100 - ₹300
            </div>

            <div className="alignment mb-2">
              <input
                type="checkbox"
                checked={selectedPrice === "Above 300"}
                disabled={
                  selectedPrice &&
                  selectedPrice !== "Above 300"
                }
                onChange={(e) =>
                  setSelectedPrice(
                    e.target.checked ? "Above 300" : ""
                  )
                }
              />
              {" "}Above ₹300
            </div>

            <hr />

            <h5>Rating</h5>

            <div className="alignment">
              <input
                type="checkbox"
                checked={selectedRate === "5"}
                disabled={
                  selectedRate &&
                  selectedRate !== "5"
                }
                onChange={(e) =>
                  setSelectedRate(
                    e.target.checked ? "5" : ""
                  )
                }
              />
              ⭐⭐⭐⭐⭐
            </div>

            <div className="alignment">
              <input
                type="checkbox"
                checked={selectedRate === "4"}
                disabled={
                  selectedRate &&
                  selectedRate !== "4"
                }
                onChange={(e) =>
                  setSelectedRate(
                    e.target.checked ? "4" : ""
                  )
                }
              />
              ⭐⭐⭐⭐
            </div>

            <div className="alignment">
              <input
                type="checkbox"
                checked={selectedRate === "3"}
                disabled={
                  selectedRate &&
                  selectedRate !== "3"
                }
                onChange={(e) =>
                  setSelectedRate(
                    e.target.checked ? "3" : ""
                  )
                }
              />
              ⭐⭐⭐
            </div>

            <div className="alignment">
              <input
                type="checkbox"
                checked={selectedRate === "2"}
                disabled={
                  selectedRate &&
                  selectedRate !== "2"
                }
                onChange={(e) =>
                  setSelectedRate(
                    e.target.checked ? "2" : ""
                  )
                }
              />
              ⭐⭐
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="col-lg-9">
          <div className="d-flex justify-content-between align-items-center mb-4 gap-3">
            <input
                type="text"
                className="form-control"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
                className="form-select sort-box"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Popularity</option>
              <option value="lowToHigh">Price Low to High</option>
              <option value="highToLow">Price High to Low</option>        
            </select>
          </div>

          <div className="row">
            {filterProducts.length === 0 ? (
              <div className="text-center">
                <h4>No Products Available</h4>
                <p>Add products from Admin Page</p>
              </div>
            ) : (
              sortedProducts.map((product) => (
                <div
                  className="col-md-4 col-sm-6 mb-4"
                  key={product.id}
                >
                  <div className="product-card">
                    <img
                      src={`http://127.0.0.1:8000${product.image}`}
                      alt={product.name}
                      className="product-image"
                    />

                    <h5>{product.name}</h5>

                    <p>{product.weight}</p>

                    <h6>₹{product.price}</h6>

                  <button
  className="btn btn-primary w-100"
  onClick={() => addToCart(product)}
>
  Add To Cart
</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;