import { Link } from "react-router-dom";
import "./Login.css";
import LoginGoogle from "./GoogleLogin/GoogleLogin";
import LogoutGoogle from "./GoogleLogin/GoogleLogout";

const Login = () => {
 
  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
        <button className="googleloginButton">
            <LoginGoogle/>
          </button>
          <button className="googleloginButton"  >
            <LogoutGoogle/>
          </button>
         
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <form className="loginForm">
            <label>Email</label>
            <input type="text" placeholder="Enter your email..." />
            <label>Password</label>
            <input type="password" placeholder="Enter your password..." />
            <button className="loginButton">Login</button>
          </form>
          <button className="loginRegisterButton">
            <Link to="/register">Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
