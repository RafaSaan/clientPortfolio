<template>
  <div class="projectsView">
    Django View
    <div class="inputSearchContainer backgroundSemiTransparent">
      <i  class="pi pi-search searchIcon" style="font-size: .8rem; color: #cfcfcf;"></i>
      <input type="text" class="inputSearch" v-model="search">
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import type { Ref } from 'vue'

  const search: Ref< string > = ref('')

</script>
<style>
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
  justify-content: space-between;
  gap: 20px;
  margin-top: 30px;
}
@media (max-width: 650px) {
  .projectsCardsContainer {
    justify-content: center;
  }
}
</style>
