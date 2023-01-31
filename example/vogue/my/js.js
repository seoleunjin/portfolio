






$(document).ready(function(){
        $('#gnb li:nth-child(3)').click(function(){
            $('section>div').removeClass('on');
            $('section>div:nth-child(3)').addClass('on');
            $('nav').removeClass('on');
            $('section').removeClass('on');
            $('#btn').fadeIn()
        })


        $('#gnb li:nth-child(1)').click(function(){
            $('section>div').removeClass('on');
            $('section>div:nth-child(1)').addClass('on');
            $('nav').removeClass('on');
            $('section').removeClass('on');
            $('#btn').fadeIn()
        })


        $('#gnb li:nth-child(2)').click(function(){
            $('section>div').removeClass('on');
            $('section>div:nth-child(2)').addClass('on');
            $('nav').removeClass('on');
            $('section').removeClass('on');
            $('#btn').fadeIn()
        })



        $('#btn').click(function(){
            $('nav').addClass('on');
            $('section').addClass('on');
            $(this).fadeOut()
        })
})