$(document).ready(function(){

  let ht = $(window).height()
  $('.mainImg').height(ht-80)
  $('.brand').height(ht)
    // 2뎁스 메뉴 슬라이드다운 설정

    // header의 gnb 안에 있는 menu에 마우스 오버 시
    // submenu가 나타난다.



    $('.gnb01 li').mouseenter(function(){
        $('.submenu').stop().show(0);
        let s = $(this).index();
        $('.gnb01 li').eq(s).addClass('on');
        $('.sub01 ul').eq(s).addClass('on');
    })

    $('.gnb01 li').mouseleave(function(){

        $('.submenu').stop().hide(0);
        $('.gnb01 li').removeClass('on');
        $('.sub01 ul').removeClass('on');
    })

    $('.sub01 ul').mouseenter(function(){

        $('.submenu').stop().show(0);
        let s = $(this).index();
        $('.gnb01 li').eq(s).addClass('on');
        $('.sub01 ul').eq(s).addClass('on');
    })

    $('.sub01 ul').mouseleave(function(){

        $('.submenu').stop().hide(0);
        $('.gnb01 li').removeClass('on');
        $('.sub01 ul').removeClass('on');
    })

    
    $('.gnb02 li').mouseenter(function(){
        $('.submenu').stop().show(0);
        let s = $(this).index();
        $('.gnb02 li').eq(s).addClass('on');
        $('.sub02 ul').eq(s).addClass('on');
    })

    $('.gnb02 li').mouseleave(function(){

        $('.submenu').stop().hide(0);
        $('.gnb02 li').removeClass('on');
        $('.sub02 ul').removeClass('on');
    })

    $('.sub02 ul').mouseenter(function(){

        $('.submenu').stop().show(0);
        let s = $(this).index();
        $('.gnb02 li').eq(s).addClass('on');
        $('.sub02 ul').eq(s).addClass('on');
    })

    $('.sub02 ul').mouseleave(function(){

        $('.submenu').stop().hide(0);
        $('.gnb02 li').removeClass('on');
        $('.sub02 ul').removeClass('on');
    })



// mainImg 설정-----------------------------------------------

// main03버튼을 클릭했을때, #main02가 on 값을 받아 왼쪽으로 움직여라.
let m1 = document.querySelector('.main01');
let m2 = document.querySelector('.main02');
let m3 = document.querySelector('.main03');
let mb = document.querySelector('.main02_btn2');

m3.addEventListener('click', function() {
m2.classList.toggle('on');
});

m3.addEventListener('click', function() {
m1.classList.toggle('on');
});

m3.addEventListener('click', function() {
m3.classList.toggle('on');
});

mb.addEventListener('click', function() {
m2.classList.toggle('on');
});

mb.addEventListener('click', function() {
m1.classList.toggle('on');
});

mb.addEventListener('click', function() {
m3.classList.toggle('on');
});

// Wrap every letter in a span
var textWrapper = document.querySelector('.brandTxt  h2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: true})
.add({
    targets: '.brandTxt h2 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.brandTxt  h2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// happy ---------------------------------------------
let c1a = false;
let c1b = document.querySelectorAll('.c_txt01');

const c1 = () => {
    c1a = true
}

const c1c = () => {
  if(c1a) {
    c1b.forEach((element, index) => {
      element.style.transform = "translatex("+ window.scrollY / -40 + "%)"
    })
    c1a = false;
  }
  requestAnimationFrame(c1c);
}


requestAnimationFrame(c1c);
window.addEventListener('scroll', c1)


// -----------------------------------------------------

let c2a = false;
let c2b = document.querySelectorAll('.c_txt02');

const c2 = () => {
    c2a = true
}

const c2c = () => {
  if(c2a) {
    c2b.forEach((element, index) => {
      element.style.transform = "translatex("+ window.scrollY / 50 + "%)"
    })
    c2a = false;
  }
  requestAnimationFrame(c2c);
}


requestAnimationFrame(c2c);
window.addEventListener('scroll', c2)

// pint---------------------------------------------
let p1a = false;
let p1b = document.querySelectorAll('.p_txt01');

const p1 = () => {
    p1a = true
}

const p1c = () => {
  if(p1a) {
    p1b.forEach((element, index) => {
      element.style.transform = "translateY("+ window.scrollY / 15 + "%)"
    })
    p1a = false;
  }
  requestAnimationFrame(p1c);
}


requestAnimationFrame(p1c);
window.addEventListener('scroll', p1)


// single bar---------------------------------------------
let b1a = false;
let b1b = document.querySelectorAll('.b_txt01');

const b1 = () => {
    b1a = true
}

const b1c = () => {
  if(b1a) {
    b1b.forEach((element, index) => {
      element.style.transform = "translatex("+ window.scrollY / -40 + "%)"
    })
    b1a = false;
  }
  requestAnimationFrame(b1c);
}


requestAnimationFrame(b1c);
window.addEventListener('scroll', b1)


// -----------------------------------------------------

let b2a = false;
let b2b = document.querySelectorAll('.b_txt02');

const b2 = () => {
    b2a = true
}

const b2c = () => {
  if(b2a) {
    b2b.forEach((element, index) => {
      element.style.transform = "translatex("+ window.scrollY / 20 + "%)"
    })
    b2a = false;
  }
  requestAnimationFrame(b2c);
}


requestAnimationFrame(b2c);
window.addEventListener('scroll', b2)

// dessert---------------------------------------------
let d1a = false;
let d1b = document.querySelectorAll('.d_txt01');

const d1 = () => {
    d1a = true
}

const d1c = () => {
  if(d1a) {
    d1b.forEach((element, index) => {
      element.style.transform = "translateY("+ window.scrollY / 14 + "%)"
    })
    d1a = false;
  }
  requestAnimationFrame(d1c);
}


requestAnimationFrame(d1c);
window.addEventListener('scroll', d1)



// // benefit---------------------------------------------
let be1a = false;
let be1b = document.querySelectorAll('.be_txt01');

const be1 = () => {
    be1a = true
}

const be1c = () => {
  if(be1a) {
    be1b.forEach((element, index) => {
      element.style.transform = "translatex("+ window.scrollY / -70 + "%)"
    })
    be1a = false;
  }
  requestAnimationFrame(be1c);
}


requestAnimationFrame(be1c);
window.addEventListener('scroll', be1)


// -----------------------------------------------------

let be2a = false;
let be2b = document.querySelectorAll('.be_txt02');

const be2 = () => {
    be2a = true
}

const be2c = () => {
  if(be2a) {
    be2b.forEach((element, index) => {
      element.style.transform = "translatex("+ window.scrollY / 60 + "%)"
    })
    be2a = false;
  }
  requestAnimationFrame(be2c);
}


requestAnimationFrame(be2c);
window.addEventListener('scroll', be2)

// ----------------------
    let y = 0
    $('.youtube .right').click (function(){
    if(y<3)y++;
        let gwd = $('.youtube .imgBox li ').width()
    $('.youtube .imgBox ul').stop().animate({'left':y*-(gwd+3)},200)

    $('.youtube .imgBox li ').removeClass('on')
    $('.youtube .imgBox li ').eq(y).addClass('on')
    $('.youtube .imgBox li ').eq(y-1).stop().animate({'opacity':1},100)
    
    $('.youtube .txtBox li ').removeClass('on')
    $('.youtube .txtBox li ').eq(y).addClass('on')

})

    $('.youtube .left').click (function(){
    if(y>0)i=y--;
        let gwd = $('.youtube .imgBox li').width()
    $('.youtube .imgBox ul').stop().animate({'left':y*-(gwd+3)},200)

    $('.youtube .imgBox li ').removeClass('on')
    $('.youtube .imgBox li ').eq(y).addClass('on')
    $('.youtube .imgBox li ').eq(y-1).stop().animate({'opacity':1},100)

    $('.youtube .txtBox li ').removeClass('on')
    $('.youtube .txtBox li ').eq(y).addClass('on')

})

// event ---------------------------------------------------------

let slider = document.querySelector(".slider")
let innerSlider = document.querySelector(".slider_inner")
let pressed = false
let startx
let x

slider.addEventListener("mousedown", e => {
  pressed = true
  startx = e.offsetX - innerSlider.offsetLeft
  // slider.style.cursor = "grabbing"
})

slider.addEventListener("mouseenter", () => {
  // slider.style.cursor = "grab"
})

slider.addEventListener("mouseup", () => {
  // slider.style.cursor = "grab"
})

window.addEventListener("mouseup", () => {
  pressed = false
})

slider.addEventListener("mousemove", e => {
  if (!pressed) return
  e.preventDefault()
  x = e.offsetX

  innerSlider.style.left = `${x - startx}px`
  checkboundary()
})

function checkboundary() {
  let outer = slider.getBoundingClientRect()
  let inner = innerSlider.getBoundingClientRect()

  if (parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = "0px"
  } else if (inner.right < outer.right) {
    innerSlider.style.left = `-${inner.width - outer.width}px`
  }
}



    // section : mainImg 
    
    // TOP 버튼 설정-----------------------------------------------------------

    // $(window).scroll(function(){

    //     let sc= $(this).scrollTop();

    //     if(sc>=700){
    //         $('.btn_top').css({'opacity':1})
    //     }

    //     if(sc<700){
    //         $('.btn_top').css({'opacity':0})
    //     }

    // })

    // TOP 버튼 누르면 맨 위로 가기
        // $('.btn_top').click(function(){
        //     $('html,body').animate({scrollTop:0},1000)
        // })

        // $(function() {
        //     $(window).scroll(function() {
        //         if ($(this).scrollTop() >= 700) {
        //             $('.btn_top').fadeIn();
        //         } else {
        //             $('.btn_top').fadeOut();
        //         }
        //     });
            
        //     $(".btn_top").click(function() {
        //         $('html, body').animate({
        //             scrollTop : 0
        //         }, 1000);
        //         return false;
        //     });
        // });







})