$(document).ready(function(){
    $('section').mousemove(function(e){
    
        let x = e.pageX;
        let y = e.pageY;
    
        $('.bg01').css({'top':20-y/-50,'left':-20+x/30})
        $('.bg02').css({'top':-40-y/100,'left':30+x/-30})
        $('.bg03').css({'bottom':70-y/-30,'right':10+x/30})
        $('.bg04').css({'bottom':70-y/30,'left':-100+x/-30})

    })
})
