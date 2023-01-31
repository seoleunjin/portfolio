$(document).ready(function(){

    // 해더영역 ########################################################
    $('.gnb>ul>li').mouseenter(function(){
        let i = $(this).index()
        $('.sub_menu>div').slideUp()
        $('.menu0'+(i+1)).slideDown()
    });
    $('header').mouseleave(function(){
        $('.sub_menu>div').slideUp()
    });



    // 슬라이더영역 ########################################################
    // 바를 클릭 했을때 동영상이 전환되고 play되라
    $('.bar li').click(function(){
        let i = $(this).index();
        let vid = $('.img_play li').eq(i).find('video').get(0) 
        $('.img_play li').stop().animate({'opacity':'0'},800);
        $('.img_play li').eq(i).stop().animate({'opacity':'1'},800);
        $('.bar li').removeClass('on')
        $(this).addClass('on')
        vid.play()
        vid.currentTime=0
    });



    // 타이핑효과
    let txt = $('.slider .txt').text();
    let txtN = txt.split('')
    let i = -1
    let ti = txtN.length;
    console.log(txt)
    console.log(txtN)
    setInterval(function(){
        if(i<ti ) i++; 
        $('.line').append(txtN[i])
    },700)


    // 뉴스영역 ########################################################
    // 마우스가 움직이면 따라 다녀라

    $('.news').mousemove(function(e){
        
        let nht= $('.news').offset().top
        let x = e.pageX;
        let y = e.pageY;
        // console.log(nht-y) y는 화면처음부터에서 지금까지의 높이 따라서, nth<y
        $('.cursor').css({'opacity':1})
        $('.cursor').css({'left':x-50,top:-(nht-y)-50})
        // 마우스를 가져다 되면 .sursor p 가 글씨가 바뀌어라 
    });
    // 마우스가 뉴스섹션을 나가면 사라져라
    $('.news').mouseleave(function(){
        $('.cursor').css({'opacity':0})
    });


    // 커서가 뉴스에 아이콘박스 li에 들어갔을때 커서가 확장되라
    $('.news .iconBox li').mouseenter(function(){
        $('.cursor').addClass('on')
    });
    $('.news .iconBox li').mouseleave(function(){
        $('.cursor').removeClass('on')
    });


    // 소개영역 ########################################################
    // activi_btn li 을 클릭했을때 activi li가 이동되고 자동으로 돌아라 
    $('.activi_btn li').click(function(){
        let i = $(this).index();
        $('.intro .activi li').eq(i-1).css({'left':'0'}).animate({'left':'-100%'});
        $('.intro .activi li').eq(i).css({'left':'100%'}).animate({'left':'0'});
        $('.activi_btn li').removeClass('on')
        $(this).addClass('on')
    });
    let a =0;
    function timer(){
        a++;
        if(a==4) a=0;
        $('.activi_btn li').eq(a).trigger('click')
    };

    let silde = setInterval(timer,2000);
        
        $('.activi img').mouseenter(function(){
            clearInterval(silde)
        });

        $('.activi img').mouseleave(function(){
            silde = setInterval(timer,2000);
        });


    // 탑영역
    // top을 누르면 페이지 상단으로 가라
    $('.top').click(function(){
        $('html').animate({'scrollTop':0},1000)
    });




let wd= $(window).width();

// 윈도우의 너비에 따라 스크롤탑 값이 바뀌어라
if(wd>=1500){
    $(window).scroll(function(){
        
        let sc = $(this).scrollTop()
        // 1920 소개구간
        $('.sc').text(sc)
        if(sc>=1500 && sc<2600 ){
            $('.intro .txtBox').stop().animate({'left':'-900px'},1000)
            $('.intro .conBox').stop().animate({'right':'-900px'},1500)
        }else{
            $('.intro .txtBox').stop().animate({'left':'-1400px'},1000)
            $('.intro .conBox').stop().animate({'right':'-1800px'},1200)
        };
        // 1920 공지사항구간
        if(sc>=3700 && sc<3900){
            $('.img02').stop().css({'opacity':'1'})
        }
        if(sc>=4000 && sc<4200){
            $('.img02').stop().css({'opacity':'0'})
            $('.img03').stop().css({'opacity':'1'})
        }
        if(sc>=4200 && sc<4700){
            
            $('.img04').stop().css({'opacity':'1'})
            $('.img03').stop().css({'opacity':'0'})
        }
        if(sc>=4800 && sc<5500){
            $('.img04').stop().css({'opacity':'0'})
            $('.img05').stop().css({'opacity':'1'})
        }
        if(sc>=5500){
            $('.img05').stop().css({'opacity':'0'})
        }
        // 1920 공지사항구간
        if(sc>=6200){
        // 공지 섹션에 들어왔을때 h1이 순서대로 깜빡여라
        let b = 0;
        setInterval(function(){
            b++;
            $('.ques .conBox h1').eq(b-1).css({'color':'yellow'})
        },800)
        }
        // 1920 비건구간
        if(sc>=7050){
            $('.vagen .txtBox h1').eq(0).animate({'opacity':1},800,function(){
                $('.vagen .imgBox li').eq(0).animate({'opacity':1},600,function(){
                    $('.vagen .imgBox li').eq(1).animate({'opacity':1},600,function(){
                        $('.vagen .imgBox li').eq(2).animate({'opacity':1},600,function(){
                        });
                    });
                });
            });

        }

    });
}



if(wd>=1024 && wd<1499){
    $(window).scroll(function(){
        let wd = $(window).width()
        let sc = $(this).scrollTop()
        // 1499 캠페인구간
        if(sc>=1100 && sc<2150 ){
            $('.intro .txtBox').stop().animate({'left':'-1100px'},1000)
            $('.intro .conBox').stop().animate({'right':'-1323px'},1500)
        }else{
            $('.intro .txtBox').stop().animate({'left':'-1400px'},1000)
            $('.intro .conBox').stop().animate({'right':'-1800px'},1200)
        };
        if(sc>=2500 && sc<2700){
            $('.img02').stop().css({'opacity':'1'})
        }
        if(sc>=2700 && sc<2800){
            $('.img02').stop().css({'opacity':'0'})
            $('.img03').stop().css({'opacity':'1'})
        }
        if(sc>=2800 && sc<3000){
            
            $('.img04').stop().css({'opacity':'1'})
            $('.img03').stop().css({'opacity':'0'})
        }
        if(sc>=3000 && sc<3400){
            $('.img04').stop().css({'opacity':'0'})
            $('.img05').stop().css({'opacity':'1'})
        }
        if(sc>=3400){
            $('.img05').stop().css({'opacity':'0'})
        }
        // 1499 비건구간
        if(sc>=4600){
            $('.vagen .txtBox h1').eq(0).animate({'opacity':1},800,function(){
                $('.vagen .imgBox li').eq(0).animate({'opacity':1},600,function(){
                    $('.vagen .imgBox li').eq(1).animate({'opacity':1},600,function(){
                        $('.vagen .imgBox li').eq(2).animate({'opacity':1},600,function(){
                        });
                    });
                });
            });
        }

        if(sc>=3900){
            // 공지 섹션에 들어왔을때 h1이 순서대로 깜빡여라
            let b = 0;
            setInterval(function(){
                b++;
                $('.ques .conBox h1').eq(b-1).css({'color':'yellow'})
            },800)
        }
    });
}

if(wd>=380 && wd<1023){
    // 1023 해더구간
    $('.toggle').click(function(){
        $('.gnb').animate({'left':'0'},800)
    });
    $('.gnb').mouseleave(function(){
        $('.gnb').animate({'left':'-100%'},2000)
    });

    // 1023 캠페인구간
    $('.campaign .box1 li').click(function(){
        let i = $(this).index();
        console.log(i)
        $('.campaign article').removeClass('on')
        $('.campaign article').eq(i+1).addClass('on')
        $('.campaign .box1 li').removeClass('on')
        $(this).addClass('on')
    });

    $(window).scroll(function(){
        
        let sc = $(this).scrollTop()
        // 1023 공지사항 구간
        if(sc>=2100){
            // 공지 섹션에 들어왔을때 h1이 순서대로 깜빡여라
            let b = 0;
            setInterval(function(){
                b++;
                $('.ques .conBox h1').eq(b-1).css({'color':'yellow'})
            },800)
        }

            // 1023 비건구간
        if(sc>=2600){
            $('.vagen .txtBox h1').eq(0).animate({'opacity':1},800,function(){
                $('.vagen .imgBox li').eq(0).animate({'opacity':1},600,function(){
                    $('.vagen .imgBox li').eq(1).animate({'opacity':1},600,function(){
                        $('.vagen .imgBox li').eq(2).animate({'opacity':1},600,function(){
                        });
                    });
                });
            });
        }
    });
}

})


