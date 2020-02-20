<template>
  <div class="login-view">
    <div class="logo-container">
      <Logo />
    </div>

    <van-form @submit="onSubmit">
      <h2>账号密码登陆</h2>
      <van-field
        v-model="username"
        left-icon="contact"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        left-icon="closed-eye"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          登陆
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import { Toast } from "vant";
import Logo from "@/components/Logo";

export default {
  name: "Login",
  components: {
    Logo
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit(values) {
      axios
        .post("/api/signin", values)
        .then(() => {
          router.push("/dashboard");
        })
        .catch(error => {
          if (error.response && error.response.status === 400) {
            Toast.fail("密码错误，请检查用户名和密码");
          } else {
            Toast.fail.error("登陆失败");
          }
        });
    }
  }
};
</script>

<style scoped lang="scss">
.login-view {
  padding-top: 52px;
  text-align: left;
}

.logo-container {
  display: flex;
  align-items: flex-end;
  margin-bottom: 12px;
}

.logo {
  padding-left: 16px;
  width: 50px;
}

h2 {
  margin: 0 16px 18px;
}
</style>
