// ### Soal 16-20: Mas Budi - Pemilik Bengkel Motor
console.warn("Soal 16-20: Mas Budi - Pemilik Bengkel Motor")
// **Soal 16:** "Bang developer, bengkel saya ada 3 jenis service: ringan 50 ribu (2 jam), sedang 100 ribu (4 jam), berat 200 ribu (8 jam). Setiap hari ada banyak motor masuk, saya bingung ngitung total pendapatan dan waktu yang dibutuhin. Bisa dibantu?"
const service = {
    ringan: {
        harga: 50000,
        durasi: 2
    },
    sedang: {
        harga: 100000,
        durasi: 4
    },
    berat: {
        harga: 200000,
        durasi: 8
    }
};
function hitungTotal(dataService, jumlahService) {
    let totalPendapatan = 0;
    let totalDurasi = 0;

    for (const jenis in jumlahService) {
        if (dataService[jenis]) {
            const jumlah = jumlahService[jenis];
            totalPendapatan += dataService[jenis].harga * jumlah;
            totalDurasi += dataService[jenis].durasi * jumlah;
        }
    }

    console.log(`Total pendapatan: Rp${totalPendapatan}`);
    console.log(`Total waktu: ${totalDurasi} jam`);
}

// Contoh jumlah motor per hari
const jumlahHariIni = {
    ringan: 3,
    sedang: 2,
    berat: 1
};

hitungTotal(service, jumlahHariIni);

// **Soal 17:** "Bengkel saya buka cuma 8 jam sehari. Saya sering kebingungan apakah semua motor yang antri bisa selesai dalam sehari atau harus besok. Bisa dibikin program yang ngecek?"
function cekSelesaiDalamSehari(dataService, totalService) {
    let totalDurasi = 0;
    for (const jenis in totalService) {
        if (dataService[jenis]) {
            const jumlah = totalService[jenis];
            totalDurasi += dataService[jenis].durasi * jumlah;
        }
    }

    if (totalDurasi <= 8) {
        console.log("Semua service bisa selesai hari ini");
    } else {
        console.log("Service harus dilanjutkan besok");
    }
}
cekSelesaiDalamSehari(service, jumlahHariIni);
// **Soal 18:** "Antrian motor di bengkel saya sering berantakan. Kadang lupa siapa yang dateng duluan. Bisa dibikin sistem antrian yang rapi dengan nomor urut?"
let antrian = [];

function tambahAntrian(nama) {
    antrian.push(nama);
    console.log(`Nomor antrian ${antrian.length} untuk ${nama}`);
}

function panggilAntrian() {
    let motor = antrian.shift();
    console.log(`Sekarang melayani: ${motor}`);
}
tambahAntrian("Zaki");
tambahAntrian("Ryan");
tambahAntrian("Ahmad");
panggilAntrian()
// **Soal 19:** "Saya kasih garansi: service berat 1 bulan, sedang 2 minggu, ringan 1 minggu. Tapi sering lupa kapan garansinya habis. Bisa dibikin yang otomatis ngitung tanggal berakhir garansi?"
function garansi(service, tanggalService) {
    let lamaHari = 0;
    if (service === "berat") lamaHari = 30;
    else if (service === "sedang") lamaHari = 14;
    else if (service === "ringan") lamaHari = 7;

    let tanggalAwal = new Date(tanggalService);
    tanggalAwal.setDate(tanggalAwal.getDate() + lamaHari);

    console.log(`Garansi berakhir: ${tanggalAwal}`);
}
garansi("sedang", "2025-03-10")
garansi("berat", "2025-09-01")
// **Soal 20:** "Mekanik saya dapat komisi: 10% dari service ringan, 15% sedang, 20% berat. Setiap hari saya manual ngitung komisinya, ribet banget. Bisa dibikin otomatis?"
function komisi(service, jumlah) {
    let tarif = 0;
    if (service === "ringan") tarif = 0.1 * 50000;
    else if (service === "sedang") tarif = 0.15 * 100000;
    else if (service === "berat") tarif = 0.2 * 200000;

    console.log(`Komisi total: Rp${tarif * jumlah}`);
}
komisi("berat", 5)