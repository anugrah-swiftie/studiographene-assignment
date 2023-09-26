import React, { useEffect, useState } from "react";
import floridaJacket from "../assets/florida-jacket.png";
import redirectIcon from "../assets/redirect-icon.png";
import "./Products.css";

const Product = () => {
  let [products, setProduct] = useState([]);
  let url = "https://fakestoreapi.com/products";

  async function GetProducts() {
    let resp = await fetch(url);
    let data = await resp.json();
    setProduct(data);
  }

  useEffect(() => {
    GetProducts();
  }, []);

  return (
    <div>
      <div className="container-fluid p-0">
        <div className="product-title">
          <h2 className="m-0">New products</h2>
          <hr className="m-0 horizontal-rule-2" />
        </div>
        <div className="product-container">
          <div>
            <ul className="categories m-0 p-0">
              <li className="category">
                <a href="#">Apparel</a>
              </li>
              <li className="category">
                <a href="#">Accessories</a>
              </li>
              <li className="category">
                <a href="#">Best sellers</a>
              </li>
              <li className="category">
                <a href="#">50% off</a>
              </li>
            </ul>
          </div>
          <div className="products d-flex">{products.map(ProductItem)}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;

function ProductItem(product) {
  return (
    <div key={product.id} className="product-card">
      <div className="product-image">
        <img className="img-product" src={product.image} />
        <img src={redirectIcon} alt="redirect-icon" className="redirect-icon" />
      </div>
      <div className="product-description">
        <h4>{product.title}</h4>
        <p>{product.description}</p>
        <h4>{product.price}</h4>
      </div>
    </div>
  );
}
