img src="https://rumahitindonesia.com/wp-content/uploads/2023/11/1.png" style="height:204px;margin-right:32px"/>
<div style="font-family: 'Arial', sans-serif;">

---


# Latihan Soal Local Storage (day 3 week 4 month 2)

## Soal Pertanyaan (5 Soal)
1. Apa fungsi `localStorage` dalam JavaScript?  
   *Clue: digunakan untuk menyimpan data dalam browser.*

-localStorage berfungsi untuk menyimpan data dalam browser secara permanen, sehingga tidak hilang apabila browser nya di tutup.

2. Apa perbedaan `localStorage` dengan `sessionStorage`?  
   *Clue: salah satunya hilang setelah tab/browser ditutup.*

-localStorage tidak hilang meski browser ditutup karena datanya disimpan secara permanen, sedangkan sessionStorage hanya menyimpan data sementara jadi datanya akan hilang apabila browsernya di tutup.

3. Bagaimana cara menyimpan data string ke `localStorage`?  
   *Clue: gunakan `.setItem(key, value)`.*

   -localStorage.setItem("key","value");

4. Bagaimana cara mengambil data dari `localStorage`?  
   *Clue: gunakan `.getItem(key)`.*

   -localStorage.getItem("key");

5. Bagaimana cara menghapus data tertentu di `localStorage`?  
   *Clue: gunakan `.removeItem(key)`.*

-localStorage.removeItem("key");

---

## Soal Praktik (15 Soal)
6. Buat form input username, lalu simpan username ke `localStorage`.  
   *Clue: `localStorage.setItem("username", value)`.*

7. Buat tombol yang jika diklik akan menampilkan data `username` dari `localStorage`.  
   *Clue: `localStorage.getItem("username")`.*

8. Buat form login sederhana (username + password), lalu simpan datanya di `localStorage`.  
   *Clue: gabungkan `setItem` dengan event form.*

9. Buat tombol logout yang menghapus data login dari `localStorage`.  
   *Clue: gunakan `removeItem("key")`.*

10. Buat counter (angka naik setiap klik tombol), lalu simpan nilai counter di `localStorage` agar tidak hilang saat reload.  
   *Clue: `parseInt(localStorage.getItem("counter"))`.*

11. Buat form pilihan tema (dark/light), lalu simpan pilihan user di `localStorage`.  
   *Clue: `localStorage.setItem("theme", "dark")`.*

12. Buat halaman yang otomatis membaca `theme` dari `localStorage` dan menerapkan gaya sesuai.  
   *Clue: `if(localStorage.getItem("theme") === "dark")`.*

13. Buat daftar belanja sederhana: ketika user input barang, simpan ke array, lalu taruh array itu di `localStorage`.  
   *Clue: `JSON.stringify()`.*

14. Buat daftar belanja tadi agar saat reload data tetap muncul di halaman.  
   *Clue: `JSON.parse(localStorage.getItem("list"))`.*

15. Buat tombol clear all yang menghapus seluruh data `localStorage`.  
   *Clue: gunakan `localStorage.clear()`.*

16. Buat form biodata (nama, umur, email) lalu simpan datanya di `localStorage`.  
   *Clue: gunakan beberapa `setItem`.*

17. Tampilkan biodata dari `localStorage` ke halaman setelah reload.  
   *Clue: gunakan `.getItem` di `window.onload`.*

18. Buat form yang hanya bisa di-submit jika username belum pernah disimpan di `localStorage`.  
   *Clue: cek dengan `if(localStorage.getItem("username"))`.*

19. Buat tombol "Ganti Username" yang mengganti data lama di `localStorage` dengan data baru.  
   *Clue: cukup `setItem` lagi dengan key yang sama.*

20. Buat sistem sederhana "Remember Me" di login: kalau dicentang, simpan username di `localStorage`, kalau tidak, jangan simpan.  
   *Clue: gunakan `checkbox.checked`.*
