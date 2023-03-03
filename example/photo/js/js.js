$(document).ready(function(){

    let a = $('article').size();
    let aWd= $('article').width()

    $('section').width((a*(aWd+20)));
    $('body').height(a*(aWd+20));
    
    $('html,body').scrollTop(a*(aWd+20))
    $(window).resize(function(){
    //  화면이 리사이징 될떄마다 바디의 높이값와 섹션의 가로값 통일시키기
    // article 갯수를 구하고 article의 가로 값을 구해서 두개를 곱한 값이 섹션의 가로값으로 변환

    let a = $('article').size();
    let aWd= $('article').width()

    $('section').width((a*(aWd+20)));
    $('body').height(a*(aWd+20));

    // 섹션의 와이드와 바디의 높이값을 변환시킴
    });


    // 화면에서 스크롤바가 움직일때 상단의 위치값을 찾아라
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

    // 아티클을 클릭했을때 내가 클릭한 그 아이에게 addClass를 해라 
    // 모든 아티클에겐 removeClass를 먼저해라
    
    $('article h2').click(function(e){
        e.preventDefault(); //기존에 있었던 a의 이벤트값을 없애라.
        // 클릭한 나의 부모자의 순번을 찾아라
        let id = $(this).parent().index()
        // 클릭한 나의 자손이 'a' 의 속성값 (attr)
        let src = $(this).children('a').attr('href')
        $('article p img').attr({'src':''})
        // 클릭한 나의 형제인 'p' 의 자손인 'img'안에 속성명 src안에 대입해라
        $(this).siblings('p').children('img').attr({'src':src} )
        $('article').removeClass('on')
        $(this).parent().addClass('on')
        $('html,body').scrollTop(200*id)
    });

    // 스펜을 클릭했을때 아티클에 removeClass를 해라
    $('article span').click(function(){

        $(this).parent().removeClass('on')
    });




})