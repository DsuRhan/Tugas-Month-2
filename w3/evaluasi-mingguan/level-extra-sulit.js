// ### 🔹 Level Extra Sulit (2 soal – Fetch API)

// 24. Buat program async/await yang fetch dari `https://equran.id/api/v2/surat`, lalu tampilkan semua nama surat di halaman HTML dalam bentuk list `<ul><li>...</li></ul>`.  
//    **Clue:** looping hasil `data.data` lalu buat elemen `<li>` pakai `innerHTML`.  

 async function loadSurat(){
   const res=await fetch("https://equran.id/api/v2/surat");
   const data=await res.json();
   document.getElementById("list").innerHTML =
     data.data.map(s=>`<li>${s.namaLatin}</li>`).join("");
 }
 loadSurat();


// 25. Buat script async yang fetch dari `https://jsonplaceholder.typicode.com/todos`. Hitung berapa banyak todo yang `completed: true`, lalu tampilkan hasilnya.  
//    **Clue:** gunakan `filter(todo => todo.completed).length`.  

async function loadTodo(){
  const res=await fetch("https://jsonplaceholder.typicode.com/todos");
  const data=await res.json();
  const completedTodo = data.filter(todo => todo.completed).length;
  console.log("Jumlah To Do yang completed: " + completedTodo);
}
loadTodo();