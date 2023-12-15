<template>
  <nav class="mainNavbar ">
    <div class="backgroundSemiTransparent routeBtnsContainer">
      <ButtonV
        class="btnRoute"
        text
        v-for="(route, index) in routesList" :key="index"
        @click="setSettingsAndGoToTheRoute(route)"
        :icon="route.icon"
        />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useSystemConfigStore } from '@/stores/SystemConfigStore';
import { useRouter } from 'vue-router'
import { onUpdated } from 'vue';
onUpdated(() => {
  console.log('update Navbar')
})

interface RouteSettings {
  name: string
  route: string
  icon: string
  iconSize: string
  title: string
  hasNavBar: boolean
  widthView : string
}

const routesList: RouteSettings[] = [
  {
    name: 'home',
    route: '/',
    icon:'pi pi-slack',
    iconSize: 'xl',
    title: '',
    hasNavBar: true,
    widthView: '1035px'
  },
  {
    name: 'projects',
    route: '/projects',
    icon:'pi pi-th-large',
    iconSize: 'xl',
    title: 'Proyectos',
    hasNavBar: false,
    widthView: '1035px'
  },
  {
    name: 'curriculum',
    route: '/cv',
    icon:'pi pi-book',
    iconSize: 'xl',
    title: 'Curriculum',
    hasNavBar: false,
    widthView: '1035px'
  },
]

const router = useRouter()
const store = useSystemConfigStore()

function setSettingsAndGoToTheRoute(route: RouteSettings): void {
  setSettingsToRoute(route)
  goToRoute(route)
}
function goToRoute(route: RouteSettings): void {
  router.push({name: route.name})
}
function setSettingsToRoute(route: RouteSettings): void {
  store.$patch((state) => {
    state.systemConfig.titleView =  route.title
    state.systemConfig.hasSecondNavBar =  route.hasNavBar
    state.systemConfig.widthView =  route.widthView
    state.systemConfig.typeWidth =  'px'
  })
}

</script>
<style scoped>
.mainNavbar {
  width: 100%;
  margin: 30px 0 20px 0;
  display: flex;
  justify-content: start;
}
.btnRoute {
  margin: 0 10px;
  color: #fff;
  transition: box-shadow .2s cubic-bezier(.32,.08,.24,1),transform .2s cubic-bezier(.32,.08,.24,1),-webkit-box-shadow .2s cubic-bezier(.32,.08,.24,1),-webkit-transform .2s cubic-bezier(.32,.08,.24,1);
}
.btnRoute:hover {
  transform: scale(1.02);
}
.routeBtnsContainer{
  padding: 5px;
}
</style>