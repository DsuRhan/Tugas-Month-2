//Study case 2. JSON dan Object COnvert
// 1. Convert User Object ke JSON
let user = { nama:"Ali", umur:20, email:"ali@mail.com" };
let json = JSON.stringify(user);
console.log(json); // {"nama":"Ali","umur":20,"email":"ali@mail.com"}

// 2. Convert JSON ke Object
let str = '{"nama":"Ali","umur":20}';
let obj = JSON.parse(str);
console.log(obj.nama); // Ali

// 3. Simpan Daftar Produk
let produk = [
  {nama:"Laptop",harga:8000000},
  {nama:"HP",harga:3000000}
];
let jsonProduk = JSON.stringify(produk);
let parseProduk = JSON.parse(jsonProduk);
console.log(parseProduk[0].nama); // Laptop

// 4. Filter dari JSON
let siswa = '[{"nama":"Budi","nilai":80},{"nama":"Yanto","nilai":60}]';
let arr = JSON.parse(siswa);
console.log(arr.filter(s=>s.nilai>75)); // [{nama:"Budi",nilai:80}]

// 5. Gabungkan JSON
let userStr = '{"nama":"Ali"}';
let alamatStr = '{"kota":"Bandung"}';
let gabung = {...JSON.parse(userStr), ...JSON.parse(alamatStr)};
console.log(gabung); // {nama:"Ali", kota:"Bandung"}

// Studi Kasus 3. SetTimeout

// 1. Pesan Tertunda
setTimeout(()=>console.log("Halo dunia!"),3000);

// 2. Hitung Mundur 5 Detik
for(let i=5;i>=1;i--){
  setTimeout(()=>console.log(i), (6-i)*1000);
}

// 3. Loading Simulation
console.log("Loading...");
setTimeout(()=>console.log("Selesai!"),2000);

// 4. Pesan Bertahap
console.log("Start");
setTimeout(()=>console.log("Proses..."),2000);
setTimeout(()=>console.log("Done"),4000);

// 5. Simulasi Alarm
setTimeout(()=>console.log("Waktunya belajar!"),5000);


// Studi Kasus 4. setInterval

// 1. Jam Digital
setInterval(()=>{
  let d=new Date();
  console.log(d.toLocaleTimeString());
},1000);

// 2. Hitung Mundur
let n=10;
let timer=setInterval(()=>{
  console.log(n);
  n--;
  if(n<0) clearInterval(timer);
},1000);

// 3. Notifikasi Berkala
setInterval(()=>console.log("Minum air dulu!"),3000);

// 4. Simulasi Loading
let count=0;
let load=setInterval(()=>{
  console.log("Loading"+".".repeat(count));
  count++;
  if(count>5) clearInterval(load);
},1000);

// 5. Counter Naik
let c=0;
let naik=setInterval(()=>{
  console.log(c);
  c++;
  if(c>10) clearInterval(naik);
},2000);


// Studi Kasus 5. Callback Function dasar

// 1. Kalkulasi dengan Callback
function kalkulasi(a,b,cb){ return cb(a,b); }
console.log(kalkulasi(3,4,(x,y)=>x+y)); // 7

// 2. Sapa dengan Callback
function greet(nama,cb){ return cb(nama); }
console.log(greet("Ali",n=>"Halo "+n)); // Halo Ali

// 3. Filter Angka dengan Callback
function filterAngka(arr,cb){ return arr.filter(cb); }
console.log(filterAngka([1,2,3,4],n=>n%2===0)); // [2,4]

// 4. Sorting dengan Callback
function sortData(arr,cb){ return arr.sort(cb); }
console.log(sortData([3,1,2],(a,b)=>a-b)); // [1,2,3]

// 5. Validasi Input
function validasi(data,cb){ return cb(data); }
console.log(validasi("abc",d=>d.length>0)); // true



// Studi Kasus 6.  Callback Function Anonim

// 1. Hitung Luas
function hitung(a,cb){ return cb(a); }
console.log(hitung(5,function(x){return x*x})); // 25

// 2. Tampilkan Pesan
function tampilkanPesan(cb){ cb(); }
tampilkanPesan(function(){console.log("Halo")});

// 3. Operasi Array
[1,2,3].forEach(function(n){ console.log(n); });

// 4. Filter Data
console.log([1,2,3,4].filter(function(n){return n%2===0})); // [2,4]

// 5. Map Data
console.log([1,2,3].map(function(n){return n*n})); // [1,4,9]
