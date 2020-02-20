<template>
  <div class="memo-view">
    <van-nav-bar title="" left-text="" left-arrow @click-left="onClickLeft" />
    <div v-if="activeItem">
      <div class="memo-text-container">
        <div class="memo-text front">
          <span v-html="activeItem.memoItem.front" />
        </div>

        <div v-if="learningOpen">
          <div class="memo-text back" v-html="activeItem.memoItem.back"></div>
        </div>
      </div>

      <div style="margin: 16px 68px;">
        <div v-if="learningOpen">
          <van-button
            round
            block
            type="primary"
            size="small"
            v-on:click="next()"
          >
            下一个
          </van-button>
        </div>
        <div v-if="!learningOpen">
          <van-button
            style="margin-bottom: 16px;"
            round
            block
            type="primary"
            size="small"
            v-on:click="rememberWithQuality(0)"
          >
            我认识
          </van-button>
          <van-button
            round
            block
            type="warning"
            size="small"
            v-on:click="rememberWithQuality(3)"
          >
            不认识
          </van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  name: "Memo",
  components: {},
  created() {
    axios.get(`/api/daily-learn-item`).then(response => {
      this.items = response.data;
      if (!this.items.length) {
        return this.finishLearn();
      }
      this.refreshLearningItem();
    });
  },
  data() {
    return {
      items: [],
      activeItem: null,
      learningOpen: false,
      index: -1
    };
  },
  methods: {
    next() {
      this.refreshLearningItem();
      this.learningOpen = false;
    },
    refreshLearningItem() {
      this.index++;
      if (this.index >= this.items.length) {
        this.finishLearn();
        return;
      }
      this.activeItem = this.items[this.index];
    },
    async rememberWithQuality(memoQuality) {
      await axios.post(`/api/learn`, {
        itemID: this.activeItem.memoItem.id,
        memoQuality: memoQuality
      });
      this.showBack();
    },
    finishLearn() {
      return router.replace("/memo-complete");
    },
    showBack() {
      this.learningOpen = true;
    },
    onClickLeft() {
      router.back();
    }
  }
};
</script>

<style scoped lang="scss">
h2 {
  text-align: left;
  margin: 52px 16px 18px;
}

.memo-text-container {
  text-align: center;
  margin: 18px 68px;
}

.memo-text {
  background-color: #f8f8f8;
  border-radius: 2px;
  padding: 5px 0;
  margin-bottom: 18px;
  font-weight: bold;

  &.back {
    background-color: #eafff19c;
    color: green;
  }
}
</style>
