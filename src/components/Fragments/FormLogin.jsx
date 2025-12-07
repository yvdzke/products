import InputForm from "../Elements/Input/index.jsx";
import Button from "../Elements/Button/Button.jsx";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { login } from "../../services/auth.services.js";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        navigate("/products");
      } else {
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }
    });

    // if (!username || !password) {
    //   alert("Please Enter Your Details");
    //   return;
    // }

    // const user = JSON.parse(localStorage.getItem("user"));
    // if (!user) {
    //   alert("");
    //   return;
    // }
    // if (user.username === username && user.password === password) {
    //   localStorage.setItem("isLogin", "true");
    //   navigate("/products");
    // } else {
    //   alert("Username or password is incorrect");
    // }
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      {loginFailed && (
        <div className="mb-4 p-2 bg-red-200 text-red-800 border border-red-400 rounded">
          {loginFailed}
        </div>
      )}
      <InputForm
        name="username"
        label="Username"
        type="text"
        placeholder="Enter your username"
        ref={usernameRef}
      />
      <InputForm
        name="password"
        label="Password"
        type="password"
        placeholder="****"
      />
      <Button
        type="submit"
        varian="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
      >
        Login
      </Button>
    </form>
  );
};
export default FormLogin;
