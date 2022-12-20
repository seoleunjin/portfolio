






$(document).ready(function(){
        $('#gnb li:nth-child(3)').click(function(){
            $('section>div').removeClass('on');
            $('section>div:nth-child(3)').addClass('on');
        })


        $('#gnb li:nth-child(1)').click(function(){
            $('section>div').removeClass('on');
            $('section>div:nth-child(1)').addClass('on');
        })


        $('#gnb li:nth-child(2)').click(function(){
            $('section>div').removeClass('on');
            $('section>div:nth-child(2)').addClass('on');
        })




})