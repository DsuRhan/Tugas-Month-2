import barang from "./barang.js";
import { tambahBarang, cariBarang, hitungTotal, updateStok } from "./utils.js";

// 1. Tambah barang baru
console.log(tambahBarang({ id: 4, nama: "Roti", harga: 2000, stok: 20 }));

// 2. Cari barang
console.log(cariBarang("Kopi"));

// 3. Hitung total belanjaan
let belanjaan = [1, 2, 3]; // id barang yang dibeli
console.log("Total Harga:", hitungTotal(belanjaan));

// 4. Update stok
console.log(updateStok(1, 2)); // beli 2 Indomie

// 5. Promo setInterval
let hitung = 0;
const promo = setInterval(() => {
    hitung++;
    console.log("🔥 Promo Diskon 20% berlaku sekarang!");

    if (hitung === 5) {
        clearInterval(promo);
        console.log("Promo selesai ❌");
    }
}, 3000);
