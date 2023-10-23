import { Helmet } from "react-helmet";
import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slider/Slider";
import Products from "./components/products/Products";
import Footer from "./components/footer/Footer";
import View from "./components/view/View";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Men from "./components/men/Men";
import Signin from "./components/form/in/Signin";
import Signup from "./components/form/up/Signup";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trySize: "hello world",
      aboutUsRef: React.createRef(),
      loginState: false,
      valueFromChild: "", //initialize the state
      setSignName: "",
      signUpName: "",
      cartItem: false,
      mainSize: "",
    };
  }

  scrollToAboutUs = () => {
    this.state.aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  updateLoginState = (newLoginState) => {
    this.setState({ loginState: newLoginState });
  };

  defSetSignINName = (name) => {
    this.setState({ setSignName: name });
  };

  setCartItem = () => {
    this.setState({ cartItem: true });
  };

  anotherSize = (sizeIs) => {
    this.setState({ mainSize: sizeIs });
  };

  setDiffrent = (name) => {
    this.setState({ signUpName: name });
  };

  render() {

    // const { trySize, aboutUsRef, cartItem, mainSize } = this.state;
    const { trySize, aboutUsRef } = this.state;
    console.log("signUpName is ", this.state.signUpName);
    // console.log("cartItem is ", cartItem);
    // console.log("mainSize is ", mainSize);

    return (
      <Router>
        <div className="App" onScroll={this.handleScroll}>
          <Helmet>
            <title>nike.com/in</title>
          </Helmet>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Navbar
                    scrollToAboutUs={this.scrollToAboutUs}
                    updateLoginState={this.updateLoginState}
                    loginState={this.state.loginState}
                    signInUserName={this.state.signInUserName}
                    signupName={this.state.signUpName}
                  />
                  <Slider />
                  <Products
                    cartItem={this.state.cartItem}
                    setCartItem={this.setCartItem}
                  />
                  <Products
                    cartItem={this.state.cartItem}
                    setCartItem={this.setCartItem}
                  />
                  <Footer aboutUsRef={aboutUsRef} />
                </div>
              }
            />
            <Route
              path="/men"
              element={
                <div>
                  <Navbar
                    scrollToAboutUs={this.scrollToAboutUs}
                    updateLoginState={this.updateLoginState}
                    signInUserName={this.state.signInUserName}
                    loginState={this.state.loginState}
                    signupName={this.state.signUpName}
                  />
                  <Men />
                  <Footer aboutUsRef={aboutUsRef} />
                </div>
              }
            />
            <Route
              path="/data/:id"
              element={
                <div>
                  <Navbar
                    scrollToAboutUs={this.scrollToAboutUs}
                    updateLoginState={this.updateLoginState}
                    signInUserName={this.state.signInUserName}
                    loginState={this.state.loginState}
                    signupName={this.state.signUpName}
                  />
                  <View
                    updateParentState={this.updateValueFromChilid}
                    cartItem={this.state.cartItem}
                    anotherSize={this.anotherSize}
                    loginState={this.state.loginState}
                  />
                  <Footer aboutUsRef={aboutUsRef} />
                </div>
              }
            />
            <Route
              path="cart/:id"
              element={
                <div>
                  <Navbar
                    scrollToAboutUs={this.scrollToAboutUs}
                    updateLoginState={this.updateLoginState}
                    signInUserName={this.state.signInUserName}
                    loginState={this.state.loginState}
                    signupName={this.state.signUpName}
                  />
                  <Cart
                    trySize={trySize}
                    cartItem={this.state.cartItem}
                    mainSize={this.state.mainSize}
                    loginState={this.state.loginState}
                  />
                  <Footer aboutUsRef={aboutUsRef} />
                </div>
              }
            />
            <Route
              path="/signin"
              element={
                <Signin
                  updateLoginState={this.updateLoginState}
                  defSetSignINName={this.state.setSignName}
                  setSignInUserName={(userName) =>
                    this.setState({ signInUserName: userName })
                  }
                />
              }
            />

            <Route
              path="/signup"
              element={
                <Signup
                  updateLoginState={this.updateLoginState}
                  setDiffrent={this.setDiffrent}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <div>
                  <Cart
                    cartItem={this.state.cartItem}
                    mainSize={this.state.mainSize}
                    loginState={this.state.loginState}
                    scrollToAboutUs={this.scrollToAboutUs}
                  />
                  <Navbar
                    scrollToAboutUs={this.scrollToAboutUs}
                    updateLoginState={this.updateLoginState}
                    signInUserName={this.state.signInUserName}
                    loginState={this.state.loginState}
                  />
                  <Footer aboutUsRef={aboutUsRef} />
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
