
<template>
  <div>
    <div class="personalInfoCard">
      <div class="iconContainer">
        <img src="@/assets/images/profileRafa.png" class="profileImg" alt="profile">
      </div>
      <div class="contactContainer">
        <span class="username">Rafael Sánchez</span>
        <span class="profileUser">Frontend</span>
        <span class="contacts">rsaan02@gmail.com</span>
        <span class="contacts">linkedin.com/in/rafaelsaanchez/</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
<style scoped>
.personalInfoCard {
  width: 315px !important;
  height: 315px;
  border-radius: 16px;
  backdrop-filter: blur(15px) saturate(86%);
  background: radial-gradient(circle at 100% 0,hsla(0,0%,100%,.85) 0,hsla(0,0%,96.1%,.13) 183%);
}
.contactContainer {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 50px 30px 30px 30px;
}
.username {
  font-size: 32px;
  font-weight: 600;
  line-height: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  letter-spacing: .13px;
}
.profileUser {
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
