import GlobalStyle from "./GlobalStyle";
import Homepage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInPage from "./Pages/SignInPage";
import RegisterPage from "./Pages/RegisterPage";
import ProfilePage from "./Pages/ProfilePage";
import ShippingPage from "./Pages/ShippingPage";
import PaymentPage from "./Pages/PaymentPage";
import PlaceOrderPage from "./Pages/PlaceOrderPage";
import OrderDetailsPage from "./Pages/OrderDetailsPage";
import AdminUsersScreen from "./Pages/AdminUsersScreen";
import UserEditPage from "./Pages/UserEditPage";
import ProductEditPage from "./Pages/ProductEditPage";
import AdminProductEditPage from "./Pages/AdminProductEditPage";
import AdminOrderPage from "./Pages/AdminOrderPage";
import ReviewScreen from "./Pages/ReviewScreen";
import SearchPage from "./Pages/SearchPage";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/placeorder" element={<PlaceOrderPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          {["/cart/:id", "/cart"].map((path) => (
            <Route path={path} element={<CartPage />} />
          ))}

          <Route path="/signin" element={<SignInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/orders/:id" element={<OrderDetailsPage />} />
          <Route path="/admin/users" element={<AdminUsersScreen />} />
          <Route path="/admin/users/edit/:id" element={<UserEditPage />} />
          <Route path="/admin/products" element={<ProductEditPage />} />
          <Route
            path="/admin/products/:id/edit"
            element={<AdminProductEditPage />}
          />
          <Route path="/admin/orders" element={<AdminOrderPage />} />
          <Route path="/products/:id/reviews" element={<ReviewScreen />} />
          <Route path="/search/:keyword" element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
