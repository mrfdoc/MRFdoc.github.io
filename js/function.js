$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    $('.background').css({
        'transform': 'translate(0px, -' + wScroll / 20 + '%)'
    });
    
    $('.background h1').css({
        'transform': 'translate(0px, -' + wScroll / 20 + '%)'
    });

});