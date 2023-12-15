<template>
  <nav class="sideBar backgroundSemiTransparent">
    <div class="sideBarContainer">
      <div
        class="routeLinkStyles"
        v-for="(route, index) in routesList" :key="index"
        :class="router.currentRoute.value.fullPath === route.route ? 'router-link-exact-active' : ''"
        @click="setSettingsAndGoToTheRoute(route)">
          {{ route.name }}
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useSystemConfigStore } from '@/stores/SystemConfigStore';
import { useRouter } from 'vue-router'

interface RouteSettings {
  name: string
  route: string
  icon: string
  iconSize: string
  title: string
  hasNavBar: boolean
}

const routesList: RouteSettings[] = [
  {
    name: 'home',
    route: '/',
    icon:'bomb',
    iconSize: 'xl',
    title: '',
    hasNavBar: true
  },
  {
    name: 'projects',
    route: '/projects',
    icon:'grip',
    iconSize: 'xl',
    title: 'Proyectos',
    hasNavBar: false
  },
  // {name: 'circle', route: '/circle', icon:'circle-notch', iconSize: 'xl', title: ''},
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
  })
}

</script>
<style>
.sideBar {
  width: 5%;
  border-radius: 20px;
  margin: 20px 5px 20px 30px;
  background: #000;
}
.sideBarContainer {
  display: flex;
  flex-direction: column;
}
.routeLinkStyles {
  margin: 15px 0;
}
.router-link-exact-active {
  color: #ffffff;
}
</style>
