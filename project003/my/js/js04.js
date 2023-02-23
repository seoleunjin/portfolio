$(document).ready(function(){
    let ht = $(window).height();
        $('section').height(ht);
        $(window).resize(function(){
            let ht = $(window).height();
            $('section').height(ht);
        })

})
