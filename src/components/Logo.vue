<template>
  <img class="logo" src="/logo.png" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Logo extends Vue {}
</script>

<style scoped lang="scss">
img {
  width: 100px;
}
</style>
