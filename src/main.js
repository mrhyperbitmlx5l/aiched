import { createApp } from 'vue'
import Monitor from './Monitor.vue'
import router from './router'
import store from './store'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import animate from 'animate.css'
import './style.less';
import './icon.less';
import 'font-awesome/css/font-awesome.css'


const app = createApp(Monitor)
app.config.productionTip = false;
app.use(Antd);
app.use(store)
app.use(router)
app.use(animate)
app.mount('#monitor')
