$(document).ready(function(){

    let ht = $(window).height();
        $('.oil_slider').height(ht);
        $('header').height(ht);
    $(window).resize(function(){
        let ht = $(window).height();
        $('.oil_slider').height(ht);
        $('header').height(ht);
    })


})
