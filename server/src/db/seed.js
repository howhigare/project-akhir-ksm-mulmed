import 'dotenv/config'
import bcrypt from 'bcryptjs'
import { db } from './index.js'
import { users } from './schema.js'

const run = async () => {
  const adminPassword = await bcrypt.hash('admin123', 10)
  const kasirPassword = await bcrypt.hash('kasir123', 10)

  await db.insert(users).values([
    { name: 'Admin Toko', username: 'admin', password: adminPassword, role: 'admin' },
    { name: 'Kasir Satu', username: 'kasir01', password: kasirPassword, role: 'kasir' },
  ])

  console.log('Akun admin dan kasir berhasil dibuat!')
  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})