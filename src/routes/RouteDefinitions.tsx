import { Route, Routes } from "react-router-dom";
import Homepage from "../components/Homepage/Homepage";
import Products from "../pages/products/Products";
import Orders from "../pages/orders/Orders";
import Basket from "../pages/basket/Basket";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import ChangePassword from "../pages/changePassword/ChangePassword";
type Props = {};

const RouteDefinitions = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/products" element={<Products />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/basket" element={<Basket />} />
    </Routes>
  );
};

export default RouteDefinitions;
