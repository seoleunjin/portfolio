$(document).ready(function(){
    $(window).scroll(function(){
        let sc =$(this).scrollTop()
        for(var a=0; a<11; a++){
            $('section>article').eq(a).css({'transform': 'translateZ('+(-2500*a+sc)+'px)'});
        }
        for(var a=0; a<11; a++){
            $('section>article').eq(a).css({'transform': 'translateZ('+(-2500*a+sc)+'px)'});
            
            if(sc>=a*2500 && sc<(a+1)*2500){
                    $('section>article').removeClass('on');
                    $('section>article').eq(a).addClass('on');
                };
        }

    })
})
