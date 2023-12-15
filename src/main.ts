import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import router from './router'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/soho-light/theme.css';

import Button from "primevue/button"
import Card from "primevue/card"




const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue, { });
app.use(router)
app.component('ButtonV', Button);
app.component('vCard', Card);

app.mount('#app')
