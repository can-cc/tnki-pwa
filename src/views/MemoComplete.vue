<template>
  <div>
    <div class="panel">
      <div>
        今日任务已完成
      </div>

      <div class="button-container">
        <van-button round block type="info" size="small" v-on:click="back()">
          返回首页
        </van-button>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "MemoComplete",
  components: {},
  methods: {
    back() {
      router.replace("/dashboard");
    }
  }
};
</script>

<style scoped>
.panel {
  text-align: center;
  color: green;
  font-weight: bold;
  position: relative;
  top: 180px;
}

.button-container {
  width: 80%;
  margin: 28px auto;
}
</style>
