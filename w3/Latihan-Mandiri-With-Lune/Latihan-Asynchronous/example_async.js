// ------------------------------------
// Contoh Asynchronous di JavaScript
// ------------------------------------

// 1. setTimeout → jalankan sekali setelah delay tertentu
console.log("=== setTimeout ===");
console.log("mulai");
setTimeout(() => {
    console.log("halo setelah 2 detik");
}, 2000);
console.log("selesai (langsung dieksekusi, tidak menunggu)");


// 2. setInterval → jalankan berulang setiap interval
console.log("\n=== setInterval ===");
let hitung = 1;
let interval = setInterval(() => {
    console.log("detik ke-" + hitung);
    hitung++;
    if (hitung > 3) clearInterval(interval); // stop setelah 3x
}, 1000);


// 3. Promise dasar → resolve & reject
console.log("\n=== Promise dasar ===");
function cekAngka(n) {
    return new Promise((resolve, reject) => {
        if (n % 2 === 0) resolve("Genap");
        else reject("Ganjil");
    });
}
cekAngka(4).then(res => console.log("then:", res))
    .catch(err => console.log("catch:", err));


// 4. async & await
console.log("\n=== async/await ===");
function delay(ms) {
    return new Promise(resolve => setTimeout(() => resolve(ms), ms));
}
async function demoAsync() {
    console.log("mulai demoAsync");
    let hasil = await delay(1000);
    console.log("tunggu 1 detik, hasil =", hasil);
    console.log("selesai demoAsync");
}
demoAsync();


// 5. Promise.all → tunggu semua selesai
console.log("\n=== Promise.all ===");
let p1 = delay(500).then(() => "A");
let p2 = delay(800).then(() => "B");
Promise.all([p1, p2]).then(r => console.log("all selesai:", r));


// 6. Promise.race → ambil yang paling cepat
console.log("\n=== Promise.race ===");
let p3 = delay(300).then(() => "Cepat");
let p4 = delay(600).then(() => "Lambat");
Promise.race([p3, p4]).then(w => console.log("pemenang race:", w));


// 7. Error handling async/await
console.log("\n=== Error handling async/await ===");
async function demoError() {
    try {
        let r = await new Promise((res, rej) => rej("ada error"));
        console.log(r);
    } catch (e) {
        console.log("tertangkap error:", e);
    }
}
demoError();


// 8. Event loop demo
console.log("\n=== Event loop demo ===");
console.log("start");
setTimeout(() => console.log("timeout 0"), 0);
Promise.resolve().then(() => console.log("promise microtask"));
console.log("end");

// Output urutan:
// start
// end
// promise microtask
// timeout 0
