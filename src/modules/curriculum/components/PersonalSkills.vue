
<template>
  <div class="personalSkillsContainer">
    <div class="personalSkillsCard">
      <div class="headerContainer">
        <div class="">
          <img src="../../../assets/images/skill.png" class="skillIlustration" alt="profile">
        </div>
        <div class="cardTitles">
          <div class="headerTitle">Skills</div>
          <div class="">Code Skills</div>
        </div>
      </div>
      <div class="skillsContainer">
        <div class="skill" v-for="(skill, index) in skillsList" :key="index">
          <div class="skillIconContainer">
            <img :src="skill.icon" class="ilustationTech" alt="profile">
          </div>
          <div class="skillDescription">
            <div class="skillTitle">{{ skill.name }}</div>
            <div class="experienceContainer">
              <span class="timeExperience"> {{ skill.experiencie }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

interface Skiils {
  name: string
  experiencie: string
  icon: string
  iconSize: string
}

const skillsList: Skiils[] = [
  {
    name: 'HTML, CSS, CSS Frameworks',
    experiencie: '3 años de exp',
    icon:'src/assets/images/css-3.png',
    iconSize: 'xl',
  },
  {
    name: 'Js',
    experiencie: '3 años de exp',
    icon:'src/assets/images/js.png',
    iconSize: 'xl',
  },
  {
    name: 'Vue js (vuex/pinia, vue router)',
    experiencie: '3 años de exp',
    icon:'src/assets/images/vue-js.png',
    iconSize: 'xl',
  },
  {
    name: 'Quasar Framework',
    experiencie: '+ 2 años de exp',
    icon:'src/assets/images/quasar.svg',
    iconSize: 'xl',
  },
  {
    name: 'Laravel',
    experiencie: '+ 1.7 años de exp',
    icon:'src/assets/images/laravel.svg',
    iconSize: 'xl',
  },
  {
    name: 'PostgreSQL',
    experiencie: '+ 1.7 años de exp',
    icon:'src/assets/images/postgresql.png',
    iconSize: 'xl',
  },
]

</script>
<style scoped>
.personalSkillsContainer {
  margin-right: 0;
}
.personalSkillsCard {
  width: 660px !important;
  height: 315px;
  border-radius: 16px;
  backdrop-filter: blur(15px) saturate(86%);
  background: radial-gradient(circle at 100% 0,hsla(0,0%,100%,.85) 0,hsla(0,0%,96.1%,.13) 183%);
  transition: box-shadow .2s cubic-bezier(.32,.08,.24,1),transform .2s cubic-bezier(.32,.08,.24,1),-webkit-box-shadow .2s cubic-bezier(.32,.08,.24,1),-webkit-transform .2s cubic-bezier(.32,.08,.24,1);
}
.skillsContainer {
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding: 15px 30px;
  background: #fff;
  border-radius: 0 0 16px 16px;
  height: 70%;
  flex-wrap: wrap;
}
.headerContainer {
  height: 30%;
  display: flex;
  align-items: center;
  padding-left: 30px;
}
.headerTitle {
  font-size: 21px;
  font-weight: 600;
  line-height: 25px;
  color: rgba(0,0,0,.88);
}
.skill {
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin: 5px;
  padding: 5px 10px;
  width: 255px;
}
.skillDescription {
  text-align: start;
  margin-left: 10px;
}
.experienceContainer {
  display: flex;
  align-items: center;
}
.skillTitle {
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  color: rgba(0,0,0,.88);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.timeExperience {
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  color: rgba(0,0,0,.48);
}
.cardTitles {
  margin-left: 15px;
  text-align: start;
}
.skill:hover {
  background: #ECECF0;
}
.personalSkillsCard:hover {
  transform: scale(1.03);
}
.skillIlustration {
  margin-top: 12px;
  width: 51px;
}
.ilustationTech {
  width: 30px;
}

@media (max-width: 1174px) {
  .personalSkillsCard {
    width: 315px !important;
    height: auto;
  }
}
</style>
