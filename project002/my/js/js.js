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
    $('.X').click(function(){
        $('.menu').css({'display':'none'})
        $('.commu').css({'display':'none'})
        $('.product').css({'display':'none'})
    })
    // 문의사항
    $('.util li:nth-child(4)').click(function(){
        $('.commu').css({'display':'block'})
    })
    // 제품
    $('.oil li').click(function(){
        $('.product').css({'display':'block'})
    })

    // 오일 슬라이더 트레일러 버튼 클릭 시 움직여라
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
        console.log(b)
        var wid = $('.oil li').width();
        if ( b == 3) b = 0;
        if ( b == -1) b = 0;
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
    let c = 0;
    $('.type_left').click(function(){
        c++;
        var wid = $('.skin_type .skinImg li').width();
        if (c == 3) c = 0;
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


    // 리뷰섹션 설정

    //해당 섹션의 스크롤 탑 값을 찾아서 가로스크롤으로 설정

    $(window).scroll(function(e){
        e.preventDefault()
        let ht = $(window).height()
        let sc= $(this).scrollTop();
        let wd = $('.review_gift .scroll').width();
        let i = $('.pageMenu li').index();

        $('body').height((ht*3)+wd);

        if(sc>=of){
        $('#wrap1').addClass('on');
        $('.review_gift .scroll').css({'left':(of+550)-sc})
        
        }
        if(sc<of){
        $('#wrap1').removeClass('on');
        }
        
        // 페이지 메뉴를 클릭했을때 각 섹션 화면으로 이동해고 스크롤 값에 따라 해당섹션에 page li도 호버 값 유지
        
        for(var a=0; a<4; a++){
            if(sc<=ht){
                $('.page').css({'top':'10%','left':'10%'})
            }else{
                $('.page').css({'top':'20%','left':'0'})
            }
            if(sc>=a*ht && sc<(a+1)*ht){
                $('.page li').removeClass('on')
                $('.page li').eq(a).addClass('on')
            };
        }
    })
        $('.pageMenu li').click(function(e){
            e.preventDefault()
            let f = $(this).index();
            console.log(f)
            $('html, body').animate({'scrollTop':ht*f},1400);
        })
        // skin_type의 제품 클릭 시 장바구니 담긴 숫자가 늘어나라
        let d = 0;
        $('.skinImg li').click(function(){
            d++;
            $('.util li:nth-child(3) a span').text(d)
        })


})


