$(document).ready(function () {
    let wh = $(window).height()
    $('section').height(wh)
    $('div').height(wh)
    $(window).resize(function () {
        let wh = $(window).height()
        $('section').height(wh)
        $('div').height(wh)
    });
    $(window).mousemove(function (e) {
        let x = e.pageX;
        let y = e.pageY;
        $('.point').css({'left': x, 'top': y})
        $('article h2').css({'top':15+y/30,'left':15+x/30})
    });


    $('article').mouseenter(function () {
        $('.point').addClass('on')
    })


    $('article').mouseleave(function () {
        $('.point').removeClass('on')
    })

    $('.pro01').click(function(){
        $('.img01').css({'display':'block','cursor':'pointer'})
    })
    $('.pro02').click(function(){
        $('.img02').css({'display':'block','cursor':'pointer'})
    })
    $('.pro03').click(function(){
        $('.img03').css({'display':'block','cursor':'pointer'})
    })

    $('.close').click(function(){
        $('div').css({'display':'none'})
    });

    $('.back').click(function(){
        window.history.back();
    })

})