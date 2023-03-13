$(document).ready(function(){
    let a = $('article').size();
    let aWd= $('article').width();
    let i = -1;
    let wh = $(window).height();
    $('.home').height(wh)
    $('.work').height(wh)
    $('.info').height(wh)
    $('#wrap').height(wh)
    $('#wrap2').height(wh)
    $('#wrap').width((a*(aWd+3)));
    $('body').height(a*(aWd+3));
    $('html,body').scrollTop(0)
    $(window).resize(function(){
    $('.home').height(wh)
    $('.work').height(wh)
    $('.info').height(wh)
    $('#wrap2').height(wh)
    $('#wrap').height(wh)
    $('#wrap').width((a*(aWd+3)));
    $('body').height(a*(aWd+3));
    });
    $(window).scroll(function(){
        let sc = $(this).scrollTop();
        $('#wrap').css({'left':-sc})
        if(sc>=0 && sc<1920 ){
            $('.menu li:nth-child(1) h1').addClass('on')
            $('.menu li>h2').css({'font-size': '150px','letter-spacing':'50px','top': '15%' , 'left':'15%'})
            $('.menu li>h2').css({'background-color': '#666','-webkit-background-clip':'text', '-moz-background-clip': 'text' , 'color':'#fff','text-shadow':'rgba(255, 255, 255, 0.5)0px 3px 3px'})
            $('.menu li>i').css({'background-color': '#666','-webkit-background-clip':'text', '-moz-background-clip': 'text' , 'color':'#fff','text-shadow':'rgba(255, 255, 255, 0.5)0px 3px 3px'})
            $('.menu li>p').css({'background-color': '#666','-webkit-background-clip':'text', '-moz-background-clip': 'text' , 'color':'#fff','text-shadow':'rgba(255, 255, 255, 0.5)0px 3px 3px'})
        }
        if(sc>=1920 && sc<3840 ){
            $('.menu li>h2').css({'font-size': '60px','letter-spacing':'25px', 'top': '55%' , 'left':'42%'})
            $('.menu li>h2').css({'background-color': '#666','-webkit-background-clip':'text', '-moz-background-clip': 'text' , 'color':'#fff','text-shadow':'rgba(255, 255, 255, 0.5)0px 3px 3px'})
            $('.menu li>i').css({'background-color': '#666','-webkit-background-clip':'text', '-moz-background-clip': 'text' , 'color':'#fff','text-shadow':'rgba(255, 255, 255, 0.5)0px 3px 3px'})
            $('.menu li>p').css({'background-color': '#666','-webkit-background-clip':'text', '-moz-background-clip': 'text' , 'color':'#fff','text-shadow':'rgba(255, 255, 255, 0.5)0px 3px 3px'})
        }
        if(sc>=3840 && sc<5760 ){
            $('.menu li>h2').css({'font-size': '60px','letter-spacing':'0px', 'top': '4%' , 'left':'81%'})
            $('.menu li>h2').css({'background-color': '#666','-webkit-background-clip':'text', '-moz-background-clip': 'text' , 'color':'transparent','text-shadow':'rgba(255, 255, 255, 0.5)0px 3px 3px'})
            $('.menu li>i').css({'background-color': '#666','-webkit-background-clip':'text', '-moz-background-clip': 'text' , 'color':'transparent','text-shadow':'rgba(255, 255, 255, 0.5)0px 3px 3px'})
            $('.menu li>p').css({'background-color': '#666','-webkit-background-clip':'text', '-moz-background-clip': 'text' , 'color':'transparent','text-shadow':'rgba(255, 255, 255, 0.5)0px 3px 3px'})
        }
    });
    

    $('.menu li').click(function(){
        let i = $(this).index();
        $('.menu li').removeClass('on')
        $(this).addClass('on')
        $('html, body').animate({'scrollTop':1920*i},800);
    })
    $('.open').click(function () {
        i++;
        if (i == 0) {
            $('#wrap2 article')
                .eq(i)
                .css({'transform': 'rotateY(-30deg)','left': '897px','transition': '0.9s'});
            $('#wrap2 article')
                .eq(i+1)
                .css({'transform': 'rotateY(30deg)'});
        }
        if (i == 1) {
            $('#wrap2 article')
                .eq(i - 1)
                .css({'transform': 'rotateY(-30deg)','left': '348px','transition': '0.9s'});
            $('#wrap2 article')
                .eq(i)
                .css({'transform': 'rotateY(30deg)','left': '750px','transition': '0.9s'})
            $('#wrap2 article')
                .eq(i + 1)
                .css({'transform': 'rotateY(-30deg)'});
        }
    })
    $('.back').click(function(){
        $('#wrap2').css({'display':'none'})
    })
    $('.pub a').click(function(){
        $('#wrap2').css({'display':'block'})
    })

})