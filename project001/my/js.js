$(document).ready(function(){
    $('.gnb>ul>li').mouseenter(function(){
        let i = $(this).index()
        $('.sub_menu>div').slideUp()
        $('.menu0'+(i+1)).slideDown()
    });
    $('header').mouseleave(function(){
        $('.sub_menu>div').slideUp()
    });
})