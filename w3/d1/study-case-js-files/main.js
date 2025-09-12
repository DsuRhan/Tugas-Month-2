// File main.js: import keduanya dan tampilkan hasil.
import { luasPersegi } from "./persegi.js";
import { luasLingkaran } from "./lingkaran.js"
console.log(`Luas persegi dengan sisi 15 cm adalah ${luasPersegi(15)}`);
console.log(`Luas lingkaran dengan jari jari 9 cm adalah ${luasLingkaran(9)}`);
// File main.js: pakai fungsi besar("belajar modular").
import { besar } from "./teks.js";
console.log(`Teks "password" jika di tulis dalam huruf besar adalah ${besar("password")}`);
// File main.js: import dan tampilkan jam sekarang.
import { jamSekarang } from "./waktu.js";
console.log(`Jam sekarang adalah jam`, jamSekarang());
// File main.js: panggil dengan nama bebas.
import yahalo from "./salam.js";
console.log(yahalo("Rayhan"));
// File main.js: import keduanya dan tampilkan.
import cekVersi, { hitung } from "./utils.js";
console.log(cekVersi);
console.log(`13 + 38 adalah ${hitung(13, 38)}`);
