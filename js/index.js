/**
 * Created by Administrator on 2017/7/31.
 */
$(function () {
    tabSwitch();
});
function tabSwitch() {
    // tab栏切换 点击导航栏li标签 相应的main中的li显示
    // 1.获取DOM对象
    var navLis = $('.content-wrap>.content-nav>.content-nav-item');
    var mainLis = $('.content-wrap>.nav-item-details>.details-item');
    console.log(navLis);
    console.log(mainLis);
    // 2.给nav批量注册点击事件
    for (var i = 0, len = navLis.length; i < len; i++) {
        navLis[i].setAttribute('index', i);
        navLis[i].onclick = function () {
            var navIndex = this.getAttribute('index');
            console.log(navIndex);
            // 给navLis中的li添加上layui-this
            navLis.removeClass('content-nav-active');
            $(this).addClass('content-nav-active');
            // 相应的mainLis中的li添加上main-active
            mainLis.removeClass('main-active');
            $(mainLis[navIndex]).addClass('main-active');
        }
    }
}