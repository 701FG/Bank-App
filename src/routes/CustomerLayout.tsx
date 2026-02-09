import { Navigate, Route, Routes } from "react-router-dom";

const CustomerLayout = () => {
  return (
    <div className="shell">
      <div className="shell__header">
        <span className="eyebrow">Bank</span>
        <h1 className="title">Customer App</h1>
        <p className="subtitle">Phase 0 scaffold: wallet and activity landing soon.</p>
      </div>
      <div className="panel">
        <Routes>
          <Route path="" element={<div>Customer home placeholder.</div>} />
          <Route path="*" element={<Navigate to="/app" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default CustomerLayout;
