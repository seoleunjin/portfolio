$(document).ready(function(){
    let wh = $(window).height();
    $('section').height(wh)
    $(window).resize(function(){
    $('section').height(wh)
    });
    let sc = $(this).scrollTop();
    $(window).scroll(function(){
        let sc = $(this).scrollTop();
        $('.logo').text(sc);
        
        if(sc>823 && sc<wh*2){
            $('.cir').addClass('on').css({'transition':'0.8s'})
            $('.box1 span').css({'background-color':'#A92242','transition':'0.5s'})
        }else{
            $('.cir').removeClass('on')
            $('.box1 span').css({'background-color':'#000','transition':'0.5s'})
        }
        
        if(sc>1100 && sc<wh*4){
            $('.box1').addClass('on1')
        }else{
            $('.box1').removeClass('on1')
        }
        if(sc>(wh*2-200) && sc<wh*3){
            $('.pro2').addClass('on')
            $('.pro3').addClass('on')
            $('.pro1 span').addClass('on')

        }else{
            $('.pro2').removeClass('on')
            $('.pro3').removeClass('on')
            $('.pro1 span').removeClass('on')
        }
        if(sc>1900 && sc<wh*3){
            $('.pro3').addClass('on1')
            $('.pro2 span').addClass('on')
        }else{
            $('.pro3').removeClass('on1')
            $('.pro2 span').removeClass('on')
        }
        if(sc>2100 && sc<wh*3){
            $('.pro3 span').addClass('on')
        }else{
            $('.pro3 span').removeClass('on')
        }
        for(var a=0; a<4; a++){
            if(sc>=a*wh && sc<(a+1)*wh){
                $('.gnb li').removeClass('on')
                $('.gnb li').eq(a).addClass('on')
            };
        }
    });
    $('.gnb li').click(function(){
        let i = $(this).index();
        $('html, body').animate({'scrollTop':wh*i+1},800);
    })
    $('.box4 ul li').click(function(){
        let i = $(this).index();
        $('.box4 ol li').removeClass('on')
        $('.box4 ol li').eq(i).addClass('on')
        $('.box4 ul li').removeClass('on')
        $('.box4 ul li').eq(i).addClass('on')
    })
    

    
});