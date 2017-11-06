$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    $('.background').css({
        'transform': 'translate(0px, -' + wScroll / 10 + '%)'
    });
    
    $('.background h1').css({
        'transform': 'translate(0px, -' + wScroll / 20 + '%)'
    });

});