<script setup lang="ts">
import Table from "./TableComponent.vue";
</script>

<template>
  <main>
    <hr />

    <header>
      <img src="../assets/iconHandsBlue.svg" alt="ícone aperto de mãos" />
      <h3>Notas fiscais</h3>
      <p>Visualize as notas fiscais que você tem.</p>
    </header>

    <Table />
  </main>
</template>

<style scoped>
hr {
  width: 100%;
  height: 1px;
  background-color: #dfe2eb;
  border: none;
  margin-top: 64px;
}
main {
  background-color: white;
  box-shadow: 0px 10px 30px rgba(225, 229, 236, 0.5);
  width: 100%;
  height: 100vh;
  border-radius: 15px 0 0 15px;
}
header {
  margin-left: 48px;
  margin-top: 40px;
}
img {
  width: 24px;
}
h3 {
  color: var(--title-color);
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  display: inline-block;
  margin-left: 9px;
}
p {
  font-size: 14px;
  line-height: 20px;
  margin-top: 5px;
  font-weight: 400;
  color: var(--subtitle-color);
}
</style>
