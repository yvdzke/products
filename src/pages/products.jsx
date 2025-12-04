import CardProduct from "../components/Fragments/CardProduct";
import CardImg from "../assets/bg-1.jpg";
import Button from "../components/Elements/Button/Button";
import { useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import { IoMdCart } from "react-icons/io";
import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 2000000,
    img: CardImg,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          fuga voluptatem error reiciendis assumenda hic? Voluptas consequatur
          culpa voluptatibus error. Quia similique facilis dicta maxime dolores
          ex doloremque accusamus libero.`,
  },
  {
    id: 2,
    name: "Sepatu Baru",
    price: 10000,
    img: CardImg,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          fuga voluptatem error reiciendis assumenda hic? Voluptas consequatur
          culpa voluptatibus error. Quia similique facilis dicta maxime dolores
          ex doloremque accusamus libero.`,
  },
  {
    id: 3,
    name: "Sepatu Baru",
    price: 500000,
    img: CardImg,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          fuga voluptatem error reiciendis assumenda hic? Voluptas consequatur
          culpa voluptatibus error. Quia similique facilis dicta maxime dolores
          ex doloremque accusamus libero.`,
  },
];

const username = localStorage.getItem(`username`);

const ProductPage = () => {
  // Logout Button
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    navigate("/login");
  };

  // useState
  const [cart, setCart] = useState([]);

  // Handle Add To Cart
  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  // Render Area
  return (
    <>
      <div className="flex justify-end h-12 bg-blue-600 items-center px-5 ">
        <p className="font-bold text-white">{username}</p>
        <Button
          onClick={handleLogout}
          varian="bg-black ml-5  text-white py-1 rounded-md px-3 hover:bg-red-500"
        >
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header img={product.img} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
                btntext="Add To Cart"
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl ml-5 font-bold text-blue-600">
            <IoMdCart />
          </h1>
          <table className="table-auto text-left border-separate border-spacing-x-5">
            {products.length > 0 && cart.length > 0 && (
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
            )}

            <tbody>
              {products.length === 0 || cart.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-4 opacity-70">
                    Loading...
                  </td>
                </tr>
              ) : (
                cart.map((item) => {
                  const product = products.find((p) => p.id === item.id);

                  if (!product) {
                    return (
                      <tr key={item.id}>
                        <td colSpan="4" className="text-red-400">
                          Product not found
                        </td>
                      </tr>
                    );
                  }

                  const price = Number(product.price) || 0;
                  const total = item.qty * price;

                  return (
                    <tr key={item.id}>
                      <td>{product.name}</td>

                      <td>
                        {price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </td>

                      <td className="text-center">{item.qty}</td>

                      <td>
                        {total.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center mb-2">
        <Counter></Counter>
      </div>
    </>
  );
};

export default ProductPage;
