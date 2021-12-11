import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/1', component: '@/pages/1' },
    { path: '/2', component: '@/pages/2' },
  ],
});
