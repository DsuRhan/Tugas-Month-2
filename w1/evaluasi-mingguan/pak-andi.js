// ### Soal 21-25: Pak Andi - Pemilik Lembaga Kursus
console.warn("Soal 21-25: Pak Andi - Pemilik Lembaga Kursus")
// **Soal 21:** "Developer, lembaga kursus saya ada 3 paket: Basic 500 ribu (4 pertemuan), Standard 800 ribu (8 pertemuan), Premium 1,2 juta (12 pertemuan). Saya bingung ngitung biaya per pertemuan setiap paket. Bisa dibantu?"
const paket = {
    Basic: { harga: 500000, pertemuan: 4 },
    Standard: { harga: 800000, pertemuan: 8 },
    Premium: { harga: 1200000, pertemuan: 12 }
};

function biayaPerPertemuan(namaPaket) {
    const data = paket[namaPaket];
    console.log(`Biaya per pertemuan: Rp${data.harga / data.pertemuan}`);
};
biayaPerPertemuan("Basic");
biayaPerPertemuan("Standard");
biayaPerPertemuan("Premium");
// **Soal 22:** "Siswa saya banyak yang minta cicil. Basic bisa 2x, Standard 3x, Premium 4x. Tapi saya sering salah ngitung cicilan dan sisa bayarnya. Bisa dibikin sistem cicilan otomatis?"
function cicilan(namaPaket) {
    const data = paket[namaPaket];
    let kali = 0;
    if (namaPaket === "Basic") kali = 2;
    else if (namaPaket === "Standard") kali = 3;
    else if (namaPaket === "Premium") kali = 4;

    console.log(`Cicilan per bulan: Rp${data.harga / kali}`);
};
cicilan("Basic");
cicilan("Standard");
cicilan("Premium");
// **Soal 23:** "Saya punya 5 ruang kelas dengan kapasitas beda-beda: Ruang A (20 orang), B (15 orang), C (25 orang), D (10 orang), E (30 orang). Setiap pendaftaran baru saya bingung nempatinnya dimana. Bisa dibantu sistem alokasinya?"
const ruang = {
    D: 10, B: 15, A: 20, C: 25, E: 30
};

function alokasi(jumlah) {
    for (const nama in ruang) {
        if (jumlah <= ruang[nama]) {
            console.log(`Ditempatkan di ruang ${nama}`);
            return;
        }
    }
    console.log("Tidak ada ruang yang cukup");
};
alokasi(2);
alokasi(12);
alokasi(17);
alokasi(21);
alokasi(27);
// **Soal 24:** "Absensi siswa saya masih manual, ribet banget. Saya mau tau persentase kehadiran setiap siswa buat evaluasi. Bisa dibikin sistem absensi digital yang ngitung persentase otomatis?"
function absensi(totalPertemuan, hadir) {
    let persen = (hadir / totalPertemuan) * 100;
    console.log(`Persentase hadir: ${persen}%`);
};
absensi(12, 9);
absensi(12, 8);
// **Soal 25:** "Bang, saya butuh sistem lengkap yang ngatur semua: pendaftaran siswa baru, pembayaran (tunai/cicil), jadwal kelas, absensi, sampe laporan bulanan. Sekarang semua manual, kepala pusing. Bisa dibikin satu sistem yang ngatur semuanya?"
let siswa = [];

function daftarSiswa(nama, paket) {
    siswa.push({ nama, paket, absensi: 0, pembayaran: "" });
}

function bayar(nama, jumlah) {
    let orang = siswa.find(s => s.nama === nama);
    orang.pembayaran += jumlah;
}

function absen(nama) {
    let orang = siswa.find(s => s.nama === nama);
    orang.absensi++;
}

function laporan() {
    console.log(siswa);
}
daftarSiswa("Ryan", "Premium")
daftarSiswa("Zaki", "Basic")
bayar("Zaki", "Tunai")
bayar("Ryan", "Cicil")
absen("Zaki")
absen("Ryan")
absen("Ryan")
absen("Ryan")
laporan()
console.error("DAYUMMM,CAPEK WAKK")