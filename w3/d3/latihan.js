// 📌 Soal 1 – Ambil Data Berantai

// Buatlah tiga function getUser(), getPost(), dan getComment() yang masing-masing mengembalikan Promise dengan setTimeout.

// getUser() → setelah 1 detik kembalikan "User ditemukan".
function getUser(){
    return new Promise((resolve)=>{
        setTimeout(()=> {
            resolve("User ditemukan")
        },1000)
    })
}
// getPost() → setelah 1 detik kembalikan "Post ditemukan".
function getPost(){
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve("Post ditemukan") 
        }, 1000);
    })
}
// getComment() → setelah 1 detik kembalikan "Komentar ditemukan".
function getComment() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Komentar ditemukan")
        }, 1000);
    })
}
// Gunakan Promise chaining agar outputnya muncul berurutan:

getUser()
  .then(res => {
    console.log(res);
    return getPost();
  })
  // User ditemukan
  .then(res => {
    console.log(res);
    return getComment();
  })
  // Post ditemukan
  .then(res => console.log(res));
  // Komentar ditemukan

// 📌 Soal 2 – Kalkulasi Matematika

// Buatlah dua function yang mengembalikan Promise:

// tambah(x, y) → hasil penjumlahan
function tambah(x, y) {
  return new Promise(resolve => {
    resolve(x + y);
  });
}
// kali(x, y) → hasil perkalian
function kali(x, y) {
  return new Promise(resolve => {
    resolve(x * y);
  });
}
// Gunakan chaining untuk menghitung langkah berikut:
// Tambah 5 + 7
tambah(5, 7)
  // Kali hasilnya dengan 3
.then(hasilTambah => {
    console.log("Hasil tambah:", hasilTambah); // 12
    return kali(hasilTambah, 3);
  })
// Tampilkan hasil akhir di console
  .then(hasilKali => console.log("Hasil akhir:", hasilKali)); // 36

// 📌 Soal 3 – Validasi Input

// Buatlah dua function yang mengembalikan Promise:

// cekNama(nama) → resolve "Nama valid" jika tidak kosong, reject jika kosong.
function cekNama(nama){
    return new Promise((resolve, reject) => {
        if(nama !== ""){
            resolve ("Nama valid")
        }else{
            reject ("Nama tidak valid")
        }
    })
}

// cekEmail(email) → resolve "Email valid" jika ada tanda "@", reject jika tidak ada.
function cekEmail(email){
    return new Promise((resolve, reject) => {
        if(email.includes("@")){
            resolve ("Email valid")
        }else{
            reject ("Email tidak valid")
        }
    })
}
// Gunakan Promise chaining untuk memvalidasi:

// Nama = "Danz"
let nama = "Danz";
// Email = "danz@example.com"
let email = "danz@example.com";

// Tampilkan hasil validasi di console. Jika ada error, tangani dengan .catch().
cekNama(nama)
  .then(res => {
    console.log(res);
    return cekEmail(email);
  })
  .then(res => console.log(res))
  .catch(err => console.error("Error:", err));
// 📌 Soal 4 – Simulasi Belanja Online

// Buatlah tiga function berbasis Promise dengan setTimeout:

// login() → kembalikan "Login berhasil" setelah 1 detik.
function login(){
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve("Login berhasil")
        }, 1000);
    })
}
// pilihBarang() → kembalikan "Barang dipilih" setelah 1 detik.
function pilihBarang(){
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve("Barang dipilih")
        }, 1000);
    })
}
// bayar() → kembalikan "Pembayaran sukses" setelah 1 detik.
function bayar(){
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve("Pembayaran sukses")
        }, 1000);
    })
}
// Gunakan Promise chaining agar console menampilkan urutan proses belanja.
login()
  .then(res => {
    console.log(res);
    return pilihBarang();
  })
  .then(res => {
    console.log(res);
    return bayar();
  })
  .then(res => console.log(res));
// 📌 Soal 5 – Progress Loading

// Buatlah function progress(step) yang mengembalikan Promise dengan setTimeout, hasilnya berupa string:

// "Progress: <step>%"
function progress(step) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`Progress: ${step}%`), 500);
  });
}
// Gunakan chaining untuk menampilkan:

// Progress: 25%
progress(25)
  .then(res => {
    console.log(res);
    return progress(50);
  })
// Progress: 50%
  .then(res => {
    console.log(res);
    return progress(75);
  })
// Progress: 75%
  .then(res => {
    console.log(res);
    return progress(100);
  })
// Progress: 100%
  .then(res => {
    console.log(res);
// Selesai!
    console.log("Selesai!");
  });



// 👉 Semua soal di atas wajib menggunakan Promise dan Chaining (.then()), bukan async/await.