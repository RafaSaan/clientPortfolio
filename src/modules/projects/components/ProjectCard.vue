
<template>
  <div>
    <div class="projectCard" @click="setConfigAndGoToView(props.project)">
      <div class="iconContainer">
        <img src="../../../assets/images/profileRafa.png" class="profileImg" alt="profile">
      </div>
      <div class="infoContainer">
        <span class="title">{{ props.project.name }}</span>
        <span class="subtititle">Frontend</span>
        <span class="contacts">rsaan02@gmail.com</span>
        <span class="contacts">+52 5569002742</span>
        <span class="contacts">linkedin.com/in/rafaelsaanchez/</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSystemConfigStore } from '@/stores/SystemConfigStore';
import type { Project } from '../interfaces/ProjectsInterfaces'
import { useRouter } from 'vue-router';
const router = useRouter()
const store = useSystemConfigStore()

function setConfigAndGoToView(project: Project): void {
  if (project.routeName === '') return
  setConfigView()
  goToRoute(project)
}
function setConfigView() :void {
  store.$patch((state) => {
    state.systemConfig.widthView = ' 100vw'
    state.systemConfig.typeWidth = 'vw'
  })
}
function goToRoute(project: Project): void {
  router.push({name: project.routeName})
}

interface Props {
  project: Project
}

const props = defineProps<Props>()
</script>
<style scoped>
.projectCard {
  width: 315px !important;
  height: 315px;
  cursor: pointer;
  border-radius: 16px;
  backdrop-filter: blur(15px) saturate(86%);
  background: radial-gradient(circle at 100% 0,hsla(0,0%,100%,.85) 0,hsla(0,0%,96.1%,.13) 183%);
  transition: box-shadow .2s cubic-bezier(.32,.08,.24,1),transform .2s cubic-bezier(.32,.08,.24,1),-webkit-box-shadow .2s cubic-bezier(.32,.08,.24,1),-webkit-transform .2s cubic-bezier(.32,.08,.24,1);
}
.projectCard:hover {
  transform: scale(1.02);
}
.infoContainer {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 50px 30px 30px 30px;
}
.title {
  font-size: 32px;
  font-weight: 600;
  line-height: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  letter-spacing: .13px;
}
.subtititle {
  font-size: 17px;
  font-weight: 600;
  letter-spacing: .23px;
  line-height: 21px;
}
.contacts {
  font-size: 17px;
  font-weight: 400;
  -webkit-margin-before: 5px;
  margin-block-start: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: .7;
  letter-spacing: -.27px;
  color: inherit;
  line-height: 20px;
}
.iconContainer {
  height: 35%;
}
.profileImg {
  margin-top: 12px;
  width: 53px;
}
</style>