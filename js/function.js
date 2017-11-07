$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    $('.latar').css({
        'transform': 'translate(0px, -' + wScroll / 20 + '%)'
    });
    
    $('.latar h1').css({
        'transform': 'translate(0px, -' + wScroll / 20 + '%)'
    });
    
    $('.latar h2').css({
        'transform': 'translate(0px, -' + wScroll + '%)'
    });

    $('.back').css({
        'transform': 'translate(0px, -' + wScroll / 80 + '%)'
    });

});


baguetteBox.run('.tz-gallery');



$(document).ready(function(){
    
            var showHeaderAt = 150;
    
            var win = $(window),
                    body = $('body');
    
            // Show the fixed header only on larger screen devices
    
            if(win.width() > 600){
    
                // scroll > 150px down, set fixed body element
                // "fixed" class on the body element.
    
                win.on('scroll', function(e){
    
                    if(win.scrollTop() > showHeaderAt) {
                        body.addClass('fixed');
                    }
                    else {
                        body.removeClass('fixed');
                    }
                });
    
            }
    
        });