import axios from "axios";

const getProducts = (callback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
};
export { getProducts };
