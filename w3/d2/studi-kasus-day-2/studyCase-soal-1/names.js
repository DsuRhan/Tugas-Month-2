let daftar = [];

export function tambahNama(nama){ daftar.push(nama); }
export function hapusNama(nama){ daftar = daftar.filter(n=>n!==nama); }
export function tampilkanNama(){ return daftar; }
