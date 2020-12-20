<?php
    # 获取前端传递过来的参数
    $first = $_POST['firstName'];
    $last = $_POST['lastName'];
    $email = $_POST['email'];
    $password = $_POST['setPassword'];

    // $name = $_GET['username'];
    // $password = $_GET['password'];
    $con = mysqli_connect('localhost','root','123456','goodslist');

    // 先去数据库中对比这个用户名是否存在
    $sql1 = "SELECT *  FROM `register` WHERE `first` = '$first'";
    $res1 = mysqli_query($con,$sql1);

    $row = mysqli_fetch_assoc($res1);
    if($row){
        alert("用户名已经存在，请重新注册");
    }else{
        // 写插入数据的SQL语句
        $sql2 = "INSERT INTO `car` (`first`,`last`,`email`,`password`) VALUES ('$first','$last','$email','$password')";

        $res2 = mysqli_query($con,$sql2);
        print_r($res2);

        // if($res2){
        //     print_r("注册成功");
        // }else{
        //     print_r("注册失败哦");
        // }
    }
?>