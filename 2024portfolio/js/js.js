$(document).ready(function(){
    $("#full-page").fullpage({
    licenseKey: 'YOUR_KEY_HERE', // 여기에 라이선스 키를 넣어주어야 합니다.
    navigation: true, // 네비 바를 생성합니다.
    navigationPosition:'left',
    navigationTooltips: ['home', 'about', 'Tech', 'Desing', 'Webproject','Footer'], // 네비 토클 호버 시 섹션 이름 보이게 함
    scrollingSpeed: 1000,
    scrollOverflow: true,
    onLeave: function(origin, destination, direction) {
        // if(origin.index == 1) {
        //     $('s1 h3').hide();
        // }
    }, 
    afterLoad: function(origin, destination, direction) {
        // if(destination.index == 1) {
        //     $('.s1 h3').show();
        // }

        
    },

    
    

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
        delay: 3000,
        disableOnInteraction: false,
    },
    effect: 'fade',
    allowTouchMove: true,

    // breakpoints: {
    //     // 화면의 넓이가 320px 이상일 때
    //     320: {
    //       slidesPerView: 2,
    //       spaceBetween: 20
    //     },
    //     // 화면의 넓이가 640px 이상일 때
    //     640: {
    //       slidesPerView: 4,
    //       spaceBetween: 40
    //     }
    //   }
});
//   sns 확대
$('.SnsImg li').click(function(){
    let i = $(this).index();
    $('.DesignClick').addClass('on');
    $('.SnsZoom').addClass('on');
    $('.SnsZoom img').eq(i).addClass('on');
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
//  디자인 확대 닫기 버튼
$(".Close").click(function() {
    $(this).toggleClass("toggle");
    //   닫기 실행
    $(".DesignClick ").removeClass('on')
    $('.SnsZoom').removeClass('on');
    $('.SnsZoom img').removeClass('on');
    $('.DetailZoom').removeClass('on');
    $('.DetailZoom img').removeClass('on');
    $('.CardZoom').removeClass('on');
    $('.CardZoom img').removeClass('on');
  });


});

