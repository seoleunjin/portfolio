$(document).ready(function(){
    let of = $('.review_gift .img').offset().top;
    let ht = $(window).height();
        $('.oil_slider').height(ht);
        $('.menu').height(ht);
        $('header').height(ht);
        $('product').height(ht);
        $('.commu').height(ht);
        $('.skin_type').height(ht);
        $('.best_product').height(ht);
        $('.review_gift').height(ht);
    $(window).resize(function(){
        let ht = $(window).height();
        $('.oil_slider').height(ht);
        $('header').height(ht);
        $('.menu').height(ht);
        $('product').height(ht);
        $('.commu').height(ht);
        $('.skin_type').height(ht);
        $('.best_product').height(ht);
        $('.review_gift').height(ht);
    })

    $(window).scroll(function(e){
        e.preventDefault()
        let ht = $(window).height()
        let sc= $(this).scrollTop();
        let wd = $('.review_gift .scroll').width();



        
        $('.ulL>span').text(sc);
        $('.ulW>span').text(wd)
        $('h4>span').text(of)

        $('body').height((ht*4)+wd);

        if(sc>=of){
        $('#wrap1').addClass('on');
        $('.review_gift .scroll').css({'left':(of+550)-sc})
        
        }
        if(sc<of){
        $('#wrap1').removeClass('on');
        }

    })


})


