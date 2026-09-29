import DashboardShell from "./DashboardShell";
import { IconPlus, IconClock, IconTrendUp, IconReceipt } from "./Icons";
import "./KasirHome.css";

// Data contoh — ganti dengan hasil fetch dari server (mis. /api/dashboard/kasir)
const ringkasan = [
  { label: "Transaksi Dilayani", value: "14", icon: IconReceipt },
  { label: "Total Penjualan", value: "Rp 612.000", icon: IconTrendUp },
];

const riwayat = [
  { id: "#0425", total: "Rp 45.000", waktu: "10:42" },
  { id: "#0420", total: "Rp 18.000", waktu: "09:15" },
  { id: "#0417", total: "Rp 96.000", waktu: "08:52" },
  { id: "#0413", total: "Rp 27.500", waktu: "08:30" },
];

export default function KasirHome({ userName = "Kasir", onNavigate, onLogout }) {
  return (
    <DashboardShell role="kasir" active="dashboard" userName={userName} onNavigate={onNavigate} onLogout={onLogout}>
      <div className="page-head">
        <div>
          <h1 className="page-head__title">Halo, {userName} 👋</h1>
          <p className="page-head__subtitle">
            <IconClock width={14} height={14} /> Shift 08.00 – 16.00 · Selasa, 29 September 2026
          </p>
        </div>
      </div>

      <button type="button" className="cta-card" onClick={() => onNavigate?.("transaksi-baru")}>
        <div>
          <p className="cta-card__eyebrow">Mulai sekarang</p>
          <h2 className="cta-card__title">Transaksi Baru</h2>
          <p className="cta-card__subtitle">Buka layar kasir untuk mulai melayani pembeli</p>
        </div>
        <span className="cta-card__icon">
          <IconPlus width={26} height={26} />
        </span>
      </button>

      <section className="summary-grid">
        {ringkasan.map(({ label, value, icon: Icon }) => (
          <div className="summary-card" key={label}>
            <div className="summary-card__icon">
              <Icon width={18} height={18} />
            </div>
            <div>
              <p className="summary-card__value">{value}</p>
              <p className="summary-card__label">{label}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="panel">
        <div className="panel__head">
          <h2 className="panel__title">Riwayat Transaksimu Hari Ini</h2>
          <button type="button" className="panel__link" onClick={() => onNavigate?.("riwayat")}>
            Lihat semua
          </button>
        </div>
        <ul className="history-list">
          {riwayat.map((r) => (
            <li className="history-list__item" key={r.id}>
              <span className="mono">{r.id}</span>
              <span className="mono muted-text">{r.waktu}</span>
              <span className="mono history-list__total">{r.total}</span>
            </li>
          ))}
        </ul>
      </section>
    </DashboardShell>
  );
}
