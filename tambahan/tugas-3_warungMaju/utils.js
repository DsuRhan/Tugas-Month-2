// Import data barang
import barang from "./barang.js";

// 1. Tambah barang baru (pakai spread operator)
export function tambahBarang(barangBaru) {
    return [...barang, barangBaru];
}

// 2. Cari barang berdasarkan nama (pakai find)
export function cariBarang(nama) {
    return barang.find(b => b.nama.toLowerCase() === nama.toLowerCase());
}

// 3. Hitung total harga belanjaan (pakai reduce)
export function hitungTotal(belanjaan) {
    // belanjaan = array berisi id barang
    return belanjaan.reduce((total, id) => {
        let item = barang.find(b => b.id === id);
        return item ? total + item.harga : total;
    }, 0);
}

// 4. Update stok barang (pakai destructuring)
export function updateStok(id, jumlahBeli) {
    let item = barang.find(b => b.id === id);
    if (item) {
        let { stok } = item;
        item.stok = stok - jumlahBeli;
        return item;
    } else {
        return null;
    }
}
