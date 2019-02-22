$(function () {
    $('.sp').on('mouseenter', 'div:hasClass(hot)', function () {
        console.log("111");
        $(this).stop().animate({
            bottom: 5
        }, 200).children('span').stop().animate({
            bottom: 0
        }, 200);
    });
    $('.sp').on('mouseleave', 'div:hasClass(hot)', function () {
        $(this).stop().animate({
            bottom: 0
        }, 200).children('span').stop().animate({
            bottom: -76
        }, 200);
    });
})