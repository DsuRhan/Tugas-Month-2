import siswa from "./data.js";

// Auto increment ID
let nextId = siswa.length + 1;

// 1. Tambah Siswa
export function tambahSiswa(nama, kelas, nilai) {
    const newSiswa = { id: nextId++, nama, kelas, nilai };
    siswa.push(newSiswa);
    return newSiswa;
}

// 2. Tampilkan Semua Siswa
export function tampilkanSiswa() {
    siswa.forEach(({ id, nama, kelas, nilai }) => {
        console.log(`ID: ${id}, Nama: ${nama}, Kelas: ${kelas}, Nilai: ${nilai}`);
    });
}

// 3. Update Data Siswa
export function updateSiswa(id, dataBaru) {
    const index = siswa.findIndex(s => s.id === id);
    if (index !== -1) {
        siswa[index] = { ...siswa[index], ...dataBaru };
        return siswa[index];
    }
    return null;
}

// 4. Hapus Siswa
export function hapusSiswa(id) {
    const index = siswa.findIndex(s => s.id === id);
    if (index !== -1) {
        return siswa.splice(index, 1)[0];
    }
    return null;
}

// 5. Cari Siswa Berdasarkan Nama
export function cariSiswa(nama) {
    return siswa.filter(s => s.nama.toLowerCase().includes(nama.toLowerCase()));
}

// 6. Hitung Rata-rata Nilai
export function rataRataNilai() {
    if (siswa.length === 0) return 0;
    const total = siswa.reduce((sum, { nilai }) => sum + nilai, 0);
    return total / siswa.length;
}
