import ProjectsView from '../views/ProjectsView.vue';
import RoadtripView from '../views/RoadtripView.vue';
import DjangoView from '../views/DjangoView.vue';
import VideosView from '../views/VideosView.vue';
import type { RouteRecordRaw } from 'vue-router';
import MusicViewVue from '../views/MusicView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView,
  },
  {
    name: 'projects.roadtrip',
    path: '/roadtrip',
    component: RoadtripView
  },
  {
    name: 'projects.django',
    path: '/django',
    component: DjangoView
  },
  {
    name: 'projects.videos',
    path: '/videos',
    component: VideosView
  },
  {
    name: 'projects.music',
    path: '/music',
    component: MusicViewVue
  }
];

export default routes