import { useState } from "react";
import "./LoginPage.css";
// Ganti path import di bawah sesuai lokasi file ini di project-mu.
// Kalau LoginPage.jsx diletakkan di src/pages/, path ini sudah pas.
import heroImage from "../assets/images/img1.jpg";

const EyeIcon = ({ open }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    {open ? (
      <>
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ) : (
      <>
        <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a19.4 19.4 0 0 1 4.22-5.06M9.9 4.24A10.6 10.6 0 0 1 12 4c7 0 11 7 11 7a19.5 19.5 0 0 1-2.16 3.19" />
        <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
        <path d="M1 1l22 22" />
      </>
    )}
  </svg>
);

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function LoginPage() {
  const [role, setRole] = useState("kasir"); // "kasir" | "admin"
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ identifier: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      // TODO: sambungkan ke endpoint server-mu, contoh:
      // const res = await fetch("/api/auth/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ ...form, role }),
      // });
      // if (!res.ok) throw new Error("Login gagal");
      // const data = await res.json();
      await new Promise((r) => setTimeout(r, 700)); // simulasi request
    } catch (err) {
      setError("Username atau kata sandi salah. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-screen">
      <div className="login-visual">
        <img src={heroImage} alt="" className="login-visual__image" aria-hidden="true" />
        <div className="login-visual__overlay" />

        <div className="login-visual__content">
          <div className="login-visual__brand">
            <span className="login-visual__mark">POS</span>
            <span className="login-visual__brand-text">POS&nbsp;KASIR</span>
          </div>

          <h1 className="login-visual__headline">
            Semua transaksi,
            <br />
            satu layar.
          </h1>
          <p className="login-visual__subtext">
            Kelola penjualan, stok, dan laporan harian dari satu tempat
            bersama POS Kasir!
          </p>

          <div className="receipt-card" aria-hidden="true">
            <div className="receipt-card__row receipt-card__row--head">
              <span>Struk #0421</span>
              <span>29 Sep</span>
            </div>
            <div className="receipt-card__divider" />
            <div className="receipt-card__row">
              <span>Mie goreng</span>
              <span>18.000</span>
            </div>
            <div className="receipt-card__row">
              <span>Roti Bakar</span>
              <span>12.000</span>
            </div>
            <div className="receipt-card__divider" />
            <div className="receipt-card__row receipt-card__row--total">
              <span>Total</span>
              <span>Rp 30.000</span>
            </div>
          </div>
        </div>
      </div>

      <div className="login-panel">
        <div className="login-panel__inner">
          <div className="login-panel__mark-mobile">
            <span className="login-visual__mark">POS</span>
            <span className="login-visual__brand-text">POS&nbsp;KASIR</span>
          </div>

          <h2 className="login-panel__title">Login</h2>
          <p className="login-panel__subtitle">Pilih role kamu untuk melanjutkan</p>

          <div className="role-switch" role="tablist" aria-label="Pilih peran">
            <button
              type="button"
              role="tab"
              aria-selected={role === "kasir"}
              className={`role-switch__btn ${role === "kasir" ? "is-active" : ""}`}
              onClick={() => setRole("kasir")}
            >
              Kasir
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={role === "admin"}
              className={`role-switch__btn ${role === "admin" ? "is-active" : ""}`}
              onClick={() => setRole("admin")}
            >
              Admin
            </button>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <label className="field">
              <span className="field__label">
                {role === "kasir" ? "Username" : "Email"}
              </span>
              <input
                type="text"
                className="field__input"
                placeholder={role === "kasir" ? "cth. kasir01" : "cth. admin@toko.com"}
                value={form.identifier}
                onChange={handleChange("identifier")}
                autoComplete="username"
                required
              />
            </label>

            <label className="field">
              <span className="field__label">Kata Sandi</span>
              <div className="field__input-wrap">
                <input
                  type={showPassword ? "text" : "password"}
                  className="field__input"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange("password")}
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className="field__eye"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
                >
                  <EyeIcon open={showPassword} />
                </button>
              </div>
            </label>

            <div className="login-form__row">
              <label className="checkbox">
                <input type="checkbox" />
                <span>Ingat saya</span>
              </label>
              <a href="#" className="link">Lupa kata sandi?</a>
            </div>

            {error && <p className="form-error">{error}</p>}

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Memproses…" : `Masuk sebagai ${role === "kasir" ? "Kasir" : "Admin"}`}
              {!loading && <ArrowIcon />}
            </button>
          </form>

          <p className="login-panel__footer">
            Butuh akun baru? Hubungi admin toko untuk didaftarkan.
          </p>
        </div>
      </div>
    </div>
  );
}
