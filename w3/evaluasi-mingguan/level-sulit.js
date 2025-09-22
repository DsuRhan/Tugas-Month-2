// ### Level Sulit (5 soal)

// 19. Kamu punya modul `konversi.js` yang berisi fungsi `toJSON(obj)` dan `toObject(json)`. Gunakan di `app.js`.  
//    **Clue:** `export` keduanya lalu `import {toJSON, toObject}`.  

//Jawaban di folder "soal-terkait-modularisasi"

// 20. Buat callback hell sederhana: login → ambil data → tampilkan data → simpan log. Lalu refactor menjadi Promise chaining.  
//    **Clue:** mulai dari `setTimeout` bersarang, lalu pecah ke Promise.  

// Callback hell
setTimeout(()=> {
  console.log("Login");
  setTimeout(()=>{
    console.log("Ambil Data");
    setTimeout(()=>{
      console.log("Tampilkan Data");
      setTimeout(()=>console.log("Simpan Log"),500);
    },500);
  },500);
},500);

// Refactor Promise
const step = msg => new Promise(r=>setTimeout(()=>r(msg),500));
step("Login")
  .then(console.log)
  .then(()=>step("Ambil Data")).then(console.log)
  .then(()=>step("Tampilkan Data")).then(console.log)
  .then(()=>step("Simpan Log")).then(console.log);


// 21. Buat async function yang mengambil data `https://jsonplaceholder.typicode.com/comments`, lalu filter komentar yang email-nya mengandung `"@gmail.com"`.  
//    **Clue:** gunakan `data.filter(c => c.email.includes("@gmail.com"))`.  
async function filterKomen(){
  const ambil=await fetch("https://jsonplaceholder.typicode.com/comments");
  const data=await ambil.json();
  console.log(data.filter(c=>c.email.includes("@gmail.com")));
}
filterKomen();

// 22. Tulis fungsi `prosesData(data)` yang berjalan async. Jika data kosong, lempar error `"Data tidak boleh kosong"`. Tangani error dengan try...catch.  

async function prosesData(data) {
    if(!data) throw new Error("Data tidak boleh kosong");
    try{
        console.log("Sedang Diproses: "+data)
    }catch(er){console.log("Error: "+er.message)}
}
prosesData("ABCD");
prosesData();
// 23. Pilih semua elemen dengan `class="card"` lalu ubah teks, warna background, dan tambahkan border berbeda-beda untuk tiap card.  
//    **Clue:** gunakan `querySelectorAll(".card").forEach(...)`.  

 document.querySelectorAll(".card").forEach((c,i)=>{
   c.innerText = "Card "+(i+1);
   c.style.background = i%2 === 0?"lightblue":"lightgreen";
   c.style.border =i%2 === 0? "2px solid black":"4px solid black";
 });

// ---