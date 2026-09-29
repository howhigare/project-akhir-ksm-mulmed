// Jalankan sekali: node hash-password.js
// Lalu copy hasil hash-nya, dan UPDATE manual ke kolom password di database.

import bcrypt from "bcryptjs";

const plainPassword = "admin123"; // password yang mau kamu pakai login
const username = "admin"; // username user yang mau diperbaiki

const hash = await bcrypt.hash(plainPassword, 10);

console.log("Hash:", hash);
console.log("\nJalankan SQL ini di database:");
console.log(`UPDATE users SET password = '${hash}' WHERE username = '${username}';`);
