<script setup lang="ts">
import Navigator from "./components/NavigatorComponent.vue";
import Content from "./components/ContentComponent.vue";
</script>

<template>
  <div class="app">
    <Navigator />
    <Content />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  width: 100%;
}
</style>
