import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { eq } from 'drizzle-orm'
import { db } from '../db/index.js'
import { users } from '../db/schema.js'

export const login = async (req, res) => {
  const { username, password, role } = req.body

  if (!username || !password || !role) {
    return res.status(400).json({ message: 'Username, password, dan role wajib diisi' })
  }

  const [user] = await db.select().from(users).where(eq(users.username, username))
  if (!user) {
    return res.status(401).json({ message: 'Username atau password salah' })
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    return res.status(401).json({ message: 'Username atau password salah' })
  }

  if (user.role !== role) {
    return res.status(403).json({ message: `Akun ini bukan ${role}` })
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  )

  res.json({
    token,
    user: { id: user.id, name: user.name, username: user.username, role: user.role },
  })
}