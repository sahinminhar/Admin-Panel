import Button from "react-bootstrap/Button";
import axios from "axios";
import swal from "sweetalert";
import { useState } from "react";

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const getEmail = (event) => {
    setEmail (event.target.value)
  }
  const getPassword = (event) => {
    setPassword (event.target.value)
  }
  const validateLogin = () => {
    let formData = {
      email: email,
      password: password,
    };
    axios.post("http://localhost:8005/user/login", formData)
      .then(function (response) {
        console.log("response", response.data);
        if (response.data.status === 1) {
          localStorage.setItem("authToken", response.data.authToken);
          swal("Success","login successfully","success");
          window.location.href = "/userList";
        }
      })
      .catch(function (error) {
        swal("Oops!", error.response.data.message, "error");
      });
  };
  return (
<section id="login-section">
            <form id="login-form">
                <div className="form-header">
                    <h1 className="form-title">Login</h1>
                </div>
                <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                        type="email"
                        id="email-input"
                        className="form-control"
                        placeholder="Email Address"
                        onChange={getEmail}
                    />
                </div>
                <div className="form-group" id="password-group">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        id="password-input"
                        className="form-control"
                        placeholder="Password"
                        onChange={getPassword}
                    />
                </div>
                <div className="form-options">
                    <input type="checkbox" id="remember-checkbox" className="form-checkbox" />
                    <label className="form-checkbox-label">Remember Password</label>
                </div>
                <div className="form-actions">
                    <Button id="forgot-password-btn" className="action-button" variant="link">
                        Forgot Password?
                    </Button>
                    <Button
                        id="login-btn"
                        className="action-button"
                        variant="primary"
                        onClick={validateLogin}
                    >
                        Login
                    </Button>
                </div>
                <div className="form-footer">
                    <Button id="signup-btn" className="action-button" variant="link">
                        Need an account? Sign up!
                    </Button>
                </div>
            </form>
        </section>
  );
};

export default Login;