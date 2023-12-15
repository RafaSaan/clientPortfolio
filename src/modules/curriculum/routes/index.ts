import CurriculumnView from '../views/CurriculumView.vue';
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/cv",
    name: "curriculum",
    component: CurriculumnView,
  },
];

export default routes;