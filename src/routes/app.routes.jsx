import { Routes, Route,Navigate } from "react-router-dom";

import { Details } from "../pages/Details";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { New } from "../pages/New";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/Details/:id" element={<Details/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="New" element={<New/>} />
      <Route path="*" element= {<Navigate to="/"/> }/>
      
    </Routes>
  );
}
