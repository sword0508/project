"use strict";

$(".visuallyhidden").click(function () {
  location.href = "http://gz2008.com/theSecProject/project/html/register.html";
}); // let username = document.querySelector(".form-textbox-input");
// let password = document.querySelector(".form-textbox-input");

var form = document.querySelector(".signin-form-fields"); // let btn = document.querySelector(".form-button");
// let lg = document.querySelector('#lg');

console.log(form); // form.onsubmit = function() {
//     let e = window.event;
//     e.preventDefault();
//     console.log(1);
//     // console.log(AppleID.value);
//     pAjax({
//         type: 'post',
//         url: '../api/login.php',
//         data: {
//             username: username.value,
//             password: password.value
//         }
//     }).then(res => {
//         // console.log(res);
//         if (JSON.parse(res).code == 1) {
//             // 登录成功存储 登录的状态
//             setCookie('login', username.value);
//             // 跳转页面 如果从购物车过来的时候登录成功去购物车页面
//             // 否则就去到首页
//             let url = localStorage.getItem('url');
//             if (url) {
//                 location.href = url;
//                 // 登录成功的时候把url的这个cookie值清除
//                 localStorage.removeItem('url');
//             } else {
//                 location.href = 'http://gz2008.com/theSecProject/project/html/indexx.html';
//             }
//         } else {
//             username.value = "";
//             password.value = "";
//             alert('用户名或者密码错误!');
//         }
//     })
// }