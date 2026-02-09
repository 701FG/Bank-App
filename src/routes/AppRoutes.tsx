import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import AdminLayout from "./AdminLayout";
import TellerLayout from "./TellerLayout";
import CustomerLayout from "./CustomerLayout";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="/teller/*" element={<TellerLayout />} />
      <Route path="/app/*" element={<CustomerLayout />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
