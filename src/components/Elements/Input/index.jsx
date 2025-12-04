import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { name, label, placeholder, type } = props;
  return (
    <div className="mb-4">
      <Label htmlfor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder}></Input>
    </div>
  );
};

export default InputForm;
