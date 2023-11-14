import './bootstrap';
import {createApp} from 'vue'
import App from './App.vue'
import vuetify from "./vuetify";
import 'material-design-icons-iconfont/dist/material-design-icons.css'

createApp(App).use(vuetify).mount("#app")
