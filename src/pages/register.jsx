import AuthLayouts from "../components/Layout/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister.jsx";

const RegisterPage = () => {
  return (
    <AuthLayouts tittle="Register" type="register">
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
