$(".visuallyhidden").click(function() {
    location.href = "http://gz2008.com/theSecProject/project/html/register.html"
})

$(".ac-gn-bagview-nav-item").hover(function() {
    // location.href = "http://gz2008.com/theSecProject/project/html/carLists.html"
    console.log(1);

})
$(".ac-gn-bagview-nav-link-signIn").click(function() {
    location.href = "http://gz2008.com/theSecProject/project/html/login.html"
})

$(".cta-link").click(function() {
    // console.log(1);
    location.href = "http://gz2008.com/theSecProject/project/html/iphone12pro.html"
})
$(".chapternav-link-12pro").click(function() {
    // console.log(1);
    location.href = "http://gz2008.com/theSecProject/project/html/iphone12pro.html"
})

// $(".ac-gn-searchform-input").bind('input propertychange keyup', function() {
//     // $(".ac-gn-searchresults-section").src = `https://www.baidu.com/sugrec?pre=1p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=1446,33058,31254,33098,33100,32957,32846&wd=${keyWord.value}&req=2&csor=5&pwd=zhong&cb=fun`
//     // document.body.appendChild(script);
//     console.log($(".ac-gn-searchresults-section").show());
//     $(".ac-gn-searchresults-section").show()
//     if ($(".ac-gn-searchform-input").val() == "") {
//         $(".ac-gn-searchresults-section").hide()
//     }
// })
let section = document.querySelector(".ac-gn-searchresults-section");
let inp = document.querySelector(".ac-gn-searchform-input");;
let list = document.querySelector(".ac-gn-searchresults-item");
let ull = document.querySelector(".ac-gn-searchresults-list");

inp.oninput = () => {
    // console.log(inp.value);
    section.style.display = 'block';
    section.style.borderTop = 'none';
    if (inp.value == "") {
        // section.style.display = 'none';
        ull.remove();
    }
    let script;
    script = document.createElement('script');
    script.src = `https://www.baidu.com/sugrec?pre=1p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=1446,33058,31254,33098,33100,32957,32846&wd=${inp.value}&req=2&csor=5&pwd=zhong&cb=fun`
    ull.appendChild(script);
}

let ul = document.querySelector(".ac-gn-searchresults-list");

function fun(res) {
    let data = res.g; //通过查看res得到g属性是要的数据
    console.log(res);
    let str = '';
    data.forEach((item, index) => {
        str += `<li data-key="中通快递" class="bdsug-overflow"><a href="https://www.apple.com.cn/search/iPhone+%E4%BF%9D%E6%8A%A4%E5%A3%B3?src=globalnav" class="ac-gn-searchresults-link ac-gn-searchresults-link-suggestions"><b>${res.q}</b> ${item.q.substr(res.q.length
        )}</a></li>
            `;

    });

    ul.innerHTML = str;
    script.remove();
}