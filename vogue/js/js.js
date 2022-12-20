$(document).ready(function(){



    // 제이쿼리선택자는 $(css표시방법)으로 선택함

    // addEventLisner  의 경우 이벤트와 함수의 조합으로 표현


    $('#gnb li:nth-child(3)').click(function(){
        // 모든 섹션의 div은 클래스명의 on 값을 지워라 
        $('section>div').removeClass('on');
        // section의 div중 세번째 아이에게 클래스명에 on값을 더해주어라
        $('section>div:nth-child(3)').addClass('on');
        
        $('nav').removeClass('on');
        $('section').removeClass('on');
        $('btnMeun')fadeIn()



    })
    $('#gnb li:nth-child(1)').click(function(){
        // 모든 섹션의 div은 클래스명의 on 값을 지워라 
        $('section>div').removeClass('on');
        // section의 div중 첫번째 아이에게 클래스명에 on값을 더해주어라
        $('section>div:nth-child(1)').addClass('on');
        
        $('nav').removeClass('on');
        $('section').removeClass('on');
        $('btnMeun')fadeIn()



    })
    $('#gnb li:nth-child(2)').click(function(){
        // 모든 섹션의 div은 클래스명의 on 값을 지워라 
        $('section>div').removeClass('on');
        // section의 div중 두번째 아이에게 클래스명에 on값을 더해주어라
        $('section>div:nth-child(2)').addClass('on');
        
        $('nav').removeClass('on');
        $('section').removeClass('on');
        $('btnMeun')fadeIn()




    })


    // btn울 클릭했을때 nav 가 왼쪽 기준으로 오른쪽이 열리고
    //section은 오른쪽을 기준으로 왼쪽이 열린다.

    $('.btnMenu').click(function(){
        // $('nav').css({'transform':'rotateY(15deg);'});
        // $('section'.css({'transform':'rotateY(-10deg);'}))

        $('nav').addClass('on');
        $('section').addClass('on');
        $('this').fadeOut()
    })












})