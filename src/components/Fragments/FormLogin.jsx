import InputForm from "../Elements/Input/index.jsx";
import Button from "../Elements/Button/Button.jsx";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const FormLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please Enter Your Details");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("");
      return;
    }
    if (user.username === username && user.password === password) {
      localStorage.setItem("isLogin", "true");
      navigate("/products");
    } else {
      alert("Username or password is incorrect");
    }
  };

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        onChange={(e) => setUsername(e.target.value)}
        name="username"
        label="Username"
        type="text"
        placeholder="Enter your username"
        ref={emailRef}
      />
      <InputForm
        onChange={(e) => setPassword(e.target.value)}
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
