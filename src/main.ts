import { createApp, h, Suspense } from 'vue';

import App from './App.vue';

const app = createApp({
  render: () => {
    return h(
      Suspense,
      null,
      {
        default: () => h(App),
        fallback: () => h('div', { class: 'w-full h-full flex justify-center' }, [
          h('div', { class: 'loading loading-spinner loading-lg' })
        ])
      }
    );
  }
});

app.mount('#app');
