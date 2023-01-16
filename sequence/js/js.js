$(document).ready(function(){
    let imgs;
    for(var i = 0; i<200; i++){
        console.log(i);
        imgs+='<img src="img/pic'+i+'.jpg">'
        // imgs+ 콘솔로그 시 콘솔에 새로운 값이 아니라 한번에 0~199번 까지 한번에 나옴
        $('section').html(imgs)
    };
    $(window).mousemove(function(e){
        let x =e.pageX;
        let wd = $(window).width()
        // 연산식 
        let number =Math.floor((x/wd)*200) // 소숫점 없어짐
        $('h1').text(number);
        $('section img').hide()
        $('section img').eq(number).show();
        // 최대움직임거리 / 내가 움직인 거리를 나누고 곱하기 200
        // 움직임 거리(x값) /  최대거리(윈도우에 가로값)
        



    })
})