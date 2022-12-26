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
    
    
    
    
    
    
    })
    
    
    
    
    
    
    
    
    })