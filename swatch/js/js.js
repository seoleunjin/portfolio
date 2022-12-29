$(document).ready(function(){

    // 브라우저의 높이값 찾기
    let ht = $(window).height();
    console.log(ht)
    // gnb 의 높이를찾아라 
    let gnbht = $('#gnb').height()
    console.log(gnbht)
    //gnb의 가로값을 찾아라.
    let gnbwd = $('#gnb').width()
    console.log(gnbwd)
    
    $('section').height(ht);
    
    // 브라우저가 리사이즈 될때마다, 브라우저의 높이를 찾아
    // section의 높이값에 대입해라.
    $(window).resize(function(){
    
        let ht = $(window).height();
        $('section').height(ht);
    })
    
    
    // 마우스움직임 찾아내기 
    
    // .p11 {bottom:20px;right:20px
    // }
    // .p12 {bottom:-40px;right:130px}
    // .p13 {top:180px;right:60px}
    
    // .p21 {bottom:-480px;right:-180px}
    // .p22 {bottom:-40px;right:130px}
    
    // .p31 {bottom:30px;right:180px}
    // .p32 {bottom:-270px;right:110px}
    // .p33 {bottom:-130px;right:-70px}
    
    // .p41 {bottom:-120px;right:20px}
    // .p42 {bottom:-180px;right:0px}
    
    
    // section에서 마우스가 움직였을때, 이미지의 위치값을 바꾸어라. 
    $('section').mousemove(function(e){
    
        let  posx = e.pageX;
        let posy = e.pageY;
    
        $('.box h2').eq(0).text(posx);
        $('.box h2').eq(1).text(posy);
    
        $('.p11').css({'bottom':20-posy/30,'right':20+posx/30})
        $('.p12').css({'bottom':-40-posy/30,'right':130+posx/30})
        $('.p13').css({'bottom':180-posy/30,'right':60+posx/30})
        $('.p21').css({'bottom':-480-posy/30,'right':-180+posx/30})
        $('.p22').css({'bottom':-40-posy/30,'right':130+posx/30})
        $('.p31').css({'bottom':30-posy/30,'right':180+posx/30})
        $('.p32').css({'bottom':-270-posy/30,'right':110+posx/30})
        $('.p33').css({'bottom':-130-posy/30,'right':-70+posx/30})
        $('.p41').css({'bottom':-120-posy/30,'right': 20+posx/30})
        $('.p42').css({'bottom':-180-posy/30,'right': 0+posx/30})

    })
    
    
    // 스크롤바의 위치값 찾기
    $(window).scroll(function(){
        let sc = $(this).scrollTop();
        $('h1').text(sc);
        // 스크롤은 윈도우로 만들기
    })
    // 애니메이트 작성법 .animate({속성명 : 속석값}.지속시간)
    // 문제3번 li를 클릭했을때, 스크롤탑을 해당 높이로 가게 만들어라.
    $('#gnb li').click(function(){
        // 클릭 했을떄 나의 순번 찾기
        let i = $(this).index();
        // 순번
        let ht = $(window).height();


        $('html, body').animate({'scrollTop':ht*i},1400,'easeOutBounce');
        // 와부스크립트언어는 ''를 쓴다.
        // 윈도우를 사용하면 안된다 (한정적공간이기때문) scrollTop은 css로 못함
    });


    // h1에 마우스가 들어갔을때 나의 위치깂을 찾아라.
    $('h1').mouseenter(function(){
        let abc = $(this).offset().top;
        alert(abc)
        
    });

    $('section').mousewheel(function(event,delta){

        if(delta>0){
            // 이전페이지로 이동
            let prev = $(this).prev().offset().top;
            $('html,body').stop().animate({'scrollTop':prev},1400)

        }else if (delta<0){
            // 다음페이지로 이동
            let next = $(this).next().offset().top;
            $('html,body').stop().animate({'scrollTop':next},1400)
        }
    })

    })