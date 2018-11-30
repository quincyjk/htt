$(function () {
    setInterval(function () {
        if($('.draw').hasClass('draw-bg2')){
            $('.draw').removeClass('draw-bg2');
        }else{
            $('.draw').addClass('draw-bg2');
        }
    },500)
    $('body').on('click','.tab-header-item',function () {
        var index = $(this).index();
        $(this).addClass('current_tab').siblings().removeClass('current_tab');
        $('.tab-item').eq(index).show().siblings().hide();
    });

})