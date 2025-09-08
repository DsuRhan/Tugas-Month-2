// ### Soal 11-15: Bu Rina - Guru Kelas 5
console.warn("Soal 11-15: Bu Rina - Guru Kelas 5")

// **Soal 11:** "Mas developer, saya guru kelas 5. Setiap ujian saya harus ngitung rata-rata nilai siswa manual, capek banget. Siswa saya 25 orang, nilainya beda-beda. Bisa dibuatin program yang otomatis ngitung rata-rata nilai kelas?"
function hitungRataRataNilai(nilai) {
    const totalNilai = nilai.reduce((a, b) => a + b);
    const rataRata = totalNilai / nilai.length;
    console.log(rataRata)
};
const nilainya = [90, 56, 79, 78, 67, 87, 90, 100, 90, 70, 67, 67, 89, 97, 50, 67, 68, 50, 86, 86, 68, 90, 98, 99, 20];
hitungRataRataNilai(nilainya);
// **Soal 12:** "Saya juga bingung nentuin grade siswa. Yang 85-100 dapat A, 70-84 dapat B, 60-69 dapat C, di bawah 60 dapat D. Manual ngeceknya lama banget. Bisa dibikin otomatis?"
function cekGradesiswa(nilai) {
    if (nilai <= 100 && nilai >= 85) {
        console.log("Siswa ini dapat A");
    } else if (nilai <= 84 && nilai >= 70) {
        console.log("Siswa ini dapat B");
    } else if (nilai <= 69 && nilai >= 60) {
        console.log("Siswa ini dapat C");
    } else if (nilai <= 59 && nilai >= 0) {
        console.log("Siswa ini dapat D");
    } else {
        console.log("Nilai tidak valid");
    }
};
// **Soal 13:** "Saya punya 25 siswa dengan nama dan nilai masing-masing. Kadang saya lupa siapa yang nilai berapa. Bisa dibuatin sistem yang nyimpen data siswa dan bisa nyari berdasarkan nama?"
const dataSiswa = {
    Andi: 78,
    Budi: 90,
    Citra: 85,
    Dedi: 60,
    Eka: 95,
    Fajar: 88,
    Galih: 72,
    Hana: 91,
    Indra: 83,
    Joko: 67,
    Kiki: 75,
    Lala: 80,
    Made: 89,
    Nia: 92,
    Oki: 70,
    Putri: 84,
    Qori: 77,
    Raka: 65,
    Sinta: 93,
    Tono: 68,
    Ujang: 74,
    Vina: 86,
    Wati: 82,
    Xena: 96,
    Yudi: 79
};
function cariNilai(nama) {
    if (nama in dataSiswa) {
        console.log(nama + " memiliki nilai " + dataSiswa[nama]);
    } else {
        console.log("Siswa bernama " + nama + " tidak ditemukan");
    }
}

cariNilai("Sinta");
cariNilai("Andi");
cariNilai("Zaki");

// **Soal 14:** "Sekolah kasih reward kalau rata-rata kelas minimal 80. Saya sering lupa ngecek apakah kelas saya berhak dapat reward. Bisa dibikin otomatis ngecek?"
const daftarRataRataKelas = {
    kelasA: 90,
    kelasB: 68,
    kelasC: 59,
    kelasD: 85
};
function hadiahRataRataKelas(kelas) {
    if (kelas in daftarRataRataKelas) {
        const nilai = daftarRataRataKelas[kelas]
        if (nilai >= 80) {
            console.log("Kelas ini dapat hadiah")
        } else {
            console.log("Kelas ini tidak dapat hadiah")
        }
    } else {
        console.log("Kelas ini tidak valid")
    }
};
hadiahRataRataKelas("kelasA");
hadiahRataRataKelas("kelasB");
hadiahRataRataKelas("kelasC");
hadiahRataRataKelas("kelasD");
hadiahRataRataKelas("kelasE");
// **Soal 15:** "Saya mau bikin ranking kelas dari nilai tertinggi ke terendah buat motivasi siswa. Tapi manual nyusunnya ribet banget. Ada yang bisa bantu otomatis bikin ranking?"
function cetakRankingKelas(data) {
    console.log("Ranking Kelas :")
    const ranking = Object.entries(data)
        .sort((a, b) => b[1] - a[1]);

    ranking.forEach(([nama, nilai], index) => {
        console.log(`${index + 1}. ${nama} - ${nilai}`);
    });
}

cetakRankingKelas(daftarRataRataKelas);
