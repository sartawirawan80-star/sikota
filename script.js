function showSection(id) {
    document.querySelectorAll("section").forEach(sec => {
        sec.classList.add("hidden");
    });
    document.getElementById(id).classList.remove("hidden");
}

function login() {
    alert("Login berhasil! Selamat datang di SiKOTA.");
    showSection("pengajuan");
}

function submitPengajuan() {
    alert("Pengajuan berhasil dikirim!");
}

function cekStatus() {
    document.getElementById("status").innerText =
        "Status: Sedang Diproses oleh Admin";
}

function kirimPengaduan() {
    alert("Pengaduan berhasil dikirim. Terima kasih.");
}
