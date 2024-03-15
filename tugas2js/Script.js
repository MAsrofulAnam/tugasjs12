function tampilkanData() {
    var nama = document.getElementById("nama").value;
    var pekerjaan = document.getElementById("pekerjaan").value;
    var hobi = document.getElementById("hobi").value;
    var hasil = document.getElementById("hasil");
    hasil.innerHTML = "<h2>Hasil:</h2>" +
                      "<p>Nama: " + nama + "</p>" +
                      "<p>Pekerjaan: " + pekerjaan + "</p>" +
                      "<p>Hobi: " + hobi + "</p>";
  }