const hariEl = document.getElementById("days");
const jamEl = document.getElementById("hours");
const menitEl = document.getElementById("mins");
const detikEl = document.getElementById("seconds");

const tanggalTujuan = new Date("jan 1, 2022").getTime();

const countdown = setInterval(function () {
  const sekarang = new Date().getTime();
  const selisi = tanggalTujuan - sekarang;

  const hari = Math.floor(selisi / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisi % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((selisi % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((selisi % (1000 * 60)) / 1000);

  // const teks = document.getElementById("teks");
  // teks.innerHTML =
  //   "Waktu anda tinggal : " +
  //   hari +
  //   " hari " +
  //   jam +
  //   " jam " +
  //   menit +
  //   " menit " +
  //   detik +
  //   " detik lagi!";

  // if (selisi == 0) {
  //   clearInterval(countdown);
  //   teks.innerHTML = "waktu anda habis";
  // }
  hariEl.innerHTML = hari;
  jamEl.innerHTML = jam;
  menitEl.innerHTML = menit;
  detikEl.innerHTML = detik;
  // console.log(hari, jam, menit, detik);
  if (selisi == 0) {
    clearInterval(countdown);
    teks.innerHTML = "Happy New Years";
  }
}, 1000);
