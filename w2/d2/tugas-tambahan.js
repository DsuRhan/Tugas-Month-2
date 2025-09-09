// Simpan data di dua array sejajar
let usernames = [];
let passwords = [];

// CREATE → Register
function register() {
    let user = prompt("Masukkan username baru:");
    let pass = prompt("Masukkan password baru:");

    if (user && pass) {
        usernames.push(user);
        passwords.push(pass);
        alert("User berhasil didaftarkan!");
    } else {
        alert("Username dan password tidak boleh kosong.");
    }
}

// LOGIN
function login() {
    let user = prompt("Masukkan username:");
    let pass = prompt("Masukkan password:");

    let index = usernames.indexOf(user);

    if (index !== -1 && passwords[index] === pass) {
        alert("Login berhasil, selamat datang " + user);
    } else {
        alert("Username atau password salah!");
    }
}

// READ → Tampilkan User
function tampilkanUser() {
    if (usernames.length === 0) {
        alert("Belum ada user terdaftar.");
        return;
    }

    let daftar = "Daftar User:\n";
    usernames.forEach((u, i) => {
        daftar += (i + 1) + ". " + u + "\n";
    });
    alert(daftar);
}

// UPDATE → Ubah password
function updateUser() {
    let user = prompt("Masukkan username yang ingin diupdate:");
    let index = usernames.indexOf(user);

    if (index !== -1) {
        let newPass = prompt("Masukkan password baru:");
        passwords[index] = newPass;
        alert("Password berhasil diupdate untuk " + user);
    } else {
        alert("User tidak ditemukan.");
    }
}

// DELETE
function deleteUser() {
    let user = prompt("Masukkan username yang ingin dihapus:");
    let index = usernames.indexOf(user);

    if (index !== -1) {
        usernames.splice(index, 1);
        passwords.splice(index, 1);
        alert("User " + user + " berhasil dihapus.");
    } else {
        alert("User tidak ditemukan.");
    }
}
