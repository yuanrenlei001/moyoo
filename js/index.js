/**
 * Created by Administrator on 2017/3/13.
 */
$(function(){
    $(function(){
        if ($(window).width()<=320) {
            $('.hot_sort li').each(function(){
                var temp= [];
                var $length = $(this).find('.hot_style span');
                for (var i=0;i<$length.length;i++){
                    temp.push($length[i].innerHTML);
                    if(i>4){
                        $length[i].remove();
                        $length[4].innerHTML = '...'
                    }
                }
            });
        }
        $('.hot_sort li').each(function(){
            var temp= [];
            var $length = $(this).find('.hot_style span');
            for (var i=0;i<$length.length;i++){
                temp.push($length[i].innerHTML);
                if(i>5){
                    $length[i].remove();
                    $length[5].innerHTML = '...'
                }
            }
        });
    });
    $(function(){
        var counter = 0;
        // 每页展示3个
        var num = 3;
        var pageStart = 0,pageEnd = 0;

        // dropload
        $('.content').dropload({
            scrollArea : window,
            domDown : {
                domClass   : 'dropload-down',
                domRefresh : '<div class="dropload-refresh">↑上拉加载更多</div>',
                domLoad    : '<div class="dropload-load"><span class="loading"></span>正在加载...</div>',
                domNoData  : '<div class="dropload-noData">刷完啦...</div>'
            },
            loadDownFn : function(me){
                $.ajax({
                    type: 'GET',
                    url: 'json/update.json',
                    dataType: 'json',
                    success: function(data){
                        var result = '';
                        counter++;
                        pageEnd = num * counter;
                        pageStart = pageEnd - num;

                        for(var i = pageStart; i < pageEnd; i++){
                            result +=   '<a class="item opacity" href="'+data.lists[i].link+'">'
                                +'</a>';
                            if((i + 1) >= data.lists.length){
                                // 锁定
                                me.lock();
                                // 无数据
                                me.noData();
                                break;
                            }
                        }
                        // 为了测试，延迟1秒加载
                        setTimeout(function(){
                            $('.hot_sort ul').append(result);
                            // 每次数据加载完，必须重置
                            me.resetload();
                        },1000);
                    },
                    error: function(xhr, type){
                        alert('Ajax error!');
                        // 即使加载出错，也得重置
                        me.resetload();
                    }
                });
            },
            threshold : 50
        });
    });
});