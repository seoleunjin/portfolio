

$(document).ready(function(){


    $('article').mouseenter(function(){
        let vid = $(this).find('video').get(0)  // get()순번
        vid.play()
        // 비디오가 시작되라 html에서 <video preload="auto" loop="loop" muted> 설정 되어 있어야함
        $(this).stop().animate({'width':'35%'},1000)
        $(this).find('video').animate({'opacity':1},1200)
        $(this).find('h3').animate({'right':'20px'},800)
        $(this).find('p').animate({'right':'20px'},1000)
    });
    $('article').mouseleave(function(){
        let vid = $(this).find('video').get(0)
        vid.currentTime=0
        // 처음부터 다시 시작해라
        vid.pause() 
        // 멈춰라
        
        $('article').stop().animate({'width':'12%'},1000)
        $(this).find('video').animate({'opacity':0},1200)
        $(this).find('h3').animate({'right':'-320px'},800)
        $(this).find('p').animate({'right':'-320px'},700)
    });


})