<img src="https://rumahitindonesia.com/wp-content/uploads/2023/11/1.png" style="height:204px;margin-right:32px"/>
<div style="font-family: 'Arial', sans-serif;">

---

# 🎯 15 Soal Study Kasus Event (day 1 week 4 month 2)

## A. Menggunakan Atribut HTML (inline events) — 5 soal
1. Buat tombol `<button>` yang memakai `onclick` untuk menampilkan `alert("Halo!")`.  
   **Clue:** `<button onclick="...">`

2. Buat gambar `<img>` yang kalau diklik (pakai `onclick`) berubah `src`-nya ke gambar lain.  
   **Clue:** pakai `this.src = 'lain.jpg'` di attribute.

3. Buat paragraf yang saat digetok mouse (`ondblclick`) teksnya berubah jadi `"Double clicked!"`.  
   **Clue:** `ondblclick="this.innerText = '...'"`

4. Buat sebuah `<input>` text yang saat `onfocus` mengganti placeholder jadi `"Tulis di sini..."`.  
   **Clue:** `onfocus="this.placeholder = '...'"`

5. Buat tombol yang punya `onmousedown` untuk menampilkan `"Mouse Down"` dan `onmouseup` untuk menampilkan `"Mouse Up"` (bisa `alert` atau ubah teks).  
   **Clue:** dua attribute di satu elemen: `onmousedown="..." onmouseup="..."`

---

## B. Menggunakan JavaScript langsung (assigning event properties) — 5 soal
6. Buat tombol dan pasang event klik dengan `element.onclick = function(){...}` yang mengubah teks sebuah `<p id="msg">`.  
   **Clue:** `document.getElementById("btn").onclick = function() { ... }`

7. Buat area `<div id="area">` yang ketika mouseover mengubah warna via `area.onmouseover = ...` dan ketika mouseout balik warna via `area.onmouseout = ...`.  
   **Clue:** gunakan `element.style.backgroundColor = ...`

8. Pasang event ke input: `input.oninput = function(){ ... }` untuk menampilkan value input ke `<span id="show">`.  
   **Clue:** `this.value` atau `event.target.value`.

9. Buat tombol yang `onclick`-nya diassign lewat JS untuk men-disable tombol itu sendiri setelah klik (set `disabled = true`).  
   **Clue:** `this.disabled = true` jika pakai function biasa, atau `btn.disabled = true`.

10. Demonstrasi: assign dua kali `element.onclick = ...` dan jelaskan hasilnya (praktik).  
    **Clue:** assignment langsung **menimpa** handler sebelumnya — cuma handler terakhir yang dipakai.

---

## C. Menggunakan addEventListener()— 5 soal
11. Buat tombol dan tambahkan dua handler `addEventListener("click", ...)` — satu mengubah warna, satu menulis log di console. Pastikan keduanya berjalan.  
    **Clue:** `element.addEventListener("click", handlerA); element.addEventListener("click", handlerB);`

12. Buat tombol "Remove" yang menghapus salah satu handler yang tadi didaftarkan menggunakan `removeEventListener`.  
    **Clue:** handler harus berupa named function agar bisa di-remove.

13. Buat form sederhana dan tangkap event `submit` dengan `addEventListener`; gunakan `event.preventDefault()` supaya halaman tidak reload, lalu tampilkan nilai input di console.  
    **Clue:** `form.addEventListener("submit", function(e){ e.preventDefault(); ... })`

14. Buat list `<ul>` dan pasang satu listener di parent (`ul`) untuk menangani klik pada item (`li`) memakai teknik *event delegation*. Saat click, ubah teks `li` yang diklik.  
    **Clue:** gunakan `e.target` dan cek `e.target.tagName === "LI"`.

15. Gunakan option `{ once: true }` pada `addEventListener` agar sebuah tombol hanya bereaksi sekali.  
    **Clue:** `element.addEventListener("click", handler, { once: true })`

