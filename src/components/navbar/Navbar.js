import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signin: props.loginState,
      popup: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.loginState !== this.props.loginState) {
      this.setState({ signin: this.props.loginState });
    }
  }

  render() {
    console.log("loginstate state", this.props.loginState);

    const { scrollToAboutUs } = this.props;
    const { signin } = this.state;

    const handelPopupEnter = () => {
      this.setState((preveState) => ({
        popup: !preveState.popup,
      }));
    };

    const handleSignOut = () => {
      console.log("sign out");
      this.setState({ popup: false });
      this.props.updateLoginState(false);
    };

    return (
      <div className="parrent-nav">
        <div className="Navbar">
          <div className="nav-wrapper">
            <Link to={`https://nike-frontend69.onrender.com/`}>
              <div className="nike-logo">
                <img src={logo} alt="" />
              </div>
            </Link>
            <div className="nike-headers">
              <Link to={"https://nike-frontend69.onrender.com/"}>
                <h1>Home</h1>
              </Link>
              <Link to={"https://nike-frontend69.onrender.com/men"}>
                <h1>Men</h1>
              </Link>
              <h1 onClick={scrollToAboutUs}>About Us</h1>
            </div>
            <div className="nike-cart-logo">
              {signin ? (
                <div className="popup-signin" onClick={handelPopupEnter}>
                  <FontAwesomeIcon className="icon-class" icon={faUser} />
                </div>
              ) : (
                <Link to={"https://nike-frontend69.onrender.com/signin"}>
                  <FontAwesomeIcon className="icon-class" icon={faUser} />
                </Link>
              )}
              <Link to={"https://nike-frontend69.onrender.com/cart"}>
                <FontAwesomeIcon className="icon-class" icon={faCartShopping} />
              </Link>
            </div>
          </div>
          {this.state.popup ? (
            <div className="bg-popup">
              <div className="child-bg-popup">
                <h2>Signed In As</h2>
                <h3>{this.props.signInUserName}</h3>
                {/* <h3>{this.props.signupName}</h3> */}
              </div>
              <h1 onClick={handleSignOut}>Sign Out</h1>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;
