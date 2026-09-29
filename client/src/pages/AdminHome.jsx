import DashboardShell from "./DashboardShell";
import { IconTrendUp, IconReceipt, IconBox, IconAlert, IconArrow } from "./Icons";
import "./AdminHome.css";

// Data contoh — ganti dengan hasil fetch dari server (mis. /api/dashboard/admin)
const stats = [
  { label: "Penjualan Hari Ini", value: "Rp 2.450.000", icon: IconTrendUp },
  { label: "Transaksi", value: "38", icon: IconReceipt },
  { label: "Produk Terjual", value: "112", icon: IconBox },
  { label: "Stok Menipis", value: "5", icon: IconAlert, tone: "warn" },
];

const recentTransactions = [
  { id: "#0425", kasir: "Rina", total: "Rp 45.000", waktu: "10:42" },
  { id: "#0424", kasir: "Budi", total: "Rp 128.000", waktu: "10:31" },
  { id: "#0423", kasir: "Rina", total: "Rp 22.000", waktu: "10:18" },
  { id: "#0422", kasir: "Sari", total: "Rp 76.500", waktu: "09:57" },
  { id: "#0421", kasir: "Budi", total: "Rp 30.000", waktu: "09:40" },
];

const lowStock = [
  { nama: "Kopi Susu 250ml", sisa: 4 },
  { nama: "Roti Bakar Coklat", sisa: 6 },
  { nama: "Air Mineral 600ml", sisa: 8 },
  { nama: "Teh Melati", sisa: 3 },
];

export default function AdminHome({ userName = "Admin", onNavigate, onLogout }) {
  return (
    <DashboardShell role="admin" active="dashboard" userName={userName} onNavigate={onNavigate} onLogout={onLogout}>
      <div className="page-head">
        <div>
          <h1 className="page-head__title">Halo, {userName} 👋</h1>
          <p className="page-head__subtitle">Selasa, 29 September 2026 — berikut ringkasan tokomu hari ini.</p>
        </div>
        <div className="page-head__actions">
          <button type="button" className="btn-outline" onClick={() => onNavigate?.("produk")}>
            + Tambah Produk
          </button>
          <button type="button" className="btn-solid" onClick={() => onNavigate?.("laporan")}>
            Lihat Laporan
          </button>
        </div>
      </div>

      <section className="stat-grid">
        {stats.map(({ label, value, icon: Icon, tone }) => (
          <div className={`stat-card ${tone === "warn" ? "stat-card--warn" : ""}`} key={label}>
            <div className="stat-card__icon">
              <Icon width={19} height={19} />
            </div>
            <div>
              <p className="stat-card__value">{value}</p>
              <p className="stat-card__label">{label}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="content-grid">
        <div className="panel">
          <div className="panel__head">
            <h2 className="panel__title">Transaksi Terbaru</h2>
            <button type="button" className="panel__link" onClick={() => onNavigate?.("transaksi")}>
              Lihat semua <IconArrow width={14} height={14} />
            </button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Kasir</th>
                <th>Waktu</th>
                <th className="table__right">Total</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((t) => (
                <tr key={t.id}>
                  <td className="mono">{t.id}</td>
                  <td>{t.kasir}</td>
                  <td className="mono muted-text">{t.waktu}</td>
                  <td className="table__right mono">{t.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="panel">
          <div className="panel__head">
            <h2 className="panel__title">Stok Menipis</h2>
            <button type="button" className="panel__link" onClick={() => onNavigate?.("produk")}>
              Kelola produk <IconArrow width={14} height={14} />
            </button>
          </div>
          <ul className="stock-list">
            {lowStock.map((item) => (
              <li className="stock-list__item" key={item.nama}>
                <span>{item.nama}</span>
                <span className="stock-list__qty">sisa {item.sisa}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </DashboardShell>
  );
}
