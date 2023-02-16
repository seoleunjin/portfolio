$(document).ready(function(){
    let ht = $(window).height();
    $('section').height(ht)
    $('nav li').click(function(e){
        e.preveventDefault();
        let i =$(this).index();
        $('body.html').stop().animate({screenTop:ht*i},800,'easeInBounce')
    })
})