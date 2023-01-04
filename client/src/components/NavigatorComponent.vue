<script setup lang="ts">
import { ref } from "vue";

let menuOpen = ref(false);

const handleMenuClick = () => {
  menuOpen.value = !menuOpen.value;
};

const handleNavItemClick = () => {
  menuOpen.value = false;
};
</script>

<template>
  <div>
    <div @click="handleMenuClick" class="menu">
      <div class="menu-line" />
      <div class="menu-line" />
      <div class="menu-line" />
    </div>

    <div @click="handleMenuClick" :class="menuOpen ? 'menu-filter' : ''"></div>

    <nav :class="menuOpen ? 'open' : 'closed'">
      <img src="../assets/logo.svg" class="logo" alt="cashforce logo" />

      <section>
        <div @click="handleNavItemClick" class="navigator-item">
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
  </div>
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
.menu {
  display: none;
}

@media screen and (max-width: 768px) {
  .logo {
    margin-top: 62px;
    margin-left: 12px;
  }
  .menu {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    width: 32px;
    height: 32px;
    z-index: 1001;
    margin: 12px;
  }
  .menu-line {
    width: 100%;
    height: 5px;
    background-color: var(--base-green);
  }
  .menu-filter {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    transition: all ease-in-out 0.5s;
  }
  .closed {
    display: block;
    position: absolute;
    left: -288px;
    z-index: 1000;
    transition: left 0.5s;
    background-color: var(--base-background);
    height: 100vh;
  }
  .open {
    position: absolute;
    left: 0;
    transition: left 0.5s;
    z-index: 1000;
    background-color: var(--base-background);
    height: 100vh;
  }
}
</style>
