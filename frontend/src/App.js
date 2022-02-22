import GlobalStyle from "./GlobalStyle";
import Homepage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
