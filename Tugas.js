$(document).ready(function () {
  //efek fade in untuk semua gambar saat halaman dimuat
  $(".galeri img").hide().fadeIn(1000);

  //membuka gambar dalam modal saat diklik
  $(".galeri img").click(function () {
    const imgSrc = $(this).attr("src");
    $("#modalImage").attr("src", imgSrc);
    $("#imageModal").fadeIn();
  });

  //menutup modal saat tombol "Close" diklik
  $(".close").click(function () {
    $("#imageModal").fadeOut();
  });

  //menutup modal saat area luar gambar diklik
  $("#imageModal").click(function (e) {
    if ($(e.target).is("#imageModal")) {
      $("#imageModal").fadeOut();
    }
  });
});
