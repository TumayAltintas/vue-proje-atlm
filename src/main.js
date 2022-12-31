import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TopHeader from "@/components/TopHeader/TopHeader.vue";
import {appAxios} from "@/Axios/appAxios";
import store from "@/store";

const app = createApp(App)
app.use(router)
app.use(store)
app.config.globalProperties.$appAxios = appAxios
app.component("Top-Header",TopHeader)
app.mount('#app')
