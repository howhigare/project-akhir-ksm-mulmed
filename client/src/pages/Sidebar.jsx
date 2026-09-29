import {
  IconHome,
  IconBox,
  IconReceipt,
  IconChart,
  IconUsers,
  IconPlus,
  IconLogOut,
} from "./Icons";

const NAV_BY_ROLE = {
  admin: [
    { key: "dashboard", label: "Dashboard", icon: IconHome },
    { key: "produk", label: "Produk", icon: IconBox },
    { key: "transaksi", label: "Transaksi", icon: IconReceipt },
    { key: "laporan", label: "Laporan", icon: IconChart },
    { key: "kasir", label: "Kelola Kasir", icon: IconUsers },
  ],
  kasir: [
    { key: "dashboard", label: "Dashboard", icon: IconHome },
    { key: "transaksi-baru", label: "Transaksi Baru", icon: IconPlus },
    { key: "riwayat", label: "Riwayat", icon: IconReceipt },
  ],
};

export default function Sidebar({ role, active, onNavigate, onLogout, userName }) {
  const items = NAV_BY_ROLE[role] ?? NAV_BY_ROLE.kasir;

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <span className="sidebar__mark">POS</span>
        <span className="sidebar__brand-text">POS&nbsp;KASIR</span>
      </div>

      <nav className="sidebar__nav">
        {items.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            type="button"
            className={`sidebar__link ${active === key ? "is-active" : ""}`}
            onClick={() => onNavigate?.(key)}
          >
            <Icon width={18} height={18} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar__footer">
        <div className="sidebar__user">
          <span className="sidebar__avatar">{(userName || "?").charAt(0).toUpperCase()}</span>
          <div className="sidebar__user-info">
            <span className="sidebar__user-name">{userName}</span>
            <span className="sidebar__user-role">{role === "admin" ? "Admin" : "Kasir"}</span>
          </div>
        </div>
        <button type="button" className="sidebar__logout" onClick={onLogout}>
          <IconLogOut width={17} height={17} />
          <span>Keluar</span>
        </button>
      </div>
    </aside>
  );
}
