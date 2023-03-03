$(document).ready(function(){
    let wh = $(window).height()
    let i = -1
    let aw = $('article').width()
    $('section').height(wh)
    $(window).resize(function(){
    let wh = $(window).height()
    $('section').height(wh)
    });
    $('.open').click(function () {
        i++;
        console.log(i)
        if (i == 0) {
            $('#wrap>article')
                .eq(i)
                .css({'transform': 'rotateY(-30deg)','left': '897px','transition': '0.9s'});
            $('#wrap>article')
                .eq(i+1)
                .css({'transform': 'rotateY(30deg)'});
        }
        if (i == 1) {
            $('#wrap>article')
                .eq(i - 1)
                .css({'transform': 'rotateY(-30deg)','left': '348px','transition': '0.9s'});
            $('#wrap>article')
                .eq(i)
                .css({'transform': 'rotateY(30deg)','left': '750px','transition': '0.9s'})
            $('#wrap>article')
                .eq(i + 1)
                .css({'transform': 'rotateY(-30deg)'});
        }
    })
})