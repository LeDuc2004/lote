
import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./admin/Admin";
import Home from "./pages/Home";
import Erros from "./components/Erros";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="admin" element={<Admin />}>   </Route>
        <Route path="*" element={<Erros />}> </Route>
      </Routes>
    </>
  );
}
