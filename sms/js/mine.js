$(function(){
    $('.nav').singlePageNav({//导航跳转效果
        offset:70
    });
    /*小屏幕导航点击关闭菜单*/
    $('.navbar-collapse a').click(function(){
        $('.navbar-collapse ').collapse('hide');
    });
    new WOW().init();
});