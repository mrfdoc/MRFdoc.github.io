//* eventlink*//
$('.page-scroll').on('click', function(e) {
    
    // ambil isi href
    var href = $(this).attr('href');
    // tangkap elemen
    var elemenHref = $(href);

    // pindah scroll
    $('html, body').animate({
        scrollTop: elemenHref.offset().top - 50
    }, 1250, 'easeInOutExpo');

    e.preventDefault();
});