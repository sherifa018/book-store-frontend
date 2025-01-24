import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  console.log(token);

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, []);

  const handleLogin = () => {
    if (!username || !password) {
      return;
    }
    console.log(username);
    console.log(password);

    axios
      .post("https://book-store-backend-topaz-one.vercel.app/user/login", {
        username,
        password,
      })
      .then((response) => {
        const { username } = response.data;
        console.log("Username:", username);

        // تخزين البيانات في Local Storage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", response.data.username);

        // عرض رسالة نجاح

        // الانتقال إلى الصفحة الرئيسية
        navigate("/home", { state: { username } });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <h1 className="mx-4 my-4">Login</h1>
      <div className="p-4">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button className="btn btn-primary mt-3" onClick={handleLogin}>
          Login
        </button>
        <div className="mt-3">
          <p className="mx-4">
            Don not have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
