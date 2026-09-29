import Sidebar from "./Sidebar";
import "./DashboardShell.css";

export default function DashboardShell({ role, active, onNavigate, onLogout, userName, children }) {
  return (
    <div className="dash-shell">
      <Sidebar role={role} active={active} onNavigate={onNavigate} onLogout={onLogout} userName={userName} />
      <main className="dash-main">{children}</main>
    </div>
  );
}
