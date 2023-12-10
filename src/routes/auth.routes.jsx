import { Routes, Route, Navigate } from "react-router-dom";

import { SigIn } from "../pages/SigIn";
import { SigUp } from "../pages/SigUp";

export function AuthRoutes() {
  const user = localStorage.getItem("@whatevernotes:user");

  return (
    <Routes>
      <Route path="/" element={<SigIn />} />
      <Route path="/register" element={<SigUp />} />


      {!user && <Route path="*" element={<Navigate to="/" />} />}
    </Routes>
  );
}
