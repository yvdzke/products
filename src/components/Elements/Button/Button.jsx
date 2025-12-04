const Button = (props) => {
  const { type = "button", children, varian, onClick = () => {} } = props;
  return (
    <button type={type} onClick={onClick} className={`${varian}`}>
      {children}
    </button>
  );
};

export default Button;
