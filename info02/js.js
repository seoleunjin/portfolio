$(document).ready(function(){
    let a = $('article').size();
    let aWd= $('article').width();
    let i = -1;
    let wh = $(window).height();
    $('#wrap1').height(wh)
    $('#wrap2').height(wh)
    $('#wrap3').height(wh)
    $('#wrap1').width((a*(aWd+3)));
    $('body').height(a*(aWd+3));
    $('html,body').scrollTop(0)
    $(window).resize(function(){
    $('#wrap3').height(wh)
    $('#wrap2').height(wh)
    $('#wrap1').height(wh)
    $('#wrap1').width((a*(aWd+3)));
    $('body').height(a*(aWd+3));
    });
    $(window).scroll(function(){
        let sc = $(this).scrollTop();
        $('#wrap1').css({'left':-sc})
        if(sc>=0 && sc<1920 ){
            $('.menu li:nth-child(1) h1').addClass('on')
            $('.menu li>h1').css({'font-size': '150px','letter-spacing':'50px','top': '15%' , 'left':'15%'})
            $('.menu li>h1').css({'background-color': '#666','-webkit-background-clip':'text', '-moz-background-clip': 'text' , 'color':'#fff','text-shadow':'rgba(255, 255, 255, 0.5)0px 3px 3px'})
            $('.menu li>i').css({'background-color': '#666','-webkit-background-clip':'text', '-moz-background-clip': 'text' , 'color':'#fff','text-shadow':'rgba(255, 255, 255, 0.5)0px 3px 3px'})
            $('.menu li>p').css({'background-color': '#666','-webkit-background-clip':'text', '-moz-background-clip': 'text' , 'color':'#fff','text-shadow':'rgba(255, 255, 255, 0.5)0px 3px 3px'})
        }
        if(sc>=1920 && sc<3840 ){
            $('.menu li>h1').css({'font-size': '50px','letter-spacing':'25px', 'top': '55%' , 'left':'42%'})
            $('.menu li>h1').css({'background-color': '#666','-webkit-background-clip':'text', '-moz-background-clip': 'text' , 'color':'#fff','text-shadow':'rgba(255, 255, 255, 0.5)0px 3px 3px'})
            $('.menu li>i').css({'background-color': '#666','-webkit-background-clip':'text', '-moz-background-clip': 'text' , 'color':'#fff','text-shadow':'rgba(255, 255, 255, 0.5)0px 3px 3px'})
            $('.menu li>p').css({'background-color': '#666','-webkit-background-clip':'text', '-moz-background-clip': 'text' , 'color':'#fff','text-shadow':'rgba(255, 255, 255, 0.5)0px 3px 3px'})
        }
        if(sc>=3840 && sc<5760 ){
            $('.menu li>h1').css({'font-size': '50px','letter-spacing':'0px', 'top': '4%' , 'left':'81%'})
            $('.menu li>h1').css({'background-color': '#666','-webkit-background-clip':'text', '-moz-background-clip': 'text' , 'color':'transparent','text-shadow':'rgba(255, 255, 255, 0.5)0px 3px 3px'})
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
        console.log(i)
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
        $('#wrap3').css({'display':'none'})
    })
    $('.desing p').click(function(){
        $('#wrap2').css({'display':'block'})
    })
    $('.pub p').click(function(){
        $('#wrap3').css({'display':'block','display':'flex'})
    })

    $(window).mousemove(function (e) {
        let x = e.pageX;
        let y = e.pageY;
        $('.point').css({'left': x, 'top': y})
    });


    $('#wrap3 article').mouseenter(function () {
        $('#wrap3 .point').addClass('on')
    })


    $('#wrap3 article').mouseleave(function () {
        $('#wrap3 .point').removeClass('on')
    })

    $('#wrap3 .pro01').click(function(){
        $('.img01').css({'display':'block','cursor':'pointer'})
    })
    $('#wrap3 .pro02').click(function(){
        $('.img02').css({'display':'block','cursor':'pointer'})
    })
    $('#wrap3 .pro03').click(function(){
        $('.img03').css({'display':'block','cursor':'pointer'})
    })

    $('#wrap3 .close').click(function(){
        $('#wrap3 div').css({'display':'none'})
    });
})