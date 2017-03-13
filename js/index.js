/**
 * Created by Administrator on 2017/3/13.
 */
$(function(){
    $(function(){
        var mySwiper1 = $('.swiper-product1').swiper({
            autoplayDisableOnInteraction: false,//点击自动轮播
            autoplay: 5000,//是否轮播
            loop: true,//是否循环
            slidesPerView: 1,//显示几个
            slidesPerGroup: 1,//每次移动几个
            paginationClickable: true,
            pagination: '.pagination'
        });
    });
});