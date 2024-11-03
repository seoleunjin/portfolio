$(document).ready(function(){
        if ($(window).width() >= 1025) {
            $("#full-page").fullpage({
                licenseKey: 'YOUR_KEY_HERE',
                navigation: true,
                navigationPosition: 'left',
                navigationTooltips: ['home', 'about', 'Tech', 'Webproject', 'Desing', 'Footer'],
                scrollingSpeed: 1000,
                scrollOverflow: true,
                
                onLeave: function(origin, destination, direction) {
                    if (origin.index == 1) {
                        $('.s1 .wrapper .imgBox').css({ 'opacity': 0 });
                        $('.s1 .wrapper .txtBox').css({ 'opacity': 0 });
                    }
                    if (origin.index == 2) {
                        $('.s2 .Develop').css({ 'opacity': 0 });
                        $('.s2 .Design').css({ 'opacity': 0 });
                    }
                },
                afterLoad: function(origin, destination, direction) {
                    if (destination.index == 1) {
                        $('.s1 .wrapper .imgBox').css({ 'opacity': 1 });
                        $('.s1 .wrapper .txtBox').delay(150).animate({ 'opacity': 1 });
                    }
                    if (destination.index == 2) {
                        $('.s2 .Develop').css({ 'opacity': 1 });
                        $('.s2 .Design').delay(150).animate({ 'opacity': 1 });
                    }
                }
            });
            $('.ScrollDown').css({
                'display':'none'
            })
            $('.s3 .txtWrap .Txt').css({
                'display':'none'
            })
        }

        // 너비1025미만 일 때 s1, s2 나타나는 효과 
        if ($(window).width() < 1025) {
            const ani1 = gsap.timeline();
            const ani2 = gsap.timeline();
        
            ani1
                .to(".s1 .wrapper .imgBox", {
                    opacity: 1,
                })
                .to(".s1 .wrapper .txtBox", {
                    opacity: 1,
                });
        
            ani2
                .to(".s2 .Develop", {
                    opacity: 1,
                })
                .to(".s2 .Design", {
                    opacity: 1,
                });
        
            ScrollTrigger.create({
                animation: ani1,
                trigger: ".s1 .wrapper .imgBox",
                start: "top 50%",
                scrub: true,
            });
        
            ScrollTrigger.create({
                animation: ani2,
                trigger: ".s2 .Develop",
                start: "top top",
                end : "78%",
                scrub: true,
            });
        }
        


        // Contact 클릭 시 해당 섹션으로 이동
        $(".Contact").click(function () {
            if ($(window).width() >= 1025) {
                $.fn.fullpage.moveTo(6, 0); 
            } else {
                const contactSection = $("#full-page .s5");
                $("html, body").animate({ scrollTop: contactSection.offset().top }, "slow");
            }
        });


///슬라이드 영역
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    effect: 'fade',
    allowTouchMove: true,
});
//   WebprojectImg4
$('.WebProtectClick1').click(function(){
    $('.DesignClick').addClass('on');
    $('.WebProtectImg4').addClass('on');
    $('.WebProtectImg4 img').scrollTop(0);
    $('.WebProtectImg4 img').addClass('on');
});
//   WebprojectImg5
$('.WebProtectClick2').click(function(){
    $('.DesignClick').addClass('on');
    $('.WebProtectImg5').addClass('on');
    $('.WebProtectImg5 img').scrollTop(0);
    $('.WebProtectImg5 img').addClass('on');
});
//   sns 확대
$('.SnsImg li').click(function(){
    let i = $(this).index();
    $('.DesignClick').addClass('on');
    $('.SnsZoom').addClass('on');
    $('.SnsZoom img').eq(i).addClass('on');
    $('.ScrollDown').addClass('on');
});
//   detail 확대
$('.DetailImg li').click(function(){
    let i = $(this).index();
    $('.DesignClick').addClass('on');
    $('.DetailZoom').addClass('on');
    $('.DetailZoom img').scrollTop(0);
    $('.DetailZoom img').eq(i).addClass('on');
});
//   card 확대
$('.CardNewsImg li').click(function(){
    let i = $(this).index();
    $('.DesignClick').addClass('on');
    $('.CardZoom').addClass('on');
    $('.CardZoom img').scrollTop(0);
    $('.CardZoom img').eq(i).addClass('on');
});
//   event 확대
$('.EventImg li').click(function(){
    let i = $(this).index();
    $('.DesignClick').addClass('on');
    $('.EventZoom').addClass('on');
    $('.EventZoom img').scrollTop(0);
    $('.EventZoom img').eq(i).addClass('on');
});
//  디자인 확대 닫기 버튼
$(".Close").click(function() {
    $(this).toggleClass("toggle");
    $(".DesignClick ").removeClass('on')
    $('.SnsZoom').removeClass('on');
    $('.SnsZoom img').removeClass('on');
    $('.DetailZoom').removeClass('on');
    $('.DetailZoom img').removeClass('on');
    $('.CardZoom').removeClass('on');
    $('.CardZoom img').removeClass('on');
    $('.WebProtectImg4').removeClass('on');
    $('.WebProtectImg4 img').removeClass('on');
    $('.WebProtectImg5').removeClass('on');
    $('.WebProtectImg5 img').removeClass('on');
    $('.EventZoom').removeClass('on');
    $('.EventZoom img').removeClass('on');
    $('.ScrollDown').removeClass('on');
  });


});

