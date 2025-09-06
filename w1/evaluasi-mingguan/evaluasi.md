# 📘 Soal JavaScript Bab 1.1 – Bab 1.5

## ✨ Soal Teori (10 Soal)

1. **Apa fungsi utama JavaScript dalam sebuah website?**  
   a. Membuat struktur halaman  
   b. Menambahkan gaya/tampilan  
   c. Membuat website interaktif  <-----  <br>
   d. Menghubungkan ke database  

2. **Manakah yang termasuk framework JavaScript?**  
   a. React  <------  <br>
   b. jQuery  
   c. Lodash  
   d. Bootstrap  

3. Sebutkan **2 keunggulan** JavaScript.  
    1.Universal: semua perangkat dengan web browser bisa menjalankan JS tanpa perlu instalasi tambahan.
    2.Fleksibel karna ada banyak framework.
4. Sebutkan **2 kelemahan** JavaScript.  
    1.Tipe data nya yang longgar yang membuat error sulit terdeteksi.
    2.Rentan XSS karena dijalankan di browser.
5. Apa perbedaan `let` dan `const` dalam mendeklarasikan variabel?  
    `let` mendeklarasikan variabel yang bisa berubah, sedangkan `const` mendaklarasikan variabel yang tidak bisa dirubah.

6. Tipe data apa yang cocok digunakan untuk menyimpan:  
   - Nama lengkap siswa  
        - String
   - Status login (true/false)  
        - Boolean

7. Apa perbedaan `==` dengan `===` di JavaScript?  
    `==` Membandingkan nilai saja, tipe nya bisa disesuaikan secara otomotis, Sedangkan `===` membandingkan nilai dan tipe nya, jadi lebih ketat.
8. Manakah dari pop-up berikut yang digunakan untuk **meminta input teks dari user**?  
   a. `alert()`  
   b. `prompt()`  <-----  <br>
   c. `confirm()`  
   d. `console.log()`  

9. Apa itu **hoisting** dalam JavaScript? Jelaskan dengan singkat.  
    Mekanisme di mana deklarasi variabel/fungsi “diangkat” ke atas scope sebelum kode dijalankan, jadi bisa dipanggil sebelum baris deklarasinya.
10. Apa yang dimaksud dengan **closure**? Berikan contoh sederhana dalam 1 kalimat.  
    ungsi yang “mengingat” variabel dari lingkup tempat ia dibuat meskipun lingkup itu sudah selesai dieksekusi.
    
    Contoh singkat: closure itu seperti kunci cadangan yang tetap bisa membuka pintu rumah lama meski kau sudah pindah keluar.

---

## 🏋️ Soal Praktek / Studi Kasus (20 Soal)

### Variabel, Tipe Data, Operator
1. Buat variabel `nama`, `umur`, `statusPelajar`. Tampilkan semuanya dengan `console.log()`.  
2. Buat variabel `uangSaku = 50000`, `jajan = 15000`, hitung sisa uangnya.  
3. Buat variabel `sudahLogin = true`. Cek apakah user sudah login, jika iya tampilkan `"Selamat datang"`.  
4. Buat variabel `nilai = 75`. Jika nilai ≥ 70 tampilkan `"Lulus"`, jika tidak `"Tidak Lulus"`.  
5. Coba deklarasikan `const angka = 10`, lalu ubah nilainya. Apa hasilnya?  

### Struktur Kontrol (If, Switch, Loop)
6. Buat program cek ganjil/genap dari angka tertentu.  
7. Buat program yang menampilkan nama bulan sesuai angka (1–12) menggunakan `switch`.  
8. Buat program untuk mencetak angka 1 sampai 20 dengan `for`.  
9. Buat program untuk mencetak bilangan kelipatan 5 dari 1–50.  
10. Buat program yang terus meminta input password hingga benar (`while`).  

### Fungsi
11. Buat fungsi `sapa(nama)` yang menampilkan `"Halo, [nama]!"`.  
12. Buat fungsi `hitungLuasSegitiga(alas, tinggi)` yang mengembalikan hasilnya.  
13. Buat fungsi `cekUmur(umur)` → tampilkan `"Dewasa"` jika ≥ 18, `"Anak-anak"` jika < 18.  
14. Buat fungsi ekspresi untuk menghitung diskon belanja.  
15. Buat arrow function untuk menghitung konversi suhu Celcius ke Fahrenheit.  

### Scope, Hoisting, Closure
16. Buat variabel `sekolah` di global, tampilkan di dalam fungsi.  
17. Buat variabel `guru` di dalam fungsi, coba tampilkan di luar fungsi. Apa yang terjadi?  
18. Coba tampilkan variabel `var` sebelum dideklarasikan. Apa hasilnya?  
19. Buat fungsi `buatCounter()` yang tiap kali dipanggil menambah angka +1 (gunakan closure).  
20. Buat fungsi `pencatatanPengeluaran()` yang menyimpan total pengeluaran dengan closure.  