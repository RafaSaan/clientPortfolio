
<template>
  <div class="workExperiencieContainer">
    <div class="experiencieCard">
      <div class="headerContainer">
        <div class="">
          <img src="../../../assets/images/feedback.png" class="worklustration" alt="profile">
        </div>
        <div class="cardTitles">
          <div class="headerTitle">Experiencia</div>
          <div class="">3 años</div>
        </div>
      </div>
      <div class="experiencesContainer">
        <div class="experienceItem" v-for="(experience, index) in experienceList" :key="index">
          <div class="skillIconContainer">
            <img :src="experience.icon" class="experienceIconItem" alt="icon">
          </div>
          <div class="skillDescription">
            <div class="">
              <div class="experienceTitle">{{ experience.name }}</div>
              <div class="experienceTitle">{{ experience.workplace }}</div>
            </div>
            <div class="experienceDetailsContainer">
              <span class="timeExperience">{{ experience.time }}</span>
            </div>
            <div class="experienceTitle experienceDescription">{{ experience.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

interface ExperienceItem {
  name: string
  workplace: string
  time: string
  description: string
  icon: string
  iconSize: string
}

const experienceList: ExperienceItem[] = [
  {
    name: 'Desarrollador de software',
    workplace: 'Infotec, Centro de Investigación e Innovación en TIC',
    time: 'ene. 2022 - actualidad · 2 años',
    description: 'Mantenimiento y desarrollo de sistemas internos utilizando todo el ecosistema de Vue Js, Quasar Framework, Cypress para pruebas.Para el backend Laravel 8/9, PostgreSQL',
    icon:'src/assets/images/infotec.png',
    iconSize: 'xl',
  },
  {
    name: 'Desarrollador de aplicaciones de iOS',
    workplace: 'Atomic S',
    time: 'jul. 2023 · 1 mes',
    description: 'Addicion a equipo de desarrollo IOS, apoyo para terminacion de proyecto de aplicacion, añadi features faltantes en modulos requeridos.',
    icon:'src/assets/images/apple.png',
    iconSize: 'xl',
  },
  {
    name: 'Desarrollador web',
    workplace: 'TuNerd',
    time: 'ago. 2021 - dic. 2021 · 5 meses',
    description: 'Diseño y desarrollo de Frontend con Vue.Js.Capacitación en tecnologías como Vue.js, capacitación en SO Linux en terminal, base de datos.',
    icon:'src/assets/images/tunerd1.png',
    iconSize: 'xl',
  },
  {
    name: 'Desarrollador Web Freelance',
    workplace: 'Profecional Independiente',
    time: 'mar. 2021 - ago. 2021 · 6 meses',
    description: 'diseño y desarrollo de landing pages, páginas web, páginas informativas, arreglando bugs en paginas ya creadas con tecnologías como WordPress, otros CMS, HTML, CSS, JS, Php.',
    icon:'src/assets/images/software.png',
    iconSize: 'xl',
  },
]

</script>
<style scoped>
.workExperiencieContainer {
  margin-right: 0;
}
.experiencieCard {
  width: 1035px !important;
  border-radius: 16px;
  backdrop-filter: blur(15px) saturate(86%);
  background: radial-gradient(circle at 100% 0,hsla(0,0%,100%,.85) 0,hsla(0,0%,96.1%,.13) 183%);
  transition: box-shadow .2s cubic-bezier(.32,.08,.24,1),transform .2s cubic-bezier(.32,.08,.24,1),-webkit-box-shadow .2s cubic-bezier(.32,.08,.24,1),-webkit-transform .2s cubic-bezier(.32,.08,.24,1);
}
.experiencesContainer {
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding: 30px;
  background: #fff;
  border-radius: 0 0 16px 16px;
  height: 65%;
  flex-wrap: wrap;
}
.headerContainer {
  height: 35%;
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
.experienceItem {
  display: flex;
  border-radius: 8px;
  margin: 5px;
  padding: 5px 10px;
  width: 95%;
}
.skillDescription {
  text-align: start;
  margin-left: 10px;
}
.experienceDetailsContainer {
  display: flex;
  align-items: center;
}
.experienceTitle {
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  color: rgba(0,0,0,.88);
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
.experienceDescription {
  margin-top: 8px;  
}
.experienceItem:hover {
  background: #ECECF0;
}
.experiencieCard:hover {
  transform: scale(1.03);
}
.worklustration {
  margin-top: 12px;
  width: 45px;
}
.filterGray {
  filter: grayscale(100%);
}
.experienceIconItem {
  width: 25px;
}
@media (max-width: 1174px) {
  .experiencieCard {
    width: 315px !important;
    height: auto;
  }
}
</style>
