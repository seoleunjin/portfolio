$(document).ready(function(){

    // 순차적으로 opacity 가 1로 바뀌어라.
    $('.luck1').stop().animate({'opacity':1},1200,function(){
        $('.tea1').stop().animate({'opacity':1},800,function(){
            $('.tea2').stop().animate({'opacity':1},800,function(){
                $('.tea3').stop().animate({'opacity':1},800)

            })
        })
    })





    $('.search a').click(function(){

        $('.search').animate({'width':'160px'},800,function(){

            $('.search').find('input').stop().animate({'opacity':1},200)
        })
    });


    // 메뉴를 호버했을때 sub_menu 가 보여라.
    $('.gnb li').mouseenter(function(){
        let i = $(this).index()
        console.log(i)
        $('.sub_menu>div').section10_slideUp()
        $('.sub'+(i+1)).section10_slideDown()
       

    });
    $('header').mouseleave(function(){
       
        $('.sub_menu>div').section10_slideUp()
      
       

    });

    // 스크롤바가 일정거리만큼 이동했을때 promotionimg/ txt 가 움직여라. 
    // left:0 / right:0으로 

    $(window).scroll(function(){

        let sc= $(this).scrollTop()
        $('h1').text(sc);

        if(sc>=845 && sc>1200){

            $('.promotion_img').stop().animate({'left':0},1800)
            $('.promotion_txt').stop().animate({'right':0},1800)
        }
        else{
            $('.promotion_img').stop().animate({'left':'-100%'},1800)
            $('.promotion_txt').stop().animate({'right':'-100%'},1800)
        }
    })





})