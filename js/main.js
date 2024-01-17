(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    document.addEventListener('DOMContentLoaded', function () {
        // Ganti waktu slide (dalam milidetik)
        var waktuSlide = 3000; // Misalnya, setiap 5 detik

        // Ambil elemen carousel
        var carousel = document.querySelector('.carousel');

        // Buat objek Carousel Bootstrap
        var carouselObj = new bootstrap.Carousel(carousel, {
            interval: waktuSlide
        });
    });
    // Initiate the wowjs
    new WOW().init();
    
    // Mendaftarkan event handler untuk mengaktifkan Lightbox saat tombol diklik
    $(document).ready(function () {
        $('.btn-primary[data-lightbox="gallery"]').on('click', function (e) {
            e.preventDefault(); // Mencegah perilaku default dari tautan

            var href = $(this).attr('href');
            var title = $(this).data('title');

            // Membuka Lightbox dengan gambar dan judul yang sesuai
            lightbox.option({
                'resizeDuration': 200,
                'wrapAround': true
            });

            lightbox.showLightbox(href, title);
        });
    });


    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    // form book
    document.addEventListener('DOMContentLoaded', function () {
        // Mengambil elemen link untuk membuka modal
        var openModalLink = document.querySelector('a[data-bs-toggle="modal"][data-bs-target="#formpesan"]');
    
        // Menambahkan event listener pada link untuk membuka modal
        openModalLink.addEventListener('click', function () {
            // Menampilkan modal
            var modal = new bootstrap.Modal(document.getElementById('formpesan'));
            modal.show();

            // Menangani penutupan modal untuk membersihkan kelas modal-open
            modal._element.addEventListener('hidden.bs.modal', function () {
                // Menambahkan kelas modal-open kembali setelah delay
                setTimeout(function () {
                    document.body.classList.add('modal-open');
                }, 200);
    
                // Refresh halaman dan fokus ke elemen dengan id="menu"
                setTimeout(function () {
                    location.reload();
                    document.getElementById('menu').focus();
                }, 400);
            });
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var namaLengkapInput = document.getElementById('namaLengkap');
        var noTeleponInput = document.getElementById('noTelepon');
        var alamatInput = document.getElementById('alamat');
        var menuInput = document.getElementById('menu1');
        var kirimButton = document.querySelector('#formpesan .btn-dark');

        kirimButton.addEventListener('click', function () {
            var namaLengkap = namaLengkapInput.value;
            var noTelepon = noTeleponInput.value;
            var alamat = alamatInput.value;
            var menu1 = menuInput.value;

            // Check if all form fields are filled
            if (namaLengkap === '' || noTelepon === '' || alamat === '' || menu1 === '') {
              Swal.fire({
              icon: "warning",
              text: "Lengkapi Formulir Sebelum Melanjutkan",
              });
            } else {
                var formattedData = 'Nama Lengkap: ' + namaLengkap + '\n'
                    + 'No Telepon: ' + noTelepon + '\n'
                    + 'Alamat: ' + alamat + '\n'
                    + 'Pesan: ' + menu1;

                var whatsappLink = 'https://api.whatsapp.com/send?phone= +6283117589765&text=' + encodeURIComponent('Member Baru:\n' + formattedData);
                window.open(whatsappLink);
            }
        });
    });
    
})(jQuery);

