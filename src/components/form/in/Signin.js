import React from "react";
import "./Signin.css";
import axios from "axios";

import { Link } from "react-router-dom";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUser: "",
      signPass: "",
      redirection: false,
      wrongCredentials: false,
      wrongInfo: false,
      alreadySignInUser: "",
    };
  }


  render() {
    const handelSignEamil = (e) => {
      this.setState({ signUser: e.target.value });
    };

    const handelSignPass = (e) => {
      this.setState({ signPass: e.target.value });
    };

    const handlSingInBtn = (e) => {
      e.preventDefault();
      const { signUser, signPass } = this.state;

      const data = {
        username: signUser,
        password: signPass,
      };

      axios
        .post("https://nike-backend-5ara.onrender.com/signin", data)
        .then((response) => {
          const message = response.data.message;
          const incorrectPass = response.data.incorrectPass;
          const incorrect = response.data.incorrect;
          const signInUserName = response.data.user;

          this.setState({ message });
          this.setState({ incorrectPass });
          this.setState({ incorrect });
          this.setState({ signInUserName });

          if (message === "success") {
            this.setState({ redirection: true });
            this.props.updateLoginState(true);
            this.setState({ alreadySignInUser: signInUserName });
            this.props.setSignInUserName(signInUserName);
            // console.log("user signInUserName Is ", signInUserName);
          } else {
            this.props.updateLoginState(false);
          }

          if (incorrectPass === "wrongCredentials") {
            console.log("wrong id or pass");
            this.setState({ wrongCredentials: true });
          } else {
            this.setState({ wrongCredentials: false });
          }

          if (incorrect === "userNotFound") {
            this.setState({ wrongInfo: true });
          } else {
            this.setState({ wrongInfo: false });
          }
          console.log(response);
          console.log(response.data);
        })
        .catch((error) => {
          console.log("error found", error);
        });
    };

    return (
      <div className="Signin">
        <div className="signin-wrapper">
          <h1>Sign IN</h1>
          <h4>Email</h4>
          <input
            onChange={handelSignEamil}
            className="inp-email common-inp"
            type="email"
          />
          <h4>Password</h4>
          <input
            onChange={handelSignPass}
            className="inp-text common-inp"
            type="text"
          />
          {this.state.redirection ? (
            <button onClick={handlSingInBtn} className="signin-btn">
              <Link to={"/"}>SIGNIN</Link>
            </button>
          ) : (
            <div className="wrong-info">
              <button onClick={handlSingInBtn} className="signin-btn">
                signin
              </button>
            </div>
          )}
          <Link to={"/signup"}>
            <h2>Sign Up</h2>
          </Link>
        </div>
        {this.state.wrongInfo ? (
          <div className="user-not-found">
            <h1>User Not Found</h1>
          </div>
        ) : (
          <div></div>
        )}
        {this.state.wrongCredentials ? (
          <div className="wrong-credential">
            <h1>Wrong Id or Password</h1>
          </div>
        ) : (
          <div className="wrong-credential-false"></div>
        )}
      </div>
    );
  }
}

export default Signin;
