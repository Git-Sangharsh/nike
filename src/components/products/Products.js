import React, { useEffect, useState } from "react";
import "./Products.css";
import api from "../api/Api";
import { Link } from "react-router-dom";

const Products = ({ cartItem, setCartItem }) => {

  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    setMainData(api);
  }, []);
  // console.log(mainData)



  const passingProduct = (i) => {
    // console.log(i.id);
  };
  return (
    <div className="Products">
      <div className="products-wrapper">
        {mainData?.map((i) => (
          <div className="main-api-div" onClick={setCartItem} key={i.id}>
            <Link
              to={`https://nike-frontend69.onrender.com/data/${i.id}`}
              style={{ textDecoration: "none" }}
            >
              <div
                className="card"
                key={i.id}
                onClick={() => passingProduct(i)}
              >
                <img src={i.img} className="card-img" alt="" />
                <h1 className="card-headers">Available in SNKRS</h1>
                <h2 className="card-headers">{i.title}</h2>
                <h3 className="card-headers">Men's Shoes</h3>
                <h5 className="card-headers">{i.price}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
