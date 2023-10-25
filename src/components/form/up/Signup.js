import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from "axios";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpName: "",
      signUpEmail: "",
      signUpPass: "",
      redirection: false,
      exist: false,
    };
  }
  render() {
    const handelSignUpName = (e) => {
      this.setState({ signUpName: e.target.value });
    };
    const handelSignUpEmail = (e) => {
      this.setState({ signUpEmail: e.target.value });
    };
    const handelSignUpPass = (e) => {
      this.setState({ signUpPass: e.target.value });
    };

    const handelSignUpButton = (e) => {
      e.preventDefault();

      const { signUpName, signUpEmail, signUpPass } = this.state;
      if (
        signUpName.trim() !== "" &&
        signUpEmail.trim() !== "" &&
        signUpPass.trim() !== ""
      ) {
        const registerData = {
          name: signUpName,
          email: signUpEmail,
          password: signUpPass,
        };

        axios
          .post("https://nike-backend-5ara.onrender.com/signup", registerData)
          .then((response) => {
            const message = response.data.message;
            const exist = response.data.exist;
            const signUpName = response.data.signUpName;

            this.setState({ message });
            this.setState({ exist });
            this.setState({ signUpName });

            if (message === "success") {
              this.setState({ redirection: true });
              this.props.updateLoginState(true);
              this.props.setDiffrent(signUpName);
            }
            if (exist === "alreadyExist") {
              this.setState({ exist: true });
            }
            console.log(response.data);
          })
          .catch((err) => {
            console.log("register error found", err);
          });
      }
    };

    return (
      <div className="Signup">
        <div className="signup-wrapper">
          <h1>Sign UP</h1>
          <h4>Name</h4>
          <input
            onChange={handelSignUpName}
            className="common-in-inp name-inp"
            type="text"
          />
          <h4>Email</h4>
          <input
            onChange={handelSignUpEmail}
            className="common-in-inp email-inp"
            type="email"
          />
          <h4>Password</h4>
          <input
            onChange={handelSignUpPass}
            className="common-in-inp pass-inp"
            type="text"
          />
          {this.state.redirection ? (
            <button onClick={handelSignUpButton} className="signup-btn">
              <Link to={"/signin"}>Register</Link>
            </button>
          ) : (
            <button onClick={handelSignUpButton} className="signup-btn">
              Register
            </button>
          )}
          <Link to={"/signin"}>
            <h2>Sign In</h2>
          </Link>
        </div>
        {this.state.exist ? (
          <div className="exist-div">
            <h1>Email Already Exist </h1>
            <h1>try SignIn!!!</h1>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default Signup;
