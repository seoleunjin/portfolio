$(document).ready(function(){
    // 순차적으로 opacity가 1로 바뀌어라. 이미지 순차적 뜨기
    $('.luck1').stop().animate({'opacity':1},1200,function(){
        $('.tea1').stop().animate({'opacity':1},800, function(){
            $('.tea2').stop().animate({'opacity':1},800, function(){
                $('.tea3').stop().animate({'opacity':1},800,)
            })
        })
    })
    


    
    $('.search a').click(function(){
        $('.search').animate({'width':'160px'},800,function(){
            $('.search').find('input').stop().animate({'opacity':1},500)
        })
    })
    // .search form input 보다는 find 전확하게 찾을수 있다. search>form>input 는 쓰면 안된다.
    // addClass는 안에 ,function을 쓸수없다 animate는 가능



    // 메뉴를 호버했을때 sub_menu가 보여라
    $('.gnb li').mouseenter(function(){
        let i =$(this).index()
        console.log(i)
        $('.sub_menuLdiv').slideUp()
        $('.sub'+(i+1)).eq(i).slideDown()
    });
    $('header').mouseleave(function(){
        $('.sub_menu>div').slideUp()
    });
    

    // 스크롤바가 일정한 거리만큼 이동했을떄 promotionimg롸txt가 움직여라
    // left 0 rigth 0을 조절
    $(window).scroll(function(){
        let sc = $(this).scrollTop()
        $('h1').text(sc)
        if(sc>=845 && sc<1300 ){
            $('.promotion_img').stop().animate({'left':0},1800)
            $('.promotion_txt').stop().animate({'right':0},1800)
        }
        else{
            $('.promotion_img').stop().animate({'left':'-100%'},1800)
            $('.promotion_txt').stop().animate({'right':'-100%'},1800)
        }
    })




})