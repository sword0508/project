$(".glyphicon-plus-click").click(function() {
    $(".rr-accordion-hidden").animate({
            height: 'toggle'
        })
        // console.log(1);
})
$(".as-accordion-item h3").click(function() {
    $(this).next().children().children().animate({
            height: 'toggle'
        })
        // console.log($(this).next().children().children());
})

$(".button-active").click(function() {
    location.href = "http://gz2008.com/theSecProject/project/html/login.html"
})
$(".button-block-super").click(function() {
    location.href = "http://gz2008.com/theSecProject/project/html/list.html"
})