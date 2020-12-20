        // 给validate自定验证规则
        //  jQuery.validator.addMethod(规则名字,函数,'验证错误的提示信息')

        jQuery.validator.addMethod('testTel', function(value) {
            let reg = /^1[3,5,6,7,8]\d{9}$/;
            if (reg.test(value)) {
                return true
            } else {
                return false
            }
        }, '验证失败的提示信息');
        // $.validator.addMethod("dateFormat",
        //     function(value, element) {
        //         return value.match(/^((19\d{2})|(200[0-8]))+[\-]+[1-12]+[\-]+[1-30]$/);
        //     },
        //     "请输入格式为 yyyy-mm-dd.");

        $.validator.addMethod("testEmail", function(value, element) {
            var tel = /^[0-9]{6}$/;
            return this.optional(element) || (tel.test(value));
        }, "请正确填写您的邮政编码");

        $.validator.addMethod("isPassword", function(value, element) { //密码验证
            var psw = /^\w{6,20}$/;
            return this.optional(element) || (psw.test(value));
        }, "请输入6-20位包含字母、数字、下划线格式的密码");



        $('.form-all-NC').validate({
            // 填写的 输入框验证的规则
            rules: {
                // 就是input的name属性的属性值来验证
                firstName: {
                    required: true,
                    maxlength: 2,
                    minlength: 1
                },
                lastName: {
                    required: true,
                    maxlength: 10,
                    minlength: 2
                },
                birthday: {
                    required: true,
                    // dateFormat: true,
                    maxlength: 12,
                    dateISO: true
                }

            },
            // 当不满足规则的是 编写的提示信息
            messages: {
                username: {
                    required: '用户名必填项',
                    maxlength: '用户的最大长度只能为2位',
                    minlength: '用户名不能低于1位字符'
                },
                lastName: {
                    required: '用户名必填项',
                    maxlength: '用户的最大长度只能为10位',
                    minlength: '用户名不能低于2位字符'
                },
                birthday: {
                    dateFormat: "请输入格式为 yyyy-mm-dd.",
                    maxlength: "格式错误"
                }

            },
            submitHandler: function() {
                // 当界面中所有的表单验证都成功的时候 就会执行这个 方法
                // 一般用跟后端进行数据交互 
                // 发送ajax请求
                console.log(this.successList[0].value);
            }
        });

        $('.form-all-Email').validate({
            rules: {
                email: {
                    required: true,
                    rangelength: [5, 20],
                    testEmail: true,
                    email: true
                },
                setPassword: {
                    isPassword: true,
                    rangelength: [6, 20],
                    required: true,
                },
                checkSet: {
                    equalTo: "#setPassword"
                }


            },
            // 当不满足规则的是 编写的提示信息
            messages: {
                email: {
                    required: '必填',
                    rangelength: "用户名必须在5-20个字符之间"
                },
                setPassword: {
                    required: "请输入密码",
                    rangelength: "请输入6-20位包含字母、数字、下划线的密码",
                },
                checkSet: {
                    equalTo: "两次密码不相同"
                }


            },
            submitHandler: function() {
                // 当界面中所有的表单验证都成功的时候 就会执行这个 方法
                // 一般用跟后端进行数据交互 
                // 发送ajax请求
                console.log(this.successList[0].value);
            }

        });
        $('.form-all-test').validate({
            rules: {
                tel: {
                    required: true,
                    minlength: 11,
                    testTel: true
                },
            },
            // 当不满足规则的是 编写的提示信息
            messages: {
                tel: {
                    required: '必填',
                    testTel: "请输入有效号码",
                    minlength: "格式错误"
                }



            },
            submitHandler: function() {
                // 当界面中所有的表单验证都成功的时候 就会执行这个 方法
                // 一般用跟后端进行数据交互 
                // 发送ajax请求
                console.log(this.successList[0].value);
            }

        });

        let verifyCode = new GVerify({
            id: "picyzm",
            length: 6
        });

        $("#btn").click(function() {
            let res = verifyCode.validate($(".generic-input-field").val());
            if (res) {
                alert("验证通过");
            } else {
                alert("验证码错误");
            }
            // console.log($(".generic-input-field").val());

        })

        $(".item-click").click(function() {
            location.href = "http://gz2008.com/theSecProject/project/html/login.html"
        })

        let form = document.querySelector("#form");
        let username = document.querySelector("#username");
        let password1 = document.querySelector("#password1");
        let password2 = document.querySelector("#password2");
        let email = document.querySelector("#email");
        let yzm = document.querySelector("#yzm");
        let loginImmediately = document.querySelector("#loginImmediately");
        let reg = /^\w+([-\.]\w+)*@\w+([\.-]\w+)*\.\w{2,4}$/; //邮箱验证
        // 初始化验证码
        let verifyCode = new GVerify({
            id: "picyzm",
            length: 4
        });
        // 绑定表单提交事件
        form.onsubmit = async function() {
            // 这个会有一个默认行为,立马刷新,这里我们要阻止默认行为
            let e = window.event;
            e.preventDefault();
            //   表单验证
            if (username.value == "") {
                alert("请输入注册帐号");
                return;
            } else if (username.value.length < 5) {
                alert("注册帐号长度至少为5位!");
                return;
            }
            if (password1.value == "") {
                alert("请输入密码!");
                return;
            }
            if (password2.value == "") {
                alert("请重复输入密码!");
                return;
            }
            if (password1.value != password2.value) {
                alert("两次密码不一致，请重新输入");
                return;
            }
            if (email.value == "") {
                alert("请输入邮箱!");
                return;
            }
            if (!reg.test(email.value)) {
                alert("邮箱格式错误,正确格式比如:19646618@qq.com");
                return;
            }
            if (yzm.value == "") {
                alert("请输入验证码!");
                return;
            }
            // let res = verifyCode.validate(yzm.value);
            // console.log(res);
            if (!verifyCode.validate(yzm.value)) {
                alert("验证码错误!");
                return;
            }
            /*  yzm.change = function() {
                 let res1 = verifyCode.validate(yzm.value);
                 console.log(1);
             } */

            // 发送ajax请求判断我们注册的账号是否存在,如果存在就跳转至登录页面  如果不存在就进行注册
            pAjax({
                url: '../api/register.php',
                data: {
                    username: username.value,
                    password: password1.value,
                    email: email.value
                }
            }).then(res => {
                // console.log(res);
                // console.log(res.code);
                console.log(JSON.parse(res));

                if (JSON.parse(res).code == 1) {
                    alert("注册成功!");
                    location.href = "../html/login.html";
                } else {
                    alert("注册的账户已经存在!");
                }
            })
        }