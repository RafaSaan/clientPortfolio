<template>
  <div class="projectsView">
    Music View
    <div class="inputSearchContainer backgroundSemiTransparent">
      <i  class="pi pi-search searchIcon" style="font-size: .8rem; color: #707070;"></i>
      <input type="text" class="inputSearch" v-model="search" placeholder="Search for song">
    </div>
    <button>play</button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import type { Ref } from 'vue'

  const search: Ref< string > = ref('')
  const searchD = ''
  const audio = new Audio()


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
  color: #707070;
}
.inputSearch::placeholder {
  color: #707070;
}
.inputSearch:focus {
  outline: none;
}
.searchIcon {
  margin: 0 5px;
}
</style>