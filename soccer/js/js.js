$(document).ready(function(){


    $(window).scroll(function(){


        
        let sc = $(this).scrollTop()
        $('h1').text(sc);
        // 풀어쓰기
        // $('section>article').eq(0).css({'transform': 'translateZ('+(0+sc)+'px)'});
        // $('section>article').eq(1).css({'transform': 'translateZ('+(-5000+sc)+'px)'});
        // $('section>article').eq(2).css({'transform': 'translateZ('+(-10000+sc)+'px)'});
        // $('section>article').eq(3).css({'transform': 'translateZ('+(-15000+sc)+'px)'});
        // $('section>article').eq(4).css({'transform': 'translateZ('+(-20000+sc)+'px)'});
        // 반복문을 통한 축약방식
        for(var a=0; a<5; a++){
            $('section>article').eq(a).css({'transform': 'translateZ('+(-5000*a+sc)+'px)'});
        }


        //반목문을 풀어쓰기
        // if(sc>=0 && sc<5000){
        //     $('section>article').removeClass('on');
        //     $('section>article').eq(0).addClass('on');
        //     $('.menu li').removeClass('on')
        //     $('.menu li').eq(0).addClass('on')
        // };
        // if(sc>=5000 && sc<10000){
        //     $('section>article').removeClass('on');
        //     $('section>article').eq(1).addClass('on');
        //     $('.menu li').removeClass('on')
        //     $('.menu li').eq(1).addClass('on')
        // };
        // if(sc>=10000 && sc<15000){
        //     $('section>article').removeClass('on');
        //     $('section>article').eq(2).addClass('on');
        //     $('.menu li').removeClass('on')
        //     $('.menu li').eq(2).addClass('on')
        // };
        // if(sc>=15000 && sc<20000){
        //     $('section>article').removeClass('on');
        //     $('section>article').eq(3).addClass('on');
        //     $('.menu li').removeClass('on')
        //     $('.menu li').eq(3).addClass('on')
        // };
        // if(sc>=20000 && sc<23000){
        //     $('section>article').removeClass('on');
        //     $('section>article').eq(4).addClass('on');
        //     $('.menu li').removeClass('on')
        //     $('.menu li').eq(4).addClass('on')
        // };
        // 반복문을 통한 축약방식
        for(var a=0; a<5; a++){
            $('section>article').eq(a).css({'transform': 'translateZ('+(-5000*a+sc)+'px)'});
            if(sc>=a*5000 && sc<(a+1)*5000){
                    $('section>article').removeClass('on');
                    $('section>article').eq(a).addClass('on');
                    $('.menu li').removeClass('on')
                    $('.menu li').eq(a).addClass('on')
                };
        }


        $('.menu li').click(function(){
            let i = $(this).index()
            $('html,body').stop().animate({'scrollTop':5000*i},800)
        });

        


        $('body').mousemove(function(e){
            let X = e.pageX;
            let Y = e.pageY;
            $('.mouse').css({'left':X, 'top':Y})
            $('.obj11').css({'left': -200+(X/80)+'px' , 'bottom': -100+(-Y/150)+'px'})
            $('.obj21').css({'right': -100+(X/80)+'px' , 'top': -100+(-Y/150)+'px'})
            $('.obj31').css({'left': 100+(X/80)+'px' , 'bottom': 20+(-Y/150)+'px'})
            $('.obj41').css({'left': 350+(X/80)+'px' , 'bottom': 150+(-Y/150)+'px'})
            $('.obj51').css({'left': -100+(X/80)+'px' , 'bottom': -300+(-Y/150)+'px'})
        });

        // .obj11 {
        //     left: -200px;
        //     bottom: -100px;
        // }
        // .obj21 {
        //     right: -100px;
        //     top: -100px;
        // }
        // .obj31 {
        //     left: 100px;
        //     bottom: 20px;
        // }
        // .obj41 {
        //     left: 350px;
        //     bottom: 150px;
        // }
        // .obj51 {
        //     left: -100px;
        //     bottom: -300px;
        // }




    });
});