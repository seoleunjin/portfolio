$(document).ready(function(){
    let a = $('article').size();
    let aWd= $('article').width()
    let wh = $(window).height()
    $('section').height(wh)
    $('section').width((a*(aWd+3)));
    $('body').height(a*(aWd+3));
    $('html,body').scrollTop(a*(aWd+3))
    $(window).resize(function(){
    let wh = $(window).height()
    $('section').height(wh)
    $('section').width((a*(aWd+3)));
    $('body').height(a*(aWd+3));
    });
    $(window).scroll(function(){
        let sc = $(window).scrollTop();
        $('section').css({'left':-sc})
    });
})