import AuthLayouts from "../components/Layout/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin.jsx";

const LoginPage = () => {
  return (
    <AuthLayouts tittle="Login" type="login">
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
