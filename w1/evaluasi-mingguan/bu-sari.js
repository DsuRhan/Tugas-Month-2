// ### Soal 1-5: Bu Sari - Pemilik Warung Makan
console.warn("Soal 1-5: Bu Sari - Pemilik Warung Makan");
// **Soal 1:** "Mas, saya bingung banget nih. Setiap hari saya jual nasi gudeg 8 ribu, ayam goreng 12 ribu, sama es teh 3 ribu. Tapi saya sering lupa ngitung total uang yang masuk. Kadang gudeg laku 15 porsi, ayam 10 porsi, es teh 20 gelas. Bisakah dibuatkan sesuatu yang otomatis ngitung berapa duit yang saya dapet hari ini?"
const hargaGudeg = 8000;
const hargaAyam = 12000;
const hargaEsTeh = 3000;
function hitungPendapatan(porsiGudeg, porsiAyam, gelasEsTeh) {
    const totalGudeg = hargaGudeg * porsiGudeg;
    const totalAyam = hargaAyam * porsiAyam;
    const totalEsTeh = hargaEsTeh * gelasEsTeh;
    const totalPendapatan = totalGudeg + totalAyam + totalEsTeh;
    return totalPendapatan;
}
// **Soal 2:** "Oh iya mas, saya juga ada sistem diskon nih. Kalau ada yang beli total di atas 50 ribu, saya kasih diskon 10%. Tapi saya sering salah ngitung discountnya. Bisa tolong tambahin ke program tadi biar otomatis ngitung setelah diskon?"
function hitungPendapatanSetelahDiskon(porsiGudeg, porsiAyam, gelasEsTeh) {
    const totalPendapatan = hitungPendapatan(porsiGudeg, porsiAyam, gelasEsTeh);
    let totalSetelahDiskon = totalPendapatan;
    if (totalPendapatan > 50000) {
        totalSetelahDiskon -= totalSetelahDiskon * 0.1;
    }
    return totalSetelahDiskon;
}
// **Soal 3:** "Mas, saya penasaran nih, dari tiga menu saya, mana sih yang paling laris? Soalnya saya mau fokus promosi yang paling laku. Bisa bikin program yang ngasih tau menu mana yang paling banyak terjual?"
function menuPalingLaris(porsiGudeg, porsiAyam, gelasEsTeh) {
    const penjualan = {
        gudeg: porsiGudeg,
        ayam: porsiAyam,
        esTeh: gelasEsTeh
    };
    let menuTerlaris = '';
    let jumlahTerlaris = 0;
    for (const menu in penjualan) {
        if (penjualan[menu] > jumlahTerlaris) {
            jumlahTerlaris = penjualan[menu];
            menuTerlaris = menu;
        }
    }
    return menuTerlaris;
}
// **Soal 4:** "Saya punya pelanggan tetap nih mas. Ada yang biasa (dapat diskon 5%), member (diskon 10%), sama VIP (diskon 15%). Tapi saya bingung cara ngaturnya biar gak salah kasih diskon. Bisa bikin sistem yang inget level pelanggan dan diskonnya?"
const diskonPelanggan = {
    biasa: 0.05,
    member: 0.1,
    vip: 0.15
};
function hitungPendapatanDenganLevel(porsiGudeg, porsiAyam, gelasEsTeh, levelPelanggan) {
    const totalPendapatan = hitungPendapatan(porsiGudeg, porsiAyam, gelasEsTeh);
    const diskon = diskonPelanggan[levelPelanggan] || 0;
    const totalSetelahDiskon = totalPendapatan - (totalPendapatan * diskon);
    return totalSetelahDiskon;
}
// **Soal 5:** "Mas, saya mau tau rata-rata penjualan saya seminggu terakhir. Kemarin 150 ribu, lusa 200 ribu, 3 hari lalu 175 ribu, 4 hari lalu 180 ribu, 5 hari lalu 165 ribu, 6 hari lalu 190 ribu, seminggu lalu 145 ribu. Tolong bikin yang bisa ngitung rata-ratanya."
function hitungRataRataPenjualan(mingguTerakhir) {
    const totalPenjualan = mingguTerakhir.reduce((a, b) => a + b);
    const rataRata = totalPenjualan / mingguTerakhir.length;
    return rataRata;
}
const penjualanMingguan = [200000, 200000, 200000, 200000, 200000, 200000, 200000];
const rataRataMingguan = hitungRataRataPenjualan(penjualanMingguan);
console.log("Pendapatan hari ini (15 gudeg, 10 ayam, 20 es teh):", hitungPendapatan(15, 10, 20));
console.log("Pendapatan setelah diskon (15 gudeg, 10 ayam, 20 es teh):", hitungPendapatanSetelahDiskon(15, 10, 20));
console.log("Menu paling laris (15 gudeg, 10 ayam, 20 es teh):", menuPalingLaris(15, 10, 20));
console.log("Pendapatan dengan level member (15 gudeg, 10 ayam, 20 es teh, 'member'):", hitungPendapatanDenganLevel(15, 10, 20, 'member'));
console.log("Rata-rata penjualan mingguan:", rataRataMingguan);