<template>
    <div class="login-wrap">
        <h2>快捷注册登录</h2>
        <!-- 登录表单 -->
        <div class="login-form">
            <div class="item">
                <span class="area">+86</span>
                <i class="split"></i>
                <input type="text" placeholder="请输入手机号"/>
            </div>
            <div class="item">
                <input type="text" placeholder="图片验证码">
                <span class="Verify"></span>
            </div>
            <div class="item">
                <input type="text" placeholder="请输入短信验证码">
                <button class="getVerify">获取验证码</button>
            </div>
            <div class="btn-wrap">
                <button class="login">登录</button>
            </div>
        </div>
        <!-- 其他 -->
        <div class="login-other">
            <p class="pwd-login">密码登录</p>
        </div>
        <div class="login-footer">
            <p class="mask">未注册的手机验证成功后将自动注册，注册视为同意<a href="https://static.thebeastshop.com/app/app-town/*/eula.html">野兽派服务条款</a>
            </p>
        </div>
        <div class="bg">
           
        </div>
    </div>
</template>

<script>
export default {
    name: "Login"
}
</script>

<style>
.login-wrap{
    background: #dcd3cb;
    padding: .4rem .3rem 0;
} 

.login-wrap h2{
    font-size: .46rem
}

.login-form{
    margin-top: .3rem;
}

.login-form .item{
    border-bottom: 1px solid #c1b9b2;
    padding: .4rem 0;
    position: relative;
}

.login-form .item input{
    border: none;
    background: transparent;
    font-size: .32rem;
    outline: none;
    caret-color: #999;
}

.login-form .item .area{
    font-size: .3rem;
    font-weight: 700;
}

.login-form .item .split{
    margin: 0 .3rem;
    display: inline-block;
    border-left: 1px solid #c1b9b2;
    height: .28rem;
}

.login-form .item .Verify{
    display: inline-block;
    width: 2rem;
    height: 1rem;
    background: url(https://api.thebeastshop.com/app/captcha?_timestamp=1559698553066) no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: .1rem;
    right: 0;
}

.login-form .item .getVerify{
    border: none;
    outline: none;
    width: 2rem;
    height: 1rem;
    position: absolute;
    top: .1rem;
    right: 0;
    border-radius: 3px;
    color: #fff;
    background: #c1b9b2;
}

.login-form .btn-wrap{
    margin-top: .8rem;
    padding: 0 .1rem;
}

.login-form .btn-wrap .login{
    background: #000;
    border: none;
    outline: none;
    color: #fff;
    width: 100%;
    height: .8rem;
    border-radius: 3px;
    font-size: .3rem;
}

.login-other{
    margin-top: .3rem;
    padding: 0 .1rem;
    position: relative;
    height: 100%;
    display: inline-block;
}

.login-other .pwd-login{
    font-weight: bolder;
    font-size: .28rem;
   
}

.login-footer{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #dcd3cb;
    padding: .2rem .5rem;
    font-size: .216rem;
}
.login-footer a{
    text-decoration: underline;
    color: #000;
}

.bg{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    background: url(https://img.thebeastshop.com/app/4.0/icon/loginBgImage.png.png) no-repeat;
    height: 8.35rem;
    background-size: 100% 100%;
}


</style>
