$(document).ready(function(){
    // 실행문

    // 시간정보 찾기

    setInterval(function(){

        let now = new Date();
        let hr = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();


        let hNum;
        let mNum;
        let sNum;
        // 아직 어디에 쓸 지 정하지 않음


        if(sec>=10){
            sNum = sec;
        }else{
            sNum = '0'+sec;
        }

        if(min>=10){
            mNum = min
        }else{
            mNum = '0'+min;
        }

        if(hr>=10){
            hNum= hr;
        }else{
            hNum='0'+hr
        }



        $('.phone span').eq(0).text(hNum)
        $('.phone span').eq(1).text(mNum)
        $('.phone span').eq(2).text(sNum)

        
    },1000);

    $('nav li').click(function(){
        let txt = $(this).text()
        // 내안에 있는 텍스트를 찾아라 숫자 찾기와 같다
        console.log(txt)
        $('#wrap').removeClass()
        // 주의사항 .wrap를 하게되면 wrap도 다 지워버림 그래서 id 값으로 이름을 지어준 것
        $('#wrap').addClass(txt)
    });



})