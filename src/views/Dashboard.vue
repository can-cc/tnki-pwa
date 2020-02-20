<template>
  <div class="dashboard-view">
    <h1>Hi~</h1>

    <div class="numbers">
      - 今日任务 -
      <van-row>
        <van-col span="12">
          <div class="big-number">{{ dailyStatistics.totalShouldLearn }}</div>
          今天学习数量
        </van-col>
        <van-col span="12">
          <div class="big-number">{{ dailyStatistics.learned }}</div>
          已经学习数量
        </van-col>
      </van-row>
    </div>

    <div class="start-learn-container">
      <van-button round block type="info" v-on:click="onStart()">
        开始学习
      </van-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  name: "Dashboard",
  components: {},
  data() {
    return {
      dailyStatistics: {}
    };
  },
  methods: {
    onStart() {
      router.push("/memo");
    }
  },
  created() {
    axios.post(`/api/daily-check-in`).then(() => {
      axios.get(`/api/daily-learn-statistics`).then(response => {
        this.dailyStatistics = response.data;
      });
    });
  }
};
</script>

<style scoped lang="scss">
.dashboard-view {
  padding: 16px;
  text-align: left;
}

h1 {
  font-weight: 900;
  font-size: 42px;
  margin-bottom: 12px;
}

.numbers {
  text-align: center;
  font-size: 12px;
  margin: 12px auto;
}

.big-number {
  font-size: 30px;
  font-weight: 900;
  margin-top: 8px;
  height: 41px;
}

.start-learn-container {
  margin: 32px 36px;
}
</style>
