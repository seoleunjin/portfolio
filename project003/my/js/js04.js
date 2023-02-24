$(document).ready(function () {
                let i = -1
                $('h1').click(function () {
                    i++;
                    console.log(i)
                    if(i==0){
                    $('#wrap>article')
                        .eq(i)
                        .css({'transform': 'rotateY(-180deg)'});
                    $('#wrap>article')
                        .eq(i+1)
                        .css({'transform': 'rotateY(0deg)'})
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
                    }
                })
            })