<template>
  <div class="page-login">
    <div class="login-header">
      <!-- <div class="logo"></div> -->
      <router-link :to="{name:'index'}" class="logo"></router-link>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt />
      </div>
      <div class="form">
        <p class="tips" :class="{error:error}">
          <i></i>
          <span>{{error}}</span>
        </p>
        <p class="id">
          <span>账号登录</span>
          <span class="phone-login">
            手机动态码登陆
            <i class="el-icon-mobile-phone"></i>
          </span>
        </p>

        <el-input
          placeholder="账号"
          v-model="userName"
          class="profile"
          :class="{err:error&&nameError}"
        ></el-input>
        <el-input placeholder="密码" v-model="password" class="password"></el-input>

        <p>
          <em>忘记密码？</em>
        </p>
        <el-button class="btn-login" @click="onLogin">登陆</el-button>
        <p class="reg">
          还没有账号？
          <router-link :to="{name:'registe'}">免费注册</router-link>
        </p>

        <div class="oauth-wrapper">
          <div class="title-wrapper">
            <span class="title">用合作网站账号登录</span>
          </div>
          <div class="oauth">
            <span class="oauth__link"></span>
            <span class="oauth__linkweibo"></span>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <ul>
        <li>
          <a href="#">关于美团</a>
        </li>
        <li>
          <a href="#">加入我们</a>
        </li>
        <li>
          <a href="#">商家入驻</a>
        </li>
        <li>
          <a href="#">帮助中心</a>
        </li>
        <li>
          <a href="#">美团手机版</a>
        </li>
      </ul>
      <p>©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
      error: "",
      nameError: false
    };
  },
  methods: {
    onLogin() {
      // console.log(this.userName,'===',this.password)
      this.api
        .getLogin({
          userName: this.userName,
          password: this.password
        })
        .then(res => {
          // console.log(res.data.msg.indexOf('用户名'),res)
          if (res.data.status == "success") {
            alert(res.data.msg)
            this.$router.push({ name: "index" });
            this.$store.commit('setUserName', this.userName);
          } else if (res.data.status == "fail"){
            if (res.data.msg.indexOf("用户名") != -1) {
              this.nameError = true;
            } else {
              this.nameError = false;
            }
            this.error = res.data.msg;
          }
        });
    }
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/login/index.scss";
</style>