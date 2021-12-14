import {resolve} from 'path'
import { defineConfig } from 'umi';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  alias: {
    '~': resolve(process.cwd(), './src')
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/1', component: '@/pages/1' },
    { path: '/2', component: '@/pages/2' },
    { path: '/3', component: '@/pages/3' },
    { path: '/4', component: '@/pages/4' },
    { path: '/5', component: '@/pages/5' },
  ],
});
