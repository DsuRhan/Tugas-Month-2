let menu = [
    { Nama: "Steak", Kategori: "Makanan", Harga: 85000 },
    { Nama: "Lobster", Kategori: "Makanan", Harga: 35000 },
    { Nama: "Pecel Lele", Kategori: "Makanan", Harga: 10000 },
    { Nama: "Nazi Goreng", Kategori: "Makanan", Harga: 12000 },
    { Nama: "Ayam Gebrek", Kategori: "Makanan", Harga: 8000 },
    { Nama: "Ez Teh", Kategori: "Minuman", Harga: 3000 },
    { Nama: "Ez Jeruk", Kategori: "Minuman", Harga: 5000 }
];
menu.forEach(item => {
    console.log(`Nama: ${item.Nama} | Kategori: ${item.Kategori} | Harga: ${item.Harga}`)
});
let menuMurah = menu.filter(item => item.Harga < 30000);
console.log(`\nDaftar menu yang murah (<30.000): \n${menuMurah.map(m => m.Nama).join(", ")}`);
let namaMenu = menu.map(item => item.Nama);
console.log(`\nDaftar Menu :`);
console.log(namaMenu);
let totalHarga = menu.reduce((total, item) => total + item.Harga, 0);
console.log(`\nTotal Harga semua menu adalah : \n${totalHarga}`);
let cariMenu = menu.find(item => item.Nama === "Ez Jeruk");
console.log(`\nMenu Ditemukan : \n ${cariMenu.Nama}`);
let [makanan1, makanan2] = menu;
console.log("\nDestructuring Array:");
console.log("makanan1 =", makanan1);
console.log("makanan2 =", makanan2);
let { Nama, Harga } = menu[3];
console.log("\nDestructuring Object:");
console.log("nama =", Nama, ", harga =", Harga);
