import InputForm from "../Elements/Input/index.jsx";
import Button from "../Elements/Button/Button.jsx";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("username", event.target.username.value);
    localStorage.setItem("password", event.target.password.value);
    console.log(event.target.username.value);
    console.log(event.target.password.value);
    console.log("Ini Login Button");
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        name="username"
        label="Username"
        type="text"
        placeholder="Enter your username"
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
