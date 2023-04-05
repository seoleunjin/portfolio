$(document).ready(function(){
    let wh = $(window).height();
    $('section').height(wh)
    $('.info').height(wh)
    $(window).resize(function(){
    $('section').height(wh)
    $('.info').height(wh)
    });
    let sc = $(this).scrollTop();
    $(window).scroll(function(){
        let sc = $(this).scrollTop();
        if(sc>wh-350 && sc<wh*2){
            $('.cir').addClass('on').css({'transition':'0.8s','display':'block'})
            $('.cir p').css({'opacity':1,'transition':'0.8s'})
        }else{
            $('.cir').removeClass('on').css({'transition':'0.8s'})
            $('.cir p').css({'opacity':0,'transition':'0.8s'})
        }
        if(sc>wh+200 && sc<wh*4){
            $('.cir').css({'display':'none'})
        }else{
            $('.cir').css({'display':'block','transition':'0.8s'})
        }
        if(sc>0 && sc<wh*4){
            $('.box1').addClass('on1')
            $('.box1 span').css({'display':'none'})
        }else{
            $('.box1').removeClass('on1')
        }
        if(sc>wh*2-200 && sc<wh*3){
            $('.pro2').addClass('on')
            $('.pro3').addClass('on')
            $('.pro1 span').addClass('on')

        }else{
            $('.pro2').removeClass('on')
            $('.pro3').removeClass('on')
            $('.pro1 span').removeClass('on')
        }
        if(sc>wh*2+100 && sc<wh*3){
            $('.pro3').addClass('on1')
            $('.pro2 span').addClass('on')
        }else{
            $('.pro3').removeClass('on1')
            $('.pro2 span').removeClass('on')
        }
        if(sc>wh*2+100 && sc<wh*3){
            $('.pro3 span').addClass('on')
        }else{
            $('.pro3 span').removeClass('on')
        }
        for(var a=0; a<4; a++){
            if(sc>=a*wh-300 && sc<(a+1)*wh){
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
        $('.box4 ol').scrollTop(0)
    });
    $('.cir p em').click(function(){
        $('.info').css({'display':'flex'})
    })
    $('.close').click(function(){
        $('.info').css({'display':'none'})
    })

    
});