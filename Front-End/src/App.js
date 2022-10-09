import React, { useState, useEffect } from "react";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Login/index";
import RegisterPage from "./Pages/Register";
import AdminPage from "./Pages/Admin/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserAdmin from "./Pages/Admin/Page/UserAdmin";
import Single from "./Pages/Admin/Page/Single/index";
import New from "./Pages/Admin/Page/New/index";
import { productInputs, userInputs } from "./Pages/Admin/formSource";
import ProductAdmin from "./Pages/Admin/Page/ProductAdmin";
import OrderAdmin from "./Pages/Admin/Page/OrderAdmin";
import ProductDetail from "./Pages/ProductDetail";
import "./App.scss";

function App() {
  // loadding
  const [isloading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <Router>
      <div>
        {isloading ? (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/admin" exact={true}>
              <Route index element={<AdminPage />} />
              <Route path="user">
                <Route index element={<UserAdmin />} />
                <Route path="single" element={<Single />} />
                <Route
                  path="new"
                  element={<New inputs={userInputs} title="Thêm thành viên" />}
                />
              </Route>
              <Route path="products">
                <Route index element={<ProductAdmin />} title="hello" />
                <Route path="single" element={<Single />} />
                <Route
                  path="new"
                  element={
                    <New inputs={productInputs} title="Add New Product" />
                  }
                />
              </Route>
              <Route path="order">
                <Route index element={<OrderAdmin />} />
              </Route>
            </Route>
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
