import '@/assets/styles/main.scss';

import { createApp } from 'vue';
import App from './App.vue';

import { createPinia } from 'pinia';
import router from './router';
import i18n from './i18n';

const app = createApp(App);
const pinia = createPinia();

import { globalComponents } from './components/UI';
import { directives } from './tools/directives';

globalComponents.forEach(component => {
  app.component(component.name as string, component);
});

directives.forEach(directive => {
  app.directive(directive.name, directive);
});

app
  .use(pinia)
  .use(router)
  .use(i18n)
  .mount('#app');

  const removeLoader = () => {
    const loader = document.getElementById('pre-loader');
    if (loader) {
      loader.remove();
    }
  
    window.removeEventListener('load', removeLoader);
  };
  
  window.addEventListener('load', removeLoader);
