import { createApp } from 'vue';
import App from './App.vue';

import '@/assets/styles/main.scss';

import router from './router';

const app = createApp(App);

import { clickOutside } from './tools/directives';
app.directive('click-outside', clickOutside);

app
  .use(router)
  .mount('#app');
