<template>
  <div class="page-register">
    <div class="header">
      <header>
        <div class="site-logo"></div>
        <div class="login">
          <span>已有美团账号？</span>
          <router-link tag="a" :to="{name:'login'}">登陆</router-link>
        </div>
      </header>
    </div>

    <div class="content">
      <el-form
        :model="registeForm"
        status-icon
        :rules="rules"
        ref="registeForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input type="text" v-model="registeForm.userName" autocomplete="off"></el-input>
        </el-form-item>
        <button class="code">免费获取短信动态码</button>
        <el-form-item label="短信动态码" prop="checkPass">
          <el-input
            type="text"
            v-model="registeForm.SMSCode"
            placeholder="测试期间，暂时可不填"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="创建密码" prop="password">
          <el-input type="password" v-model="registeForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <div class="pw-strength">
          <div class="letter">
            <span class="bar" :class="pwClass">弱</span>
            <span class="bar" :class="pwClass=='week'?'':pwClass">中</span>
            <span class="bar" :class="pwClass=='strong'?'strong':''">强</span>
          </div>
        </div>
        <el-form-item label="确认密码" prop="repassword" class="lastPass">
          <el-input type="password" v-model="registeForm.repassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-button type="warning" @click="toRegiste">同意以下协议并注册</el-button>
        <p class="agreement">《美团网用户协议》</p>
      </el-form>
    </div>
    <footer>
      <a href="#">©meituan.com</a>
      <a href="#">京ICP证070791号</a>
      <span>京公网安备11010502025545号</span>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    var validateId = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("用户名必须为4-16位的字母数字下划线组成"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 6 || value.length > 16) {
        callback(new Error("密码必须为6-16位的字母数字下划线组成"));
      } else {
        if (this.registeForm.password !== "") {
          this.$refs.registeForm.validateField("repassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registeForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registeForm: {
        userName: "",
        password: "",
        repassword: "",
        SMSCode: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        repassword: [{ validator: validatePass2, trigger: "blur" }],
        userName: [{ validator: validateId, trigger: "blur" }]
      }
    };
  },
  computed: {
    pwClass() {
      let len = this.registeForm.password.length;
      if (len < 10 && len > 0) {
        return "week";
      } else if (len < 14 && len >= 10) {
        return "normal";
      } else if (len < 17 && len >= 14) {
        return "strong";
      }
    }
  },
  methods: {
    toRegiste() {
      this.api
        .register({
          userName: this.registeForm.userName,
          password: this.registeForm.password,
          rePassword: this.registeForm.repassword
        })
        .then(res => {
          if (res.data.status == "success") {
            if(confirm(res.data.msg + ',是否跳转登陆页面')){
                this.$router.push({ name: "login" });
            } ;
          } else {
                alert(res.data.msg)
            }
        });
    }
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/register/index.scss";
</style>