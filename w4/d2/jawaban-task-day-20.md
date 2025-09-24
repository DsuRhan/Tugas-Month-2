img src="https://rumahitindonesia.com/wp-content/uploads/2023/11/1.png" style="height:204px;margin-right:32px"/>
<div style="font-family: 'Arial', sans-serif;">

---


# 🎯 30 Soal Form Validation (day 2 week 4 month 2)

## A. Pertanyaan Teori — 5 soal
1. Apa fungsi dari atribut `required` pada form input?  
   **Clue:** Tidak bisa submit jika kosong.

   atribut required digunakan untuk memberikan syarat agar form nya tidak boleh kosong dan wajib diisi

2. Bagaimana cara menggunakan `pattern` untuk validasi email sederhana di HTML?  
   **Clue:** `pattern=".+@.+"`

   <input type="email" pattern=".+@.+">

3. Apa bedanya `min` dan `minlength` pada input?  
   **Clue:** `min` untuk angka/date, `minlength` untuk teks.

   min = batas minimal untuk angka / date,
   minlength = batas minimal jumlah karakter untuk teks

4. Bagaimana cara mencegah form reload saat submit di JavaScript?  
   **Clue:** `event.preventDefault()`

   form.addEventListener("submit", e => e.preventDefault());

5. Apa perbedaan validasi di sisi HTML dan sisi JavaScript?  
   **Clue:** HTML = otomatis, JS = manual dengan logika custom.

   HTML = Otomotis dari atribut bawaan,
   JS = Manual, fleksibel, dengan logika custom.

---

## B. Validasi dengan HTML (atribut bawaan) — 10 soal
6. Buat input nama yang wajib diisi (`required`).  
   **Clue:** `<input required>`

7. Buat input usia (angka) dengan batas minimal 18 dan maksimal 60.  
   **Clue:** `<input type="number" min="18" max="60">`

8. Buat input password dengan minimal panjang 8 karakter.  
   **Clue:** `minlength="8"`

9. Buat input email yang otomatis valid jika ada `@`.  
   **Clue:** `type="email"`

10. Buat input nomor telepon hanya boleh angka 10–12 digit.  
    **Clue:** `pattern="[0-9]{10,12}"`

11. Buat input username yang hanya boleh huruf kecil (a–z).  
    **Clue:** `pattern="[a-z]+"`

12. Buat input kode pos dengan 5 digit.  
    **Clue:** `pattern="[0-9]{5}"`

13. Buat input tanggal lahir yang harus sebelum tahun 2020.  
    **Clue:** `max="2019-12-31"`

14. Buat input URL yang hanya valid jika formatnya link.  
    **Clue:** `type="url"`

15. Buat input angka yang hanya genap.  
    **Clue:** `pattern="(0|2|4|6|8)$"`

---

## C. Validasi dengan JavaScript — 15 soal
16. Buat form dengan input nama. Saat submit, jika kosong tampilkan alert `"Nama wajib diisi"`.  
    **Clue:** `if (value === "") alert(...)`

17. Buat validasi usia agar hanya menerima angka ≥18.  
    **Clue:** `if (value < 18) ...`

18. Buat validasi password agar minimal 8 karakter.  
    **Clue:** `if (value.length < 8) ...`

19. Buat validasi email dengan regex sederhana.  
    **Clue:** `/^[\w.-]+@[\w.-]+\.\w{2,}$/`

20. Buat validasi nomor HP agar hanya angka.  
    **Clue:** `isNaN(value)`

21. Buat validasi dua password (`password` dan `confirm`). Harus sama.  
    **Clue:** `if (p1 !== p2) ...`

22. Buat validasi tanggal agar tidak boleh lewat dari hari ini.  
    **Clue:** `new Date(value) > new Date()`

23. Buat validasi input username minimal 5 karakter, hanya huruf/angka.  
    **Clue:** `/^[a-zA-Z0-9]{5,}$/`

24. Buat validasi form login: jika salah satu kosong, tampilkan `"Isi semua field"`.  
    **Clue:** `if (!u || !p) ...`

25. Buat validasi checkbox "setuju". Jika tidak dicentang, blok submit.  
    **Clue:** `if (!checkbox.checked) ...`

26. Buat validasi input angka agar genap.  
    **Clue:** `if (value % 2 !== 0) ...`

27. Buat validasi textarea komentar agar tidak lebih dari 200 karakter.  
    **Clue:** `if (value.length > 200) ...`

28. Buat validasi select option agar tidak boleh default kosong.  
    **Clue:** `if (select.value === "") ...`

29. Buat validasi file upload agar hanya ekstensi `.jpg` atau `.png`.  
    **Clue:** `endsWith(".jpg") || endsWith(".png")`

30. Buat validasi form pendaftaran: semua field (nama, email, password) harus valid sebelum `alert("Sukses")`.  
    **Clue:** gabungkan `if` untuk tiap field.
