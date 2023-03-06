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
        let sc = $(this).scrollTop();
        $('.ff').text(sc)
        $('section').css({'left':-sc})
        if(sc>=0 && sc<1920 ){
            $('.menu li h1').css({'font-size': '150px','letter-spacing':'50px','top': '15%' , 'left':'15%'})
            $('.menu li h1').css({'background-color': '#666','-webkit-background-clip':'text', '-moz-background-clip': 'text' , 'color':'#fff','text-shadow':'rgba(255, 255, 255, 0.5)0px 3px 3px'})
            $('.menu li i').css({'background-color': '#666','-webkit-background-clip':'text', '-moz-background-clip': 'text' , 'color':'#fff','text-shadow':'rgba(255, 255, 255, 0.5)0px 3px 3px'})
            $('.menu li p').css({'background-color': '#666','-webkit-background-clip':'text', '-moz-background-clip': 'text' , 'color':'#fff','text-shadow':'rgba(255, 255, 255, 0.5)0px 3px 3px'})
        }
        if(sc>=1920 && sc<3840 ){
            $('.menu li h1').css({'font-size': '50px','letter-spacing':'25px', 'top': '55%' , 'left':'42%'})
            $('.menu li h1').css({'background-color': '#666','-webkit-background-clip':'text', '-moz-background-clip': 'text' , 'color':'#fff','text-shadow':'rgba(255, 255, 255, 0.5)0px 3px 3px'})
            $('.menu li i').css({'background-color': '#666','-webkit-background-clip':'text', '-moz-background-clip': 'text' , 'color':'#fff','text-shadow':'rgba(255, 255, 255, 0.5)0px 3px 3px'})
            $('.menu li p').css({'background-color': '#666','-webkit-background-clip':'text', '-moz-background-clip': 'text' , 'color':'#fff','text-shadow':'rgba(255, 255, 255, 0.5)0px 3px 3px'})
        }
        if(sc>=3840 && sc<5760 ){
            $('.menu li h1').css({'font-size': '50px','letter-spacing':'0px', 'top': '4%' , 'left':'81%'})
            $('.menu li h1').css({'background-color': '#666','-webkit-background-clip':'text', '-moz-background-clip': 'text' , 'color':'transparent','text-shadow':'rgba(255, 255, 255, 0.5)0px 3px 3px'})
            $('.menu li i').css({'background-color': '#666','-webkit-background-clip':'text', '-moz-background-clip': 'text' , 'color':'transparent','text-shadow':'rgba(255, 255, 255, 0.5)0px 3px 3px'})
            $('.menu li p').css({'background-color': '#666','-webkit-background-clip':'text', '-moz-background-clip': 'text' , 'color':'transparent','text-shadow':'rgba(255, 255, 255, 0.5)0px 3px 3px'})
        }
    });

    $('.menu li').click(function(){
        let i = $(this).index();
        let sc 
        $('.menu li').removeClass('on')
        $('html, body').animate({'scrollTop':1920*i},800);
    })
})