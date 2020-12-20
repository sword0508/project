// index的nav购物车按钮
$(".icon-gouwuche").click(function() {
    $(".ac-gn-bagview").animate({
        height: 'toggle'
    })
});

// ！！！！index的nav搜索按钮
$(".icon-fenleishousuo").click(function() {
    // $(".adv-wrapper").css({
    //     "display": "none",
    // });
    $("#ac-gn-searchview").toggle(function() {
        // console.log($("#ac-gn-searchview").css("display"));
        if ($("#ac-gn-searchview").css("display") === "block") {
            $("#main").css('z-index', '-1')
            $("#chapternav").css('z-index', '0')
                // console.log(1);
                // 关闭按钮
                // $(".ac-gn-searchview-close").click(function() {
                //     $(".ac-gn-searchview-close").css("display", "none")
                //     $(".ac-gn-searchview-content").css("display", "none")
                // })
        } else {
            $("#chapternav").css('z-index', '997')
            $("#main").css('z-index', '0')
                // $(".ac-gn-searchview-content").css("display", "block")
                // $(".ac-gn-searchview-close").css("display", "block")
        }
        // console.log($("#chapternav").css("z-index"));
    });
    // console.log($("#ac-gn-searchview").css("display"));
});