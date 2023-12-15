<template>
  <div class="messageBanner backgroundSemiTransparent">
    <div class="iconMessge">
      <i v-if="props.icon" :class="props.icon" style="font-size: 2.8rem"></i>
    </div>
    <div class="textsContainer">
      <p v-if="props.title" class="titleMessage"> {{props.title}} </p>
      <p v-if="props.description" class="descriptionMessage"> {{props.description}} </p>
    </div>
    <div class="secondIconMessge">
      <i v-if="props.secondIcon" :class="props.secondIcon" style="color: #fff;font-size: 1.2rem"></i>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title?: string
  description?: string
  icon?: string
  secondIcon?: string
  iconSize?: string
}

const props = defineProps<Props>()
</script>

<style scoped>
.messageBanner {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  font-size: 17px;
  color: #fff;
  cursor: pointer;
}
.titleMessage {
  font-family: SF Pro Text,Helvetica Neue,sans-serif;
  font-size: 17px;
  font-weight: 600;
  line-height: 21px;
  color: #fff;
  text-align: start;
}
.descriptionMessage {
  color: hsla(0,0%,100%,.7);
  text-align: start;
}
.textsContainer {
  width: 82%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 20px 0;
}
.flexCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}
.iconMessge {
  color: hsla(0, 0%, 100%, 0.767);
  width: 9%;
}
.secondIconMessge {
  width: 9%;
}
@media (max-width: 550px) {
  .iconMessge {
    display: none;
  }
}
</style>