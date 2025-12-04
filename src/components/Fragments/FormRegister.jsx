import InputForm from "../Elements/Input/index.jsx";

const FormRegister = () => {
  return (
    <form action="GET">
      <InputForm
        name="fullname"
        label="Fullname"
        type="text"
        placeholder="Enter your fullname"
      />
      <InputForm
        name="username"
        label="Username"
        type="username"
        placeholder="Enter your email"
      />
      <InputForm
        name="password"
        label="Password"
        type="password"
        placeholder="****"
      />
      <InputForm
        name="confirmpassword"
        label="Confirm Password"
        type="password"
        placeholder="****"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
      >
        Register
      </button>
    </form>
  );
};
export default FormRegister;
