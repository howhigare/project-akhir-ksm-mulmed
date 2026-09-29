import './PilihRole.css'

const ROLES = [
  {
    id: 'admin',
    nama: 'Admin',
    deskripsi: 'Kelola produk, stok, karyawan, dan laporan penjualan.',
    ikon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20V10m6 10V4m6 16v-7m4 7H2" />
      </svg>
    ),
  },
  {
    id: 'kasir',
    nama: 'Kasir',
    deskripsi: 'Catat pesanan, terima pembayaran, dan cetak struk.',
    ikon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3zm3 5h6m-6 4h6" />
      </svg>
    ),
  },
]

export default function PilihRole({ onPilih }) {
  return (
    <main className="role-page">
      <section className="struk" aria-labelledby="judul-role">
        <header className="struk-head">
          <p className="toko">POS Kasir</p>
          <h1 id="judul-role">Login sebagai siapa?</h1>
          <p className="sub">Pilih peran kamu untuk melanjutkan :))) </p>
        </header>

        <div className="garis-putus" aria-hidden="true" />

        <div className="role-list">
          {ROLES.map((role) => (
            <button
              key={role.id}
              type="button"
              className="role-btn"
              onClick={() => onPilih(role.id)}
            >
              <span className="role-ikon">{role.ikon}</span>
              <span className="role-teks">
                <strong>{role.nama}</strong>
                <span>{role.deskripsi}</span>
              </span>
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}