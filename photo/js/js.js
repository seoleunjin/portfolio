$(document).ready(function(){

    $(window).resize(function(){
    //  화면이 리사이징 될떄마다 바디의 높이값와 섹션의 가로값 통일시키기
    // article 갯수를 구하고 article의 가로 값을 구해서 두개를 곱한 값이 섹션의 가로값으로 변환
    let a = $('article').size()
    // article의 갯수 구하기 size()
    let awd = $('article').width()
    $('section').width(a*(awd+20));
    $('body').height(a*(awd+20));
    // 섹션의 와이드와 바디의 높이값을 변환시킴
    });


    // 화면에서 스크롤바가 움직일떄 상단의 위치값을 찾아라
    $(window).scroll(function(){
        let sc = $(window).scrollTop();
        $('h1').text(sc);
        $('section').stop().animate({'left':-sc},600)
    });

    $('.gnb li').click(function(){
        let li = $(this).index();
        // $('section').stop().animate({'left':-li*1000},600)
        $('html,body').scrollTop(1000*li)

    });
})