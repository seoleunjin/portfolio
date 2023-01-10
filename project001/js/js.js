$(document).ready(function(){

    // 갤러리 이미지움직임 설정
    // 왼쪽버튼 클릭시 이미지가 왼쪽으로이동
    let i =0;
    $('.gallery .left').click(function(){
    if(i<5)i++;
    let gwd = $('.gallery li').width()
        $('.gallery ul').stop().animate({'left':i*-(gwd+5)},2000)
        $('.gallery li').removeClass('on')
        $('.gallery li').eq(i).addClass('on')
        $('.gallery li').eq(i-1).animate({'opacity':0},100)
    });
    // 오른쪽버튼 클릭시 이미지가 오른쪽으로이동
    $('.gallery .right').click(function(){
        if(i>0)i--;
        let gwd = $('.gallery li').width()
            $('.gallery ul').stop().animate({'left':i*-(gwd+5)},2000)
            $('.gallery li').removeClass('on')
            $('.gallery li').eq(i).addClass('on')
            $('.gallery li').eq(i).animate({'opacity':1},100)
        });
    // 리뷰 이미지 움직임 설정
    // 왼쪽버튼 클릭시 이미지가 왼쪽으로이동
    $('.review .left').click(function(){
        if(i<2)i++;
        let rlw = $('.review li').width()
        $('.review ul').stop().animate({'left':i*-(rlw+20)},2000)
    });
    // 오른쪽버튼 클릭시 이미지가 오른쪽으로이동
    $('.review .right').click(function(){
        if(i>0)i--;
        let rlw = $('.review li').width()
        $('.review ul').stop().animate({'left':i*-(rlw+20)},2000)
    });
})