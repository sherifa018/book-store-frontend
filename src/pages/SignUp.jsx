import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SERVER_URL } from "../../config";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailSent, setemailSent] = useState(false);

  const handleSignUp = () => {
    if (!username || !email || !password) {
      return;
    }
    axios
      .post(`${SERVER_URL}/user/signup`, {
        username,
        email,
        password,
      })
      .then(() => {
        setemailSent(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="p-4">
      <h1 className="mx-4 my-4">Sign Up</h1>
      <div className="p-4">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button className="btn btn-primary mt-3" onClick={handleSignUp}>
          Sign Up
        </button>
        {emailSent && (
          <p
            style={{
              color: "red",
              padding: "10px",
            }}
          >
            VERIFICATION EMAIL HAS BEEN SENT
          </p>
        )}
        <div>
          <p className="mx-4 ">
            Already have an account ?<Link to="/"> Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
