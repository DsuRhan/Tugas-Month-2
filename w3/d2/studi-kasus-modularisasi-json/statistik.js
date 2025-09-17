import nilai from "./nilai.json" with { type: "json" };

export function rataRata() {
  return nilai.reduce((a, b) => a + b, 0) / nilai.length;
}

export function nilaiTertinggi() {
  return Math.max(...nilai);
}

export function nilaiTerendah() {
  return Math.min(...nilai);
}
