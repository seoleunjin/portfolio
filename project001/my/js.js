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

    
    
    // 사진이 한장씩 돌아가라
    let a = 0;
    setInterval(function(){
        a++;
        if(a==4) a=0;
        $('.intro .activi li').eq(a-1).css({'left':'0'}).animate({'left':'-100%'});
        $('.intro .activi li').eq(a).css({'left':'100%'}).animate({'left':'0'});
    },2500);
    
    // 사진이 한장씩 돌아갈때 마다 gnb가 하나씩 바뀌어라 
    // $('.activi_btn li').click(function(){
    //     let a = $(this).index();
    //     console.log(a)
    //     $('.activi li').eq(a-1).css({'left':'0'}).animate({'left':'-100%'});
    //     $('.activi li').eq(a).css({'left':'100%'}).animate({'left':'0'});
    // });

    
    // top을 누르면 페이지 상단으로 가라
    $('.top').click(function(){
        $('html').animate({'scrollTop':0},1000)
    });

    // 뉴스
    // 마우스가 움직이면 따라 다녀라

    $('.news').mousemove(function(e){
        
        let nht= $('.news').offset().top
        let x = e.pageX;
        let y = e.pageY;
        // console.log(nht-y) y는 화면처음부터에서 지금까지의 높이 따라서, nth<y
        $('.cursor').css({'opacity':1})
        $('.cursor').css({'left':x-50,top:-(nht-y)-50})
    })
    // 마우스가 뉴스 화면을 나가면 사라져라
    $('.news').mouseleave(function(){
        $('.cursor').css({'opacity':0})
    })
    // 커서가 뉴스에 아이콘박스 li에 들어갔을때 커서가 확장되라
    $('.news .iconBox li').mouseenter(function(){
        $('.cursor').addClass('on')
    })
    $('.news .iconBox li').mouseleave(function(){
        $('.cursor').removeClass('on')
    })
    let wd = $(window).width()
    if(wd>=1500){
    $(window).scroll(function(){
        let wd = $(window).width()
        let sc = $(this).scrollTop()
        $('.sc').text(sc)
        if(wd>1500){
        if(sc>=1500 && sc<2600){
            $('.intro .txtBox').stop().animate({'left':'-900px'},1000)
            $('.intro .conBox').stop().animate({'right':'-900px'},1500)
        }else{
            $('.intro .txtBox').stop().animate({'left':'-1400px'},1000)
            $('.intro .conBox').stop().animate({'right':'-1800px'},1200)
        };
        if(sc>=3500 && sc<3900){
            $('.img02').stop().css({'opacity':'1'})
        }
        if(sc>=3900 && sc<4200){
            $('.img02').stop().css({'opacity':'0'})
            $('.img03').stop().css({'opacity':'1'})
        }
        if(sc>=4200 && sc<4800){
            
            $('.img04').stop().css({'opacity':'1'})
            $('.img03').stop().css({'opacity':'0'})
        }
        if(sc>=4800 && sc<5500){
            $('.img04').stop().css({'opacity':'0'})
            $('.img05').stop().css({'opacity':'1'})
        }
        if(sc>=5500){
            $('.img05').stop().css({'opacity':'0'})
        }
        }
    });
    }
    // 비건
    $('.vagen .txtBox h1').eq(0).animate({'opacity':1},800,function(){
    $('.vagen .imgBox li').eq(0).animate({'opacity':1},800,function(){
        $('.vagen .imgBox li').eq(1).animate({'opacity':1},800,function(){
            $('.vagen .imgBox li').eq(2).animate({'opacity':1},800,function(){
            });
        });
    });
});

// if (wd>1024 && wd<1500){

    
//     $(window).scroll(function(){
//         let sc = $(this).scrollTop()
//         $('.sc').text(sc)
//         if(sc>=1100 && sc<2150){
//             $('.intro .txtBox').stop().animate({'left':'-1100px'},1000)
//             $('.intro .conBox').stop().animate({'right':'-1323px'},1500)
//         }else{
//             $('.intro .txtBox').stop().animate({'left':'-1400px'},1000)
//             $('.intro .conBox').stop().animate({'right':'-1800px'},1200)
//         };
//         if(sc>=2400 && sc<2650){
//             $('.img02').stop().css({'opacity':'1'})
//         }
//         if(sc>=2650 && sc<2800){
//             $('.img02').stop().css({'opacity':'0'})
//             $('.img03').stop().css({'opacity':'1'})
//         }
//         if(sc>=2800 && sc<3100){
            
//             $('.img04').stop().css({'opacity':'1'})
//             $('.img03').stop().css({'opacity':'0'})
//         }
//         if(sc>=3100 && sc<3400){
//             $('.img04').stop().css({'opacity':'0'})
//             $('.img05').stop().css({'opacity':'1'})
//         }
//         if(sc>=5500){
//             $('.img05').stop().css({'opacity':'0'})
//         }
//     });
// }

})