$(document).ready(function(){
    $('article').mouseenter(function(){
        $(this).stop().animate({'width':'50%'},1000)
        $(this).find('img').animate({'opacity':1,'right':0},800)
        $(this).find('h3').animate({'right':'50px'},800)
        $(this).find('p').animate({'right':'50px'},1000)
    });
    $('article').mouseleave(function(){
        $('article').stop().animate({'width':'15%'},1000)
        $(this).find('img').animate({'opacity':0,'right':'1000px'},800)
        $(this).find('h3').animate({'right':'-470px'},800)
        $(this).find('p').animate({'right':'-500px'},700)
    });
    $('.back').click(function(){
        history.back();	
    })
})