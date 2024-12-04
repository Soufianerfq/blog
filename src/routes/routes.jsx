import Blog from "../components/Blog";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home";

const Routers = function () {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="blog/:id" element={<Blog />} />
    </Routes>
  );
};

export default Routers;
