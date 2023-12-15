<template>
  <main class="mainLayoutContainer" :style="{width: store.systemConfig.widthView}">
    <MainNavbar/>
    <!-- <router-view /> -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script setup lang="ts">
import MainNavbar from '@/components/MainNavbar.vue';
import { useSystemConfigStore } from '@/stores/SystemConfigStore';

const store = useSystemConfigStore();

</script>

<style>
.headerOfMainLayout {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.titleView {
  padding: 10px 30px;
  letter-spacing: 2px;
  font-size: 20px;
}
.settingsBtn {
  padding: 0 20px;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>