$(document).ready(function(){
    $(window).scroll(function(){
        let sc =$(this).scrollTop()
        for(var a=0; a<11; a++){
            $('section>article').eq(a).css({'transform': 'translateZ('+(-2500*a+sc)+'px)'});
            
            if(sc>=a*2500 && sc<(a+1)*2500){
                    $('section>article').removeClass('on');
                    $('section>article').eq(a).addClass('on');
                };
            if(sc>2500 && sc<5000){
                $('.epi02Ing01').css({'opacity':1,'transition':'1s'})
                $('.epi02Ing02').css({'opacity':1,'transition':'1s'})
                $('.epi02Ing06').css({'opacity':1,'transition':'1s'})
                $('.epi02Ing05').css({'opacity':1,'transition':'1s'})
            };
            if(sc>2600 && sc<5000){
                $('.epi02Ing03').css({'opacity':1,'transition':'4s'})
                $('.epi02Ing04').css({'opacity':1,'transition':'4s'})
            };
            if(sc>2700 && sc<5000){
                $('.epi02Ing07').css({'opacity':1,'transition':'4s'})
            };
            if(sc>2800 && sc<5000){
                $('.epi02Ing08').css({'opacity':1,'transition':'4s'})
                $('.epi02Ing09').css({'opacity':1,'transition':'2s'})
            };
            if(sc>5000 && sc<7500){
                $('.epi03Ing03').css({'opacity':1,'transition':'2s'})
                $('.story03svg03').css({'opacity':1,'transition':'2s'})
                $('.story03svg04').css({'opacity':1,'transition':'4s'})
                $('.epi03Ing01').css({'opacity':1,'transition':'2s'})
            };
            
            if(sc>5200 && sc<7500){
                $('.story03svg01').css({'opacity':1,'transition':'4s'})
                $('.story03svg02').css({'opacity':1,'transition':'4s'})
            };
            if(sc>5400 && sc<7500){
                $('.epi03Ing04').css({'opacity':1,'transition':'2s'})
            };
            if(sc>7500 && sc<10000){
                $('.epi04Ing01').css({'opacity':1})
                $('.epi04Ing02').css({'opacity':1,'transition':'2s'}).stop().animate({'left':'15%'})
            };
            if(sc>7600 && sc<10000){
                $('.epi04Ing05').css({'opacity':1})
                $('.epi04Ing06').css({'opacity':1,'transition':'2s'}).stop().animate({'right':'15%'})
            };
            if(sc>7800 && sc<10000){
                $('.epi04Ing07').css({'opacity':1})
                $('.epi04Ing08').css({'opacity':1,'transition':'2s'})
                $('.epi04Ing03').css({'opacity':1,'transition':'4s'})
                $('.epi04Ing04').css({'opacity':1,'transition':'6s'})
            };
            if(sc>10000 && sc<12500){
                $('.epi05Ing04').css({'opacity':1})
            };
            if(sc>10100 && sc<12500){
                $('.epi05Ing01').css({'opacity':1,'transition':'2s'})
                $('.story05svg01').css({'opacity':1,'transition':'2s'})
            };
            if(sc>10300 && sc<12500){
                $('.epi05Ing02').css({'opacity':1,'transition':'2s'})
                $('.story05svg02').css({'opacity':1,'transition':'2s'})
            };
            if(sc>10500 && sc<12500){
                $('.epi05Ing03').css({'opacity':1,'transition':'2s'})
                $('.story05svg03').css({'opacity':1,'transition':'2s'})
            };
            if(sc>12500 && sc<15000){
                $('.epi06Ing01').css({'opacity':1,'transition':'2s'})
            };
            if(sc>12600 && sc<15000){
                $('.epi06Ing02').css({'opacity':1,'transition':'2s'})
                $('.epi06Ing03').css({'opacity':1,'transition':'4s'})
            };
            if(sc>12700 && sc<15000){
                $('.epi06Ing06').css({'opacity':1,'transition':'2s'})
                $('.epi06Ing07').css({'opacity':1,'transition':'4s'})
            };
            if(sc>12800 && sc<15000){
                $('.epi06Ing04').css({'opacity':1,'transition':'2s'})
                $('.epi06Ing05').css({'opacity':1,'transition':'4s'})
            };
            if(sc>12900 && sc<15000){
                $('.epi06Ing08').css({'opacity':1,'transition':'2s'})
                $('.epi06Ing09').css({'opacity':1,'transition':'4s'})
            };
            if(sc>15000 && sc<17500){
                $('.epi07Ing01').css({'opacity':1,'transition':'2s'})
            };
            if(sc>15200 && sc<17500){
                $('.epi07Ing04').css({'opacity':1,'transition':'2s'})
                $('.story07svg02').css({'opacity':1,'transition':'4s'})
            };
            if(sc>15300 && sc<17500){
                $('.epi07Ing03').css({'opacity':1,'transition':'2s'})
                $('.story07svg01').css({'opacity':1,'transition':'4s'})
                $('.epi07Ing05').css({'opacity':1,'transition':'2s'})
                $('.epi07Ing06').css({'opacity':1,'transition':'2s'})
            };
            if(sc>15400 && sc<17500){
                $('.epi07Ing02').css({'opacity':1,'transition':'2s'})
                $('.epi07Ing07').css({'opacity':1,'transition':'2s'})
                $('.epi07Ing08').css({'opacity':1,'transition':'2s'})
            };
            if(sc>17500 && sc<20000){
                $('.epi08Ing01').css({'opacity':1,'transition':'2s'})
            };
            if(sc>17700 && sc<20000){
                $('.epi08Ing02').css({'opacity':1,'transition':'2s'})
            };
            if(sc>17800 && sc<20000){
                $('.epi08Ing03').css({'opacity':1,'transition':'2s'})
            };
            if(sc>17900 && sc<20000){
                $('.epi08Ing04').css({'opacity':1,'transition':'2s'})
                $('.story08svg01').css({'opacity':1,'transition':'4s'})
                $('.epi08Ing05').css({'opacity':1,'transition':'2s'})
                $('.epi08Ing06').css({'opacity':1,'transition':'2s'})
            };
            if(sc>20000 && sc<22500){
                $('.epi09Ing01').css({'opacity':1,'transition':'2s'})
            };
            if(sc>20200 && sc<22500){
                $('.epi09Ing03').css({'opacity':1,'transition':'2s'})
            };
            if(sc>20300 && sc<22500){
                $('.epi09Ing04').css({'opacity':1,'transition':'2s'})
                $('.epi09Ing05').css({'opacity':1,'transition':'2s'})
            };
            if(sc>20400 && sc<22500){
                $('.epi09Ing02').css({'opacity':1,'transition':'2s'})
            };
        }

    })
})
