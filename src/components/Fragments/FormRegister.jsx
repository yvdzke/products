import InputForm from "../Elements/Input/index.jsx";
import Button from "../Elements/Button/Button.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FormRegister = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please Enter Username or Password");
      return;
    }

    const user = { username, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Account created! Thanks for joining us.");
    navigate("/login");
  };

  return (
    <form onSubmit={handleRegister}>
      <InputForm
        onChange={(e) => setUsername(e.target.value)}
        name="username"
        label="Username"
        type="username"
        placeholder="Enter your email"
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
        Register
      </Button>
    </form>
  );
};
export default FormRegister;
