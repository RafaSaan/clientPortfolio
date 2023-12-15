<template>
  <div class="mainContainer"
    :style="store.systemConfig.typeWidth === 'vw' 
      ? {background: '#fff'}
      : {'background-image': store.systemConfig.background}">
    <MainView/>
  </div>
</template>
<script lang="ts" setup>
// @ is an alias to /src
import MainView from "@/views/MainView.vue"
import { useSystemConfigStore } from '@/stores/SystemConfigStore';
const store = useSystemConfigStore();

</script>

<style>
body {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
}

.mainContainer {
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.backgroundSemiTransparent {
  -webkit-box-shadow: 17px 20px 40px rgba(0,0,0,.21);
    box-shadow: 17px 20px 40px rgba(0,0,0,.21);
    border-radius: 22px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    background-color: rgba(0,0,0,.16);
}
</style>
