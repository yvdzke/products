import Button from "../Elements/Button/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="max-w-sm w-full bg-gray-800 border border-gray-700 rounded-lg mx-2 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

// Nested Header
const Header = (props) => {
  const { img, name } = props;
  return (
    <a href="#">
      <img src={img} alt={name} className="p-8 rounded-t-md" />
    </a>
  );
};

// Nested Body
const Body = (props) => {
  const { name, children } = props;

  return (
    <div className="px-5 pb-5 h-full">
      <h5 className="text-xl font-semibold text-white tracking-tight">
        {name}
      </h5>
      <p className="text-s text-white">{children}</p>
    </div>
  );
};

// Nested Footer
const Footer = (props) => {
  const { price, btntext, handleAddToCart, id } = props;
  return (
    <div className="flex items-center justify-between pb-5 px-5 ">
      <span className="text-3xl font-bold text-white">
        {price.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}
      </span>
      <Button
        onClick={() => handleAddToCart(id)}
        varian="bg-blue-600 text-white font-bold p-2 rounded-md"
      >
        {btntext}
      </Button>
    </div>
  );
};

// Nested
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
