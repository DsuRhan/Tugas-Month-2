// 1. Ambil data user daru API publik
async function fetchUser() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await res.json();
    console.log(user.name); // expected output
  } catch (err) {
    console.error('Gagal mengambil user:', err.message);
  }
}
fetchUser();
// 2. Ambil daftar post, cek jumlahnya
async function fetchPost() {
    try{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const post = await res.json();
    if (post.length > 50) console.log('Post banyak sekali');
    else console.log('Jumlah post:', post.length);
  } catch (err) {
    console.error('Error:', err.message);
  }
}
fetchPost();
// 3. Promise manual dengan setTimeout
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitTwoSeconds() {
    console.log(`Menunggu...`)
  await delay(2000);
  console.log('Selesai menunggu');
}

waitTwoSeconds();
// 4. Fetch dengan URL salah
async function fetchWrongUrl() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.co');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log('Gagal mengambil data API');
  }
}
fetchWrongUrl();
// 5. Cek status API
async function fetchCheckStatus() {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        if (!res.ok) throw new Error('API tidak bisa diakses');
    const todo = await res.json();
    console.log(todo);
  } catch (err) {
    console.error(err.message);
  }
}
fetchCheckStatus();
// 6. Promise.all
async function fetchPromiseAll() {
    try{
        const urls = [
            `https://jsonplaceholder.typicode.com/users`,
            `https://jsonplaceholder.typicode.com/posts`
        ];
    const [resUsers, resPosts] = await Promise.all(urls.map(u => fetch(u)));
    if (!resUsers.ok || !resPosts.ok) throw new Error('Salah satu fetch gagal');
    const users = await resUsers.json();
    const posts = await resPosts.json();
    console.log([users, posts]);
  } catch (err) {
    console.error('Error:', err.message);
  }
}
// 7. Chaining Promise
function angka5(angka){
    return new Promise((resolve) => {
        resolve(angka);
    })
}
angka5(5)
  .then(x => {
    return angka5(x * 2);
  })
  .then(x => {
    return angka5(x * 3)
  })
  .then(result => console.log('Hasil:', result))
  .catch(err => console.error('Error:', err));
// 8. Async function dengan throw error
async function checkNumber(num) {
  return new Promise((resolve) => {
    try {
      if (num % 2) throw new Error("Angka ganjil tidak diperbolehkan");
      resolve("Angka valid");
    } catch (err) {
      resolve(`Error: ${err.message}`);
    }
  });
}

checkNumber(4).then(console.log);
checkNumber(3).then(console.log);

// 9. Fetch dengan parameter
async function getPostById(id) {
  try {
    if (id > 100) throw new Error('Post tidak ada');
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) throw new Error('HTTP error');
    const post = await res.json();
    console.log(post.title);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

getPostById(10);
getPostById(150);

// 10. Loop fetch dengan async/await
async function fetchThreeUsers() {
  try {
    for (let id = 1; id <= 3; id++) {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!res.ok) throw new Error(`User ${id} not found`);
        const user = await res.json();
        console.log(`User ${id}:`, user.name);
      } catch (innerErr) {
        console.error(`Gagal ambil user ${id}:`, innerErr.message);
      }
    }
  } catch (err) {
    console.error('Unexpected error:', err);
  }
}
fetchThreeUsers();
// 11. Fetch data todo
async function checkTodoCompleted() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/5');
    if (!res.ok) throw new Error('Fetch failed');
    const todo = await res.json();
    console.log(todo.completed ? 'Selesai' : 'Belum selesai');
  } catch (err) {
    console.error('Error:', err.message);
  }
}
checkTodoCompleted();
// 12. Promise reject
const p = new Promise((res,reject) => reject('Data gagal diproses'));
p.catch(err => console.error(err));
// 13. Try/catch nested
async function nestedTryCatch() {
  try {
    const res = await fetch('https://invalid.domain.example'); // network error
    try {
      const data = await res.json();
      console.log(data);
    } catch (parseErr) {
      console.error('Error parsing JSON:', parseErr.message);
    }
  } catch (netErr) {
    console.error('Network error:', netErr.message);
  }
}
nestedTryCatch();
// 14. Fetch gambar
async function fetchImage() {
  try {
    const res = await fetch('https://picsum.photos/200/300');
    console.log('Status:', res.status);
  } catch (err) {
    console.log('Gagal ambil gambar');
  }
}
fetchImage();
// 15. Delay dengan fetch
async function delayFetch(url, ms) {
  return new Promise(r => setTimeout(r, ms)).then(() => fetch(url));
}

// pemanggilan lebih singkat:
delayFetch('https://jsonplaceholder.typicode.com/todos/1', 1500)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error('Error:', err.message));

// 16. Promise.race
async function promiseRace() {
  const a = fetch('https://jsonplaceholder.typicode.com/users').then(() => 'users');
  const b = fetch('https://jsonplaceholder.typicode.com/posts').then(() => 'posts');

  try {
    const winner = await Promise.race([a, b]);
    console.log('Pemenang:', winner);
  } catch (err) {
    console.log('Semua request gagal');
  }
}
promiseRace();
//17. Fetch JSON invalid

async function fetchJsonInvalid() {
  try {
    const res = await fetch('https://example.com/'); // example.com biasanya HTML
    const data = await res.json(); // akan throw
    console.log(data);
  } catch (err) {
    console.error('Parsing error or fetch failed:', err.message);
  }
}
fetchJsonInvalid();
//18. Fungsi async recursive
async function recursiveCount(n = 3) {
  if (n <= 0) return;
  console.log('Call with n =', n);
  await new Promise(r => setTimeout(r, 1000));
  await recursiveCount(n - 1);
  console.log('Return from n =', n);
}
recursiveCount(3);
//19. Error manual di fetch
// 19
async function checkCommentEmail() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments/1');
    if (!res.ok) throw new Error('Fetch failed');
    const comment = await res.json();
    if (!comment.email) throw new Error('Email tidak ada');
    console.log('Email:', comment.email);
  } catch (err) {
    console.error('Error:', err.message);
  }
}
checkCommentEmail();
//20. Kombinasi Promise + async
// 20
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data siap');
      reject(new Error('Gagal ambil data'));
    }, 500);
  });
}

async function useData() {
  try {
    const result = await getData();
    console.log(result);
  } catch (err) {
    console.error('Catch:', err.message);
  }
}
useData();



