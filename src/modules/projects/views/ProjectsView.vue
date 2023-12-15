<template>
  <div class="projectsView">
    <div class="inputSearchContainer backgroundSemiTransparent">
      <i  class="pi pi-search searchIcon" style="font-size: .8rem; color: #cfcfcf;"></i>
      <input type="text" class="inputSearch" v-model="search">
    </div>
    <div class="projectsCardsContainer">
      <ProjectCard
        v-for="(project, index) in projectsList"
        :key="index"
        :project="project"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import type { Project } from '../interfaces/ProjectsInterfaces'
import { useSystemConfigStore } from '@/stores/SystemConfigStore';

const search: Ref< string > = ref('')

const projectsList: Project[] = [
  {
    name: 'Roadtrip',
    subtitle: '',
    description: '',
    icon:'src/assets/images/css-3.png',
    iconSize: 'xl',
    routeName: 'projects.roadtrip'
  },
  {
    name: 'Music',
    subtitle: '',
    description: '',
    icon:'src/assets/images/css-3.png',
    iconSize: 'xl',
    routeName: 'projects.music'
  },
  // {
  //   name: 'Api Django',
  //   subtitle: '',
  //   description: '',
  //   icon:'src/assets/images/js.png',
  //   iconSize: 'xl',
  //   routeName: 'projects.django'
  // },
  // {
  //   name: 'Videos Express',
  //   subtitle: '',
  //   description: '',
  //   icon:'src/assets/images/js.png',
  //   iconSize: 'xl',
  //   routeName: 'projects.videos'
  // },
]


const store = useSystemConfigStore()

onMounted(() => {
  store.$patch((state) => {
    state.systemConfig.widthView = '1035px'
    state.systemConfig.typeWidth =  'px'
  })
})

</script>
<style scoped>
.inputSearchContainer {
  display: flex;
  align-items: center;
  width: 260px;
  height: 40px;
  border-radius: 10px;
  transition: box-shadow .2s cubic-bezier(.32,.08,.24,1),transform .2s cubic-bezier(.32,.08,.24,1),-webkit-box-shadow .2s cubic-bezier(.32,.08,.24,1),-webkit-transform .2s cubic-bezier(.32,.08,.24,1);
}
.inputSearchContainer:hover {
  transform: scale(1.03);
}
.inputSearch {
  width: 90%;
  background: none;
  border: none;
  color: #cfcfcf;
  
}
.inputSearch:focus {
  outline: none;
}
.searchIcon {
  margin: 0 5px;
}
.searchIconWhite {
  color: #fff;
}
.projectsCardsContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 30px;
}
@media (max-width: 985px) {
  .projectsCardsContainer {
    justify-content: center;
  }
}
</style>
