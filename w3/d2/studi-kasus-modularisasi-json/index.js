import dataDiri from "./biodata.js";
import { tambah, kurang, kali, bagi} from './math.js';
import produk from "./produk.json" with {type:'json'};
import { formatRupiah } from "./helper.js";
import { getAllUser, getUserById } from "./userService.js";
import { addTask, getAllTask, deleteTask } from "./taskService.js";
import { login, register } from "./auth.js";
import { getPosts } from "./postService.js";
import { rataRata, nilaiTertinggi, nilaiTerendah } from "./statistik.js";
import { getAllBooks, addBook, findBookByTitle } from "./libraryService.js";







//1
console.log(dataDiri);
//2
console.log(tambah(20,5));
console.log(kurang(30,10));
console.log(kali(6,7));
console.log(bagi(50,2));
//3
produk.forEach(p => {
  console.log(`Produk: ${p.nama}, Harga: ${p.harga}`);
//4
});
produk.forEach(p => {
  console.log(`Produk: ${p.nama}, Harga: ${formatRupiah(p.harga)}`);
});
//5
console.log(getAllUser());
console.log(getUserById(2));
//6

addTask("Belajar JS");
addTask("Baca Buku");
addTask("Sholat");

console.log("Semua Task:", getAllTask());

deleteTask(2);
console.log("Setelah Hapus:", getAllTask());
//7
console.log("Login admin:", login("admin", "1234"));
register("budi", "abcd");
console.log("Login budi:", login("budi", "abcd"));
//8
const posts = await getPosts();
posts.forEach(p => console.log(p.id, p.title));
//9
console.log("Rata-rata:", rataRata());
console.log("Tertinggi:", nilaiTertinggi());
console.log("Terendah:", nilaiTerendah());
//10
addBook({ id: 2, judul: "Bumi", penulis: "Tere Liye", tahun: 2014 });

console.log("Semua Buku:", getAllBooks());
console.log("Cari Buku 'Bumi':", findBookByTitle("Bumi"));
