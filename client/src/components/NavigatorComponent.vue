<template>
  <nav>
    <img src="../assets/logo.svg" class="logo" alt="cashforce logo" />

    <section>
      <div class="navigator-item">
        <div class="highlight-bar" />
        <img
          src="../assets/iconHands.svg"
          class="hands-icon"
          alt="ícone aperto de mãos"
        />
        <p class="navigator-item-text">Notas fiscais</p>
      </div>
    </section>
  </nav>
</template>

<style scoped>
navigator {
  display: flex;
  width: 288px;
  height: 100vh;
  background-color: var(--base-background);
  flex-direction: column;
}
.logo {
  margin: 24px;
  width: 160px;
  height: 30px;
}
.navigator-item {
  display: flex;
  align-items: center;
}
.navigator-item:hover {
  cursor: pointer;
  background-color: var(--background-hover);
}
.highlight-bar {
  width: 4px;
  height: 64px;
  background-color: var(--base-green);
  border-radius: 4px;
}
.hands-icon {
  width: 24px;
  margin-left: 24px;
}
.navigator-item-text {
  font-weight: 500;
  color: var(--base-green);
  margin-left: 15px;
  font-size: 14px;
  line-height: 18.23px;
}
</style>
