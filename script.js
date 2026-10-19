// Ambil elemen jendela detail
const detail = document.getElementById("detail");
const detailImg = document.getElementById("detail-img");
const detailBrand = document.getElementById("detail-brand");
const detailJudul = document.getElementById("detail-judul");
const detailDeskripsi = document.getElementById("detail-deskripsi");

// Saat salah satu foto diklik, tampilkan foto + brand + judul + deskripsinya
document.querySelectorAll(".photo").forEach(function (foto) {
  foto.addEventListener("click", function () {
    const gambar = foto.querySelector("img");

    detailImg.src = gambar.src;
    detailImg.alt = gambar.alt;
    detailBrand.textContent = foto.dataset.brand;
    detailJudul.textContent = foto.dataset.judul;
    detailDeskripsi.textContent = foto.dataset.deskripsi;

    detail.showModal();
  });
});

// Tombol Tutup
document.getElementById("detail-tutup").addEventListener("click", function () {
  detail.close();
});

// Klik di luar kotak (area gelap) juga menutup
detail.addEventListener("click", function (e) {
  if (e.target === detail) detail.close();
});