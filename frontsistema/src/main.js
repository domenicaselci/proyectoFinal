import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'
import store from './store'
//import axios from 'axios'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap"
const app = createApp(App).use(router).use(store)
app.mount('#app');