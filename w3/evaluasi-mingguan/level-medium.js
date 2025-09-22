// ### Level Medium (8 soal)

// 11. Kamu diminta membuat modul `math.js` berisi fungsi `tambah` dan `kurang`. Import modul tersebut di `main.js` dan gunakan.  
//    **Clue:** gunakan `export function tambah(){}` lalu `import {tambah}`.  

//Jawaban di folder "Soal-terkait-modularisasi"

// 12. Buat fungsi `ambilUser(id)` yang menerima ID lalu fetch ke `https://jsonplaceholder.typicode.com/users/{id}` menggunakan async/await.  
//    **Clue:** `const res = await fetch(url); const data = await res.json()`.  

async function ambilUser(id) {
    const user = await fetch (`https://jsonplaceholder.typicode.com/users/${id}`);
    console.log (user)
}
ambilUser(1);
// 13. Kamu punya array angka `[1,2,3,4,5]`. Ubah semua angkanya jadi kuadrat menggunakan callback anonim di `.map()`.  
//    **Clue:** `(num) => num * num`.  
const arrAngka = [1,2,3,4,5];
arrAngka.map((Num)=> {
    const kuadrat = Num*Num;
    console.log(kuadrat);
});

// 14. Buat program async/await untuk fetch `https://jsonplaceholder.typicode.com/posts`. Jika gagal, tangkap error dengan try...catch.  
//    **Clue:** bungkus `await fetch` di dalam `try {}`.  

async function ambilPosts(){
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
  } catch(e){ console.error("Error:", e.message); }
}
ambilPosts();

// 15. Tulis script yang membaca JSON string dari server, lalu mengubah properti `status` menjadi `"active"`.  
//    **Clue:** parse → ubah properti → stringify lagi.  

let jsonServer = '{"nama":"Budi","status":"inactive"}';
let obj = JSON.parse(jsonServer);
obj.status = "active";
console.log(JSON.stringify(obj));

// 16. Buat fungsi `getProduk()` yang return Promise. Jika stok ada, resolve `"Produk Tersedia"`, jika tidak, reject `"Produk Habis"`.  
//    **Clue:** pakai `if (stok > 0) resolve(...); else reject(...)`.  

function getProduk(stok){
  return new Promise((res,rej)=>{
if(stok>0){
    res("Produk Tersedia")
}rej("Produk Habis")
})}
getProduk(5).then(console.log).catch(console.error);

// 17. Pilih elemen `<img id="banner">` lalu ubah `src`-nya jadi `"banner.jpg"`, kemudian ubah lebarnya jadi `300px`.  
//    **Clue:** akses pakai `document.getElementById("banner")`.  

 const banner = document.getElementById("banner");
 banner.src="banner.jpg"; banner.style.width="300px";

// 18. Buat Promise chaining untuk simulasi: `"Connect Database"` → `"Ambil Data Produk"` → `"Tampilkan Data"` dengan jeda 1 detik tiap step.  
//    **Clue:** gunakan `setTimeout` di dalam Promise.  

const delay =function delay(msg) { return new Promise(r=>setTimeout(()=>r(msg),1000));}

delay("Connect Database")
  .then(m=>{console.log(m); return delay("Ambil Data Produk");})
  .then(m=>{console.log(m); return delay("Tampilkan Data");})
  .then(console.log);


// ---
