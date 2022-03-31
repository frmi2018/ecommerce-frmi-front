import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import PrivateRoute from "./auth/PrivateRoute";
import Dashboard from "./user/UserDashboard";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./user/AdminDashboard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/user/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/create/category"
          element={
            <AdminRoute>
              <AddCategory />
            </AdminRoute>
          }
        />
        <Route
          path="/create/product"
          element={
            <AdminRoute>
              <AddProduct />
            </AdminRoute>
          }
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
