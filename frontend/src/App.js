import GlobalStyle from "./GlobalStyle";
import Homepage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart/:id" element={<CartPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
