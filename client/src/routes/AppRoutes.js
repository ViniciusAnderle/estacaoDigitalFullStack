import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import Home from "../pages/Home/Home";
import ResultadoProduto from "../pages/ResultadoProduto"
import Cart from "../pages/CartFinal/cartFinal";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ResultadoProduto/:id" element={<ResultadoProduto/>}/>
        <Route path="/cart"teste element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}
