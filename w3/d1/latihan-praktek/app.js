import prayerTime from "./components/prayerTimes.js"

const apiPrayerTime = await prayerTime();
const jadwals = apiPrayerTime.jadwal.data.jadwal;
const lokasi = apiPrayerTime.location;


const prayerTimes = [
    { name: "Subuh", jadwal: jadwals.subuh },
    { name: "Dzuhur", jadwal: jadwals.dzuhur },
    { name: "Ashar", jadwal: jadwals.ashar },
    { name: "Maghrib", jadwal: jadwals.maghrib },
    { name: "Isya", jadwal: jadwals.isya }
]

function render() {
    const prayerTime = document.getElementById("prayerTimes");
    prayerTime.innerHTML = ""
    for (let i = 0; i < prayerTimes.length; i++) {
        const div = document.createElement("div");

        div.innerHTML = `
        <div class="nama">${prayerTimes[i].name}</div>
        <div class="jadwal">${prayerTimes[i].jadwal}</div>
        `
        prayerTime.appendChild(div)
    }

}
console.log(jadwals);
console.table(prayerTimes);

render()