import { Routes, Route } from "react-router-dom";

import {  SigIn } from "../pages/SigIn";
import { SigUp } from "../pages/SigUp";


export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SigIn/>} />
      <Route path="/register" element={<SigUp/>} />

    </Routes>
  );
}
