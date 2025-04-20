// Tambahkan efek animasi sederhana saat halaman dimuat
window.onload = () => {
    document.querySelector(".container").style.opacity = 0;
    setTimeout(() => {
        document.querySelector(".container").style.transition = "opacity 2s";
        document.querySelector(".container").style.opacity = 1;
    }, 100);
};
