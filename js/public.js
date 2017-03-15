/**
 * Created by Administrator on 2017/3/14.
 */
$(function(){
    $('#move_search').click(function(){
        $('#move_search , #top_title').hide();
        $('.search').animate({
            left:0
        },1000);
    });
    $('.search a').click(function(){
        var $left = $('.search').css('left');
        $('.search').animate({
            left:"-100%"
        },10);
        if($left == '0px'){
            $('#move_search , #top_title').show();
        }
    });
});