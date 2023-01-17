$(document).ready(function(){
    $('.gnb>ul>li').mouseenter(function(){
        let i = $(this).index()
        $('.sub_menu>div').slideUp()
        $('.menu0'+(i+1)).slideDown()
    });
    $('header').mouseleave(function(){
        $('.sub_menu>div').slideUp()
    });
    // 바를 클릭 했을때 동영상이 전환되라
    $('.bar li').click(function(){
        let i = $(this).index();
        $('.img_play li').stop().eq(i-1).animate({'opacity':0},800);
        $('.img_play li').stop().eq(i).animate({'opacity':1},1000);
        $('.bar li').removeClass('on');
        $(this).addClass('on');
    });

    $('.activi_btn li').click(function(){
        let a = $(this).index();
        $('.intro .activi li').stop().eq(a-1).animate({'left':'100%','left':'0%'});
        $('.intro .activi li').stop().eq(a).animate({'left':'0%','left':'-100%'});
    })
    $(window).scroll(function(){
        let sc = $(this).scrollTop()
        if(sc>=1500 && sc<2600){
            $('.intro .txtBox').stop().animate({'left':'-900px'},1000)
            $('.intro .conBox').stop().animate({'right':'-900px'},1500)
        }else{
            $('.intro .txtBox').stop().animate({'left':'-1400px'},1000)
            $('.intro .conBox').stop().animate({'right':'-1800px'},1200)
        };
    });



})