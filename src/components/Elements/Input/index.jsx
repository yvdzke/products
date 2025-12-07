import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef((props, ref) => {
  const { name, label, placeholder, type, onChange } = props;
  return (
    <div className="mb-4">
      <Label htmlfor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        ref={ref}
      ></Input>
    </div>
  );
});

export default InputForm;
