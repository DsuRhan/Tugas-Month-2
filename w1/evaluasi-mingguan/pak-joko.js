// ### Soal 6-10: Pak Joko - Pemilik Toko Baju Online
console.warn("Soal 6-10: Pak Joko - Pemilik Toko Baju Online")
// **Soal 6:** "Developer, saya punya masalah stok nih. Kaos saya ada 50 pcs harga 75 ribu, celana 30 pcs harga 150 ribu, jaket 15 pcs harga 200 ribu. Saya sering lupa berapa stok yang tersisa. Bisa dibuatin program buat ngecek stok setiap barang?"
const hargaKaos = 75000;
const hargaCelana = 150000;
const hargaJaket = 200000;
let stokKaos = 50;
let stokCelana = 30;
let stokJaket = 15;
function cekStok() {
    console.log("Stok barang saat ini:")
    console.log("Kaos = " + stokKaos)
    console.log("Celana = " + stokCelana)
    console.log("Jaket = " + stokJaket)
}
cekStok()
// **Soal 7:** "Saya ada sistem poin untuk pelanggan, setiap belanja 10 ribu dapat 1 poin. Tapi saya manual nulis di buku, ribet banget. Bisa bikin sistem yang otomatis nyimpen poin pelanggan dan nambah setiap kali mereka belanja?"
let poin = 0;
function belanjaDapatPoin(jumlahKaos, jumlahCelana, jumlahJaket) {
    const totalKaos = jumlahKaos * hargaKaos;
    const totalCelana = jumlahCelana * hargaCelana;
    const totalJaket = jumlahJaket * hargaJaket;
    const totalBelanja = totalKaos + totalCelana + totalJaket;
    if (totalBelanja >= 10000) {
        poin++
        console.log("Total belanja : " + totalBelanja + ". Dapat 1 poin, poin saat ini : " + poin)
    }
}
belanjaDapatPoin(2, 3, 1)
belanjaDapatPoin(1, 1, 1)
// **Soal 8:** "Oh iya, saya ada aturan khusus nih. Kalau stok barang tersisa kurang dari 10, saya kasih bonus 5% dari harga. Tapi sering kelewat ngasih bonusnya. Bisa diatur otomatis gak ya?"
function diskonStokDiBawah10(jumlahKaos, jumlahCelana, jumlahJaket) {
    const stokBarang = {
        kaos: stokKaos - jumlahKaos,
        celana: stokCelana - jumlahCelana,
        jaket: stokJaket - jumlahJaket
    }
    const totalKaos = jumlahKaos * hargaKaos;
    const totalCelana = jumlahCelana * hargaCelana;
    const totalJaket = jumlahJaket * hargaJaket;
    const totalBelanja = totalKaos + totalCelana + totalJaket;

    if (stokBarang["kaos"] < 10 || stokBarang["celana"] < 10 || stokBarang["jaket"] < 10) {
        const totalSetelahDiskon = totalBelanja - (totalBelanja * 0.05)
        console.log("Anda dapat diskon 5%.Total belanja anda : " + totalSetelahDiskon)
    } else {
        console.log("Total belanja anda : " + totalBelanja)
    }
}

diskonStokDiBawah10(6, 8, 9)
// **Soal 9:** "Saya sering kehabisan stok mendadak karena gak tau kalau stok udah tipis. Bisa dibikin sistem peringatan kalau stok barang udah kurang dari 20?"
if (stokKaos < 20) {
    console.warn("Peringatan: stok kaos tinggal sedikit")
}
if (stokCelana < 20) {
    console.warn("Peringatan: Stok celana tinggal sedikit")
}
if (stokJaket < 20) {
    console.warn("Peringatan: stok jaket tinggal sedikit")
}
// **Soal 10:** "Pelanggan saya ada yang poinnya banyak, ada yang sedikit. Saya mau bikin level Bronze kalau poin 0-99, Silver 100-499, Gold 500 ke atas. Tapi manual ngeceknya capek. Bisa otomatis gak?"
const budi = 89;
const Siti = 200;
const Yanto = 12;
const Yanti = 566;
function cekLevel(nama) {
    if (nama === budi || nama === Siti || nama === Yanto || nama === Yanti || nama == 0) {
        if (nama >= 500) {
            console.log("Level pelanggan ini adalah Gold")
        } else if (nama >= 100) {
            console.log("Level pelanggan ini adalah Silver")
        } else if (nama <= 99 && nama >= 0) {
            console.log("Level pelanggan ini adalah Bronze")
        }
    }
}
cekLevel(budi)
cekLevel(Siti)
cekLevel(Yanto)
cekLevel(Yanti)