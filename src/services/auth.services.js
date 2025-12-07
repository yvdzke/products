import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (data, callBack) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      callBack(true, res.data.token);
    })
    .catch((error) => {
      callBack(false, error);
    });
};

export const getUsername = (token) => {
  const decoded = jwtDecode(token);
  console.log(decoded);
  return decoded.user;
};
