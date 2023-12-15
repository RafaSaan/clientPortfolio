<template>
  <div class="curriculumView">
    <PersonalInformation/>
    <PersonalSkills/>
    <WorkExperience/>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import PersonalInformation from '../components/PersonalInformation.vue';
import PersonalSkills from '../components/PersonalSkills.vue';
import WorkExperience from '../components/WorkExperience.vue';
import { useSystemConfigStore } from '@/stores/SystemConfigStore';

const store = useSystemConfigStore()

onMounted(() => {
  store.$patch((state) => {
    state.systemConfig.widthView = '1035px'
    state.systemConfig.typeWidth =  'px'
  })
})
</script>

<style>
.curriculumView {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
}
.curriculumView > div {
  margin: 10px 0;
}
@media (max-width: 1174px) {
  .curriculumView {
    justify-content: center;
    align-items: start;
  }
  .curriculumView > div {
    margin: 10px;
  }
}
</style>
