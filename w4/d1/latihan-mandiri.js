    // 1. Ubah isi paragraf
    document.getElementById('ubahParagraf').addEventListener('click', () => {
      document.getElementById('paragraf').innerText = 'Isi paragraf sudah berubah!';
    });

    // 2. querySelector() untuk ubah background
    document.querySelector('#judul').style.backgroundColor = 'lightyellow';

    // 3. Input teks + tombol tampilkan ke paragraf
    document.getElementById('tampilInput').addEventListener('click', () => {
      const val = document.getElementById('inputText').value;
      document.getElementById('paragraf').innerText = val || '(kosong)';
    });

    // Studi Kasus: Biodata
    const biodataDiv = document.getElementById('biodata');

    document.getElementById('btnData').addEventListener('click', () => {
      const nama = 'Unit L00_N.47';
      const umur = 2;
      biodataDiv.innerHTML = `<strong>Nama:</strong> ${nama}<br><strong>Umur:</strong> ${umur} tahun`;
    });

    document.getElementById('btnWarna').addEventListener('click', () => {
      const warnaAcak = `hsl(${Math.floor(Math.random()*360)},70%,40%)`;
      biodataDiv.style.color = warnaAcak;
    });