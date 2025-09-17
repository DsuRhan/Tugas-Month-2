let target = Math.floor(Math.random()*10)+1;

export function tebak(angka){
  if(angka===target) return "Benar!";
  else if(angka<target) return "Terlalu kecil";
  else return "Terlalu besar";
}
