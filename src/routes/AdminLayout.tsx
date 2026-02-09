import { Navigate, Route, Routes } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="shell">
      <div className="shell__header">
        <span className="eyebrow">Admin</span>
        <h1 className="title">Admin Console</h1>
        <p className="subtitle">Phase 0 scaffold: core sections landing soon.</p>
      </div>
      <div className="panel">
        <Routes>
          <Route path="" element={<div>Admin dashboard placeholder.</div>} />
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminLayout;
