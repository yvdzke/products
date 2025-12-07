import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name, onChange } = props;
  return (
    <>
      <input
        type={type}
        className="text-sm rounded w-full py-2 px-3 mt-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        ref={ref}
      />
    </>
  );
});

export default Input;
