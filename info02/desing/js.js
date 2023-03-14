$(document).ready(function(){
    let wh = $(window).height();
    $('#wrap').height(wh)
    $('article span').height(wh)
    $(window).resize(function(){
    $('#wrap').height(wh)
    $('article span').height(wh)
    });
    $('article').mouseenter(function(){
        $(this).stop().animate({'width':'50%'},1000)
        $(this).find('span').animate({'opacity':1,'right':0},600)
        $(this).find('h2').animate({'top':'22px'},100)
        $(this).find('div').animate({'top':'0px'},100)
    });
    $('.pro01').mouseenter(function(){
        $('.txt li').removeClass('on')
        $('.txt li').eq(0).addClass('on')
    })
    $('.pro02').mouseenter(function(){
        $('.txt li').removeClass('on')
        $('.txt li').eq(1).addClass('on')
    })
    $('.pro03').mouseenter(function(){
        $('.txt li').removeClass('on')
        $('.txt li').eq(2).addClass('on')
    })
    $('article').mouseleave(function(){
        $('article').stop().animate({'width':'15%'},1000)
        $(this).find('span').animate({'opacity':0,'right':'1000px'},300)
        $(this).find('h2').animate({'top':'287px'},100)
        $(this).find('div').animate({'top':'300px'},100)
    });
    $('.back').click(function(){
        history.back();	
    })
})