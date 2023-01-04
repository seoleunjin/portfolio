$(document).ready(function(){

    // container 안에 li 를 클릭했을때 가 순번을 찾아라

    $('.container li').click(function(){
        let i = $(this).index()
        console.log(i) 

        // 변환받은 i 값을 gallery img 을  p값에 부여해라
        // 변환받은 p값을 보여라
        $('#image p').eq(a).fadeOut('slow')
        $('#image p').eq(i).fadeIn('fast')
    // fadeIn은 서서히 보여라, fadeOut은 서서히 사라져라 ex) fadeIn(속도)
    });

    // left 를 클릭하면  일정거리만큼 container를 움직여라
    let a = 0;
    $('.left').click(function(){
        if(a<14)a++;
        let wd = $('.container li').width()
        console.log(a)
        
        $('.container ul').css({'left':(-wd-1)*a});
        $('#image p').eq(a).fadeOut('slow')
        $('#image p').eq(a).fadeIn('fast')
    });

    // rigth을 클릭하면 일정거리만큼 container를 움직여라

    $('.right').click(function(){
        if(a>0)a--;
        console.log(a)
        let wd = $('.container li').width()
        $('.container ul').css({'left':(-wd-1)*a});
        $('#image p').eq(a).fadeOut('slow')
        $('#image p').eq(a).fadeIn('fast')
    });

    //  자동으로 image p가 순차적으로 보여라.
    // setInterval(함수,지연시간) 
    let b =0; 
    setInterval(function(){
        if(b<18)b++;
        if(b==18)b=0;
        // b가 5보다 작을떄 2초에 한번 씩 숫자가 5까지 올라간다
        // 5가되면 b는 0으로 리셋
        console.log(b)
        $('#image p').eq(b).fadeOut('slow')
        $('#image p').eq(b).fadeIn('fast')
    },2000)




})