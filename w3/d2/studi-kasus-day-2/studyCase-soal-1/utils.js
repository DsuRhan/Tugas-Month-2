export function cekGanjilGenap(angka){
  return angka%2===0 ? "Genap":"Ganjil";
}
export function balikString(str){ return str.split("").reverse().join(""); }
export function randomNumber(){ return Math.floor(Math.random()*10)+1; }
