import { Navigate, Route, Routes } from "react-router-dom";

const TellerLayout = () => {
  return (
    <div className="shell">
      <div className="shell__header">
        <span className="eyebrow">Teller</span>
        <h1 className="title">Teller Workspace</h1>
        <p className="subtitle">Phase 0 scaffold: identify flow landing soon.</p>
      </div>
      <div className="panel">
        <Routes>
          <Route path="" element={<div>Teller landing placeholder.</div>} />
          <Route path="*" element={<Navigate to="/teller" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default TellerLayout;
