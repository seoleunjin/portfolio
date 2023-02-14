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

    // 슬라이더
    // let b = 0;
    // $('.left').click(function(){
    //     b++;
    //     var wid = $('.oil_slider .oil li').width();
    //     if (b == 3) b = 0;
    //     console.log(b)
    //     let widM = wid * b;
    //     $('.oil_slider .oil').stop().animate({'left': 'widM'}, 800)
    // });

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


        $('body').height((ht*4)+wd);

        if(sc>=of){
        $('#wrap1').addClass('on');
        $('.review_gift .scroll').css({'left':(of+550)-sc})
        
        }
        if(sc<of){
        $('#wrap1').removeClass('on');
        }

        

    })


})


