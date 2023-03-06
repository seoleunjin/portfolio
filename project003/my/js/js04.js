$(document).ready(function () {
                let i = -1
                $('.right').click(function () {
                    i++;
                    console.log(i)
                    if(i==0){
                    $('#wrap>article')
                        .eq(i)
                        .css({'transform': 'rotateY(-180deg)'});
                    $('#wrap>article')
                        .eq(i+1)
                        .css({'transform': 'rotateY(0deg)'})
                    $('.book').css({
                        'top':'-5%' , 'left':'45%' ,'transition':'0.5s'
                    })
                    }
                    if(i==1){
                        $('#wrap>article')
                            .eq(i-1)
                            .css({'transform': 'rotateY(-180deg)'});
                        $('#wrap>article')
                            .eq(i)
                            .css({'transform': 'rotateY(0deg)'})
                        $('#wrap>article')
                            .eq(i+1)
                            .css({'transform': 'rotateY(-180deg)'});
                        $('#wrap>article')
                            .eq(i+2)
                            .css({'transform': 'rotateY(0deg)' , 'z-index':11})
                        $('.book').css({
                            'top':'-5%' , 'left':'50%' ,'transition':'0.5s'
                        })
                    }
                })
            })