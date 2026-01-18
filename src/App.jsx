import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Products from "./components/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";


import AdminPanel from "./admin/AdminPanel";
import AdminLogin from "./admin/AdminLogin";
import AdminRoute from "./admin/AdminRoute";
import AdminAddProduct from "./admin/AdminAddProduct";
import AdminProduct from "./admin/AdminProduct";

function App() {
  return (
    <Routes>

      {/* USER ROUTES */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <HeroSection />
            <Products />
          </>
        }
      />

      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />

      {/* USER AUTH ROUTES ✅ */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ADMIN ROUTES */}
      <Route path="/admin/login" element={<AdminLogin />} />

      <Route
        path="/admin/dashboard"
        element={
          <AdminRoute>
            <AdminPanel />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/add-product"
        element={
          <AdminRoute>
            <div className="mb-12">
              <AdminAddProduct />
            </div>
            <div>
              <AdminProduct />
            </div>
          </AdminRoute>
        }
      />
    </Routes>
  );
}

export default App;
