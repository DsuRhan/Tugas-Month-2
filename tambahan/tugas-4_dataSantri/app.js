import siswa from "./data.js";
import {
    tambahSiswa,
    tampilkanSiswa,
    updateSiswa,
    hapusSiswa,
    cariSiswa,
    rataRataNilai
} from "./function.js";

console.log("=== Data Awal ===");
tampilkanSiswa();

// Tambah siswa baru
console.log("\n=== Tambah Siswa ===");
tambahSiswa("Citra", "JavaScript Dasar", 95);
tampilkanSiswa();

// Update data siswa
console.log("\n=== Update Siswa (ID:2) ===");
updateSiswa(2, { nama: "Budi Santoso", nilai: 92 });
tampilkanSiswa();

// Hapus siswa
console.log("\n=== Hapus Siswa (ID:1) ===");
hapusSiswa(1);
tampilkanSiswa();

// Cari siswa
console.log("\n=== Cari Siswa (nama mengandung 'ci') ===");
console.log(cariSiswa("ci"));

// Hitung rata-rata nilai
console.log("\n=== Rata-rata Nilai ===");
console.log("Rata-rata:", rataRataNilai());
