$(document).ready(function () {
    let wh = $(window).height()
    $('section').height(wh)
    $(window).resize(function () {
        let wh = $(window).height()
        $('section').height(wh)
    });
    $(window).mousemove(function (e) {
        // 숫자를 찾아내라. 좌표값 X의 좌표와 Y의 좌표를 찾아라.
        let x = e.pageX;
        let y = e.pageY;
        $('.point').css({'left': x-150, 'top': y-150})
    });


    $('article').mouseenter(function () {
        $('.point').addClass('on')
    })


    $('article').mouseleave(function () {
        $('.point').removeClass('on')
    })

})