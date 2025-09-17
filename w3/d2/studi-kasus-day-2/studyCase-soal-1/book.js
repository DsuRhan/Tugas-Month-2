let buku = [];

export function tambahBuku(judul){ buku.push(judul); }
export function cariBuku(judul){ return buku.includes(judul); }
export function hapusBuku(judul){ buku = buku.filter(b=>b!==judul); }
