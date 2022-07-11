import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./contexts/Context";
import { useState } from "react";
import Home from "./routes/Home"
import RegisterScreen from "./routes/RegisterScreen";
import Login from "./routes/Login";
import Checkout from "./routes/Checkout";
import Payment from "./routes/Payment";
import Products from "./routes/Products";

export default function App() {
    const [data, setData] = useState([{}]);
    return (
        <Context.Provider value={{ data, setData }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<RegisterScreen />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/pagamento" element={<Payment />} />
                    <Route path="/produtos" element={<Products />} />
                </Routes>
            </BrowserRouter>
        </Context.Provider>
    )
}
