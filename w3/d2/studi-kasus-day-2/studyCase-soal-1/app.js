import { tambahNama, hapusNama, tampilkanNama } from "./names.js";
console.log(`Daftar Nama: ${tampilkanNama()}`);
tambahNama("Ali");
console.log(`Daftar Nama: ${tampilkanNama()}`);
tambahNama("Budi");
console.log(`Daftar Nama: ${tampilkanNama()}`);
hapusNama("Ali");
console.log(`Daftar Nama: ${tampilkanNama()}`);


import { tebak } from "./game.js";

console.log(tebak(5)); // hasil tergantung target
