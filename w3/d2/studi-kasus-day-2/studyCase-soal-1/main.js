import { tambahBuku, cariBuku, hapusBuku} from "./book.js"


tambahBuku("Laskar Pelangi");
console.log(cariBuku("Laskar Pelangi")); // true
hapusBuku("Laskar Pelangi");
console.log(cariBuku("Laskar Pelangi")); // false
