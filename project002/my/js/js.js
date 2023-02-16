$(document).ready(function(){
    // 리사이즈
    let of = $('.review_gift .img').offset().top;
    let ht = $(window).height();
        $('.oil_slider').height(ht);
        $('.menu').height(ht);
        $('header').height(ht);
        $('product').height(ht);
        $('.commu').height(ht);
        $('.skin_type').height(ht);
        $('.best_product').height(ht);
        $('.review_gift').height(ht);
        $(window).resize(function(){
            let ht = $(window).height();
            $('.oil_slider').height(ht);
            $('header').height(ht);
            $('.menu').height(ht);
            $('product').height(ht);
            $('.commu').height(ht);
            $('.skin_type').height(ht);
            $('.best_product').height(ht);
            $('.review_gift').height(ht);
        })

    // 메뉴
    $('.util li:nth-child(5)').click(function(){
        $('.menu').css({'display':'block'})
    })
    $('.x').click(function(){
        $('.menu').css({'display':'none'})
    })
    // 문의사항
    $('.util li:nth-child(4)').click(function(){
        $('.commu').css({'display':'block'})
    })
    $('.x').click(function(){
        $('.commu').css({'display':'none'})
    })
    // 제품
    $('.oil li').click(function(){
        $('.product').css({'display':'block'})
    })
    $('.x').click(function(){
        $('.product').css({'display':'none'})
    })

    // 오일 슬라이더 트레일러
    let b = 0;
    $('.left').click(function(){
        b++;
        var wid = $('.oil li').width();
        if (b == 3) b = 0;
        console.log(b)
        let widM = wid * b;
        $('.oil').stop().animate({'left': -widM}, 800)
    });
    $('.right').click(function(){
        b--;
        var wid = $('.oil li').width();
        if (b == 3) b = 0;
        console.log(b)
        let widM = wid * b;
        $('.oil').stop().animate({'left': -widM}, 800)
    });


    // 베스트 .best_product .img 클릭했을때 .main_img와 .txt 가 변해라
    $('.best_product .img ul li').click(function(){
        let i = $(this).index();
        $('.best_product .main_img img').removeClass('on')
        $('.best_product .main_img img').eq(i).addClass('on').css({'transition':'1s'})
        $('.best_product .img ul li').removeClass('on')
        $('.best_product .img ul li').eq(i).addClass('on')
        $('.best_product .txt ul').removeClass('on')
        $('.best_product .txt ul').eq(i).addClass('on').css({'transition':'1s'})
    })
    // 인포 무한 슬라이드
    // 텍스트구간
    setInterval(function(){
        $('.infoMenu li').eq(0).css({'top':'0'}).animate({'top':'-25%'},2000)
        $('.infoMenu li').eq(0).css({'top':'-25%'}).animate({'top':'100%'},0.01)
        $('.infoMenu li').eq(0).css({'top':'100%'}).animate({'top':'80%'},0.01)
        $('.infoMenu li').eq(0).css({'top':'75%'}).animate({'top':'50%'},2000)
        $('.infoMenu li').eq(0).css({'top':'50%'}).animate({'top':'25%'},2000)
        $('.infoMenu li').eq(0).css({'top':'25%'}).animate({'top':'0%'},2000)
        $('.infoMenu li').eq(1).css({'top':'25%'}).animate({'top':'0'},2000)
        $('.infoMenu li').eq(1).css({'top':'0'}).animate({'top':'-25%'},2000)
        $('.infoMenu li').eq(1).css({'top':'-25%'}).animate({'top':'100%'},0.01)
        $('.infoMenu li').eq(1).css({'top':'100%'}).animate({'top':'80%'},0.01)
        $('.infoMenu li').eq(1).css({'top':'75%'}).animate({'top':'50%'},2000)
        $('.infoMenu li').eq(1).css({'top':'50%'}).animate({'top':'25%'},2000)
        $('.infoMenu li').eq(2).css({'top':'50%'}).animate({'top':'25%'},2000)
        $('.infoMenu li').eq(2).css({'top':'25%'}).animate({'top':'0%'},2000)
        $('.infoMenu li').eq(2).css({'top':'0%'}).animate({'top':'-25%'},2000)
        $('.infoMenu li').eq(2).css({'top':'-25%'}).animate({'top':'100%'},0.01)
        $('.infoMenu li').eq(2).css({'top':'100%'}).animate({'top':'80%'},0.01)
        $('.infoMenu li').eq(2).css({'top':'75%'}).animate({'top':'50%'},2000)
        $('.infoMenu li').eq(3).css({'top':'75%'}).animate({'top':'50%'},2000)
        $('.infoMenu li').eq(3).css({'top':'50%'}).animate({'top':'25%'},2000)
        $('.infoMenu li').eq(3).css({'top':'25%'}).animate({'top':'0%'},2000)
        $('.infoMenu li').eq(3).css({'top':'0%'}).animate({'top':'-25%'},2000)
        $('.infoMenu li').eq(3).css({'top':'-25%'}).animate({'top':'100%'},0.01)
        $('.infoMenu li').eq(3).css({'top':'100%'}).animate({'top':'80%'},0.01)
    },2000, 'linear')
    
    // 이미지구간
    let e =0;
    setInterval(function(){
        if(e==4) e=0;
        e++;
        
        $('.info .imgslid li').eq(e-1).css({'top':'0','left':'0'}).animate({'top':'-100%','left':'0'})
        $('.info .imgslid li').eq(e).css({'top':'-100%','left':'100%'}).animate({'top':'-100%','left':'100%'})
        $('.info .imgslid li').eq(e+1).css({'top':'-100%','left':'100%'}).animate({'top':'0','left':'100%'})
        $('.info .imgslid li').eq(e+2).css({'top':'0%','left':'100%'}).animate({'top':'0','left':'0'})
    },2000)
    // setInterval(function(){
    //     $('.info .imgslid li').eq(1).css({'top':'0','left':'0'}).animate({'top':'0','left':'0'},2000)
    //     $('.info .imgslid li').eq(1).css({'top':'-100%','left':'-100%'}).animate({'top':'0','left':'-100%'},2000)
    //     $('.info .imgslid li').eq(1).css({'top':'0','left':'-100%'}).animate({'top':'-100%','left':'0'},2000)
    //     $('.info .imgslid li').eq(1).css({'top':'-100%','left':'0'}).animate({'top':'0','left':'0'},2000)
    // },2000, 'linear')
    // 스킨 타입 슬라이더 트레일러
    let c = 0;
    $('.type_left').click(function(){
        c++;
        var wid = $('.skin_type .skinImg li').width();
        if (c == 6) c = 0;
        console.log(c)
        let widM = wid * c;
        $('.skin_type .skinImg').stop().animate({'left': -(widM)}, 800)
        $('.skin_type .lose_line').stop().animate({'width': (widM+300)}, 800)
    });
    $('.type_right').click(function(){
        c--;
        var wid = $('.skin_type .skinImg li').width();
        if (c == -1) c = 0;
        console.log(c)
        let widM = wid * c;
        $('.skin_type .skinImg').stop().animate({'left': -(widM)}, 800)
        $('.skin_type .lose_line').stop().animate({'width': (widM+300)}, 800)
    });


    // 페이지 메뉴를 클릭했을때 각 섹션 화면으로 이동해라
    $('.pageMenu li').click(function(){
        let i = $(this).index();
        
        $('.pageMenu li').removeClass('on')
        $(this).addClass('on')
        $('html, body').animate({'scrollTop':ht*i},1400);
    })


    $(window).scroll(function(e){
        e.preventDefault()
        let ht = $(window).height()
        let sc= $(this).scrollTop();
        let wd = $('.review_gift .scroll').width();
        let i = $('.pageMenu li').index();

        // 리뷰섹션
        $('body').height((ht*4)+wd);

        if(sc>=of){
        $('#wrap1').addClass('on');
        $('.review_gift .scroll').css({'left':(of+550)-sc})
        
        }
        if(sc<of){
        $('#wrap1').removeClass('on');
        }
        // 장바구니
        let d = 0;
        $('.skinImg li').click(function(){
            d++;
            $('.util li:nth-child(3) a span').text(d)
        })

        

    })


})


