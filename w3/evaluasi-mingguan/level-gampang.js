//         ### Level Gampang (10 soal)

// 1. Kamu punya array objek barang: `{ nama: "Buku", harga: 10000 }`. Ubah array tersebut menjadi JSON string dan tampilkan di console.  
//    **Clue:** gunakan `JSON.stringify()` pada array objek.  

const barang = { nama: "Buku", harga: 10000 };
console.log(JSON.stringify(barang));

// 2. Buat fungsi `hitungLuas` yang menerima panjang dan lebar, lalu panggil dengan callback untuk menampilkan hasilnya di console.  
//    **Clue:** callback dipanggil dengan hasil perkalian panjang × lebar.  

function hitungLuas(p,l,cb) {
    cb(p*l);
};
hitungLuas(5,4,hasil => console.log(`Luas dari persegi dengan panjang 5cm dan lebar 4cm adalah: ${hasil}cm`))

// 3. Buat fungsi yang memanggil API `https://jsonplaceholder.typicode.com/users` menggunakan Promise, lalu tampilkan data di console.  
//    **Clue:** gunakan `fetch().then(res => res.json())`.  

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// 4. Ubah data JSON string `{"nama":"Andi","umur":20}` menjadi objek JavaScript, lalu akses propertinya.  
//    **Clue:** pakai `JSON.parse()` lalu ambil `obj.nama`.

const json = '{"nama":"Andi","umur":20}';
const obj = JSON.parse(json);
console.log(obj.nama);

// 5. Tulis fungsi `sayHello` yang dijalankan setelah 2 detik menggunakan `setTimeout`, tapi pakai callback.  
//    **Clue:** callback dipanggil di dalam `setTimeout`.  

function sayHello(nama,cb) {
  setTimeout(() => cb(`Hello, ${nama}!`), 2000);
}
sayHello("Rhan",msg => console.log(msg));

// 6. Buat fungsi yang mengambil `id="judul"` pada HTML, lalu ubah teksnya menjadi `"Belajar DOM Selection"`.  
//    **Clue:** gunakan `getElementById()` atau `querySelector()`.  

 document.getElementById("judul").innerText = "Belajar DOM Selection";

// 7. Buat fungsi dengan Promise yang resolve setelah 3 detik dengan pesan `"Data Berhasil Diambil"`. Tampilkan hasilnya.  
//    **Clue:** bungkus `setTimeout` di dalam `new Promise`.  

const p = new Promise(res => setTimeout(() => res("Data Berhasil Diambil"), 3000));
p.then(console.log);

// 8. Buat program dengan Promise chaining: step 1 → `"Login User"`, step 2 → `"Ambil Data"`, step 3 → `"Tampilkan Dashboard"`.  
//    **Clue:** return string baru di setiap `.then()`.  

const p2 = new Promise(res => setTimeout(() => res("Login User"), 1000));
p2
  .then(msg => { console.log(msg); return "Ambil Data"; })
  .then(msg => { console.log(msg); return "Tampilkan Dashboard"; })
  .then(console.log);

// 9. Pilih semua paragraf `<p>` dengan `querySelectorAll`, lalu ubah warnanya jadi biru.  
//    **Clue:** lakukan looping `forEach` pada hasil query.  

// document.querySelectorAll("p").forEach(p => p.style.color = "blue");

// 10. Buat fungsi `bagi(a,b)` dengan `try...catch` agar ketika `b=0`, muncul error `"Tidak bisa membagi dengan nol"`.  

function bagi(a,b){
  try {
    if(b===0) throw new Error("Tidak bisa membagi dengan nol");
    return a/b;
  } catch(e){ return e.message; }
}
console.log(bagi(10,0));
console.log(bagi(10,2));

// ---

