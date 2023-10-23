import React, { useEffect, useState } from "react";
import "./Cart.css";
import api from "../api/Api";
import { Link, useParams } from "react-router-dom";

const Cart = (props) => {
  //accessing the trySize props
  // const trySize = props.trySize

  const cartItem = props.cartItem;

  const mainSize = props.mainSize;


  const [mainCart, setMainCart] = useState([]);

  const [quantity, setQuantity] = useState(1);

  const [loading, setLoading] = useState(false)

  const handeLoading = () => {

    setLoading(true);
    console.log("Loading is true")

    // setTimeout(() => {
    //   setLoading(false);
    //   console.log("Loading is false");
    // },2000)
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const params = useParams();

  console.log("quanitity is", quantity);

  useEffect(() => {
    const intParams = parseInt(params.id);

    const filterID = api.filter((item) => item.id === intParams);

    setMainCart(filterID);
  }, [params.id, cartItem]);

  // console.log(mainCart).

  console.log("cartItems is ", cartItem);

  const fixValue = 1250;

  return (
    <div className="parent-cart">
      <div className="Cart">
        <div className="cart-wrapper">
          {props.cartItem ? (
            <div className="bag">
              <div className="wrap-img-detail">
                <div className="bag-img">
                  {mainCart?.map((i) => (
                    <div className="bag-img-div" key={i.id}>
                      <img src={i.cartImg} alt="" />
                    </div>
                  ))}
                </div>

                <div className="bag-selected-detail">
                  {mainCart?.map((i) => (
                    <div className="bag-selected-div" key={i.id}>
                      <h1>{i.title}</h1>
                      <h2>Men's Shoes</h2>
                      <div className="size-quant">
                        <h3>
                          Quantity
                          <br></br>
                          <select
                            value={quantity}
                            onChange={handleQuantityChange}
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                          </select>
                        </h3>
                        <h3>
                          size <br></br> {mainSize}
                        </h3>
                      </div>
                      <h3>Price: {i.price}</h3>
                    </div>
                  ))}
                </div>
              </div>
              <div className="summray">
                <h1>Sumrray</h1>
                <div className="calcluate">
                  {mainCart?.map((i) => (
                    <div className="calculate-map-div" key={i.id}>
                      <div className="row-1 common-row">
                        <h2 className="h2-child">Subtotal</h2>
                        <h2 className="h3-child">₹ {i.intPrice * quantity}</h2>
                      </div>
                      <div className="row-2 common-row">
                        <h2 className="h2-child">
                          Estimated Delivery & Handling
                        </h2>
                        <h2 className="h3-child">₹ {fixValue}</h2>
                      </div>
                      <div className="total">
                        <h1>Total</h1>
                        <h1 className="h3-child">
                          ₹ {fixValue + i.intPrice * quantity}
                        </h1>
                      </div>
                      {props.loginState ? (
                        <div
                          className="parent-btn-checkout"
                          onClick={handeLoading}
                        >
                          {loading ? (
                              <h1>
                            <img
                              src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
                              alt=""
                            /></h1>
                          ) : (
                            <button className="checkout-btn">CheckOut</button>
                          )}
                        </div>
                      ) : (
                        <Link to={"/signin"} className="no-checkout">
                          <button>Sign IN</button>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="no-item-div">
              <h1>Bag</h1>
              <h2>There Is no items in your bag.</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
