<script setup lang="ts">
import MessageBanner from '@/components/MessageBanner.vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useSystemConfigStore } from '@/stores/SystemConfigStore';

const router = useRouter()
const store = useSystemConfigStore()

function goToRoute():void {
  router.push('/cv')
}

onMounted(() => {
  store.$patch((state) => {
    state.systemConfig.widthView = '1035px'
    state.systemConfig.typeWidth =  'px'
  })
})
</script>

<template>
  <div class="homeView">
    <MessageBanner
      title="La vista inicial sigue en construccion"
      description="Presiona para ir a ver el curriculum"
      icon="pi pi-directions"
      secondIcon="pi pi-arrow-right"
      iconSize="1.8rem"
      @click="goToRoute"
    />
  </div>
</template>

<style>
.homeView {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
</style>
