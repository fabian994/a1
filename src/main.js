import { createApp } from 'vue'
import { createRouter, createWebHistory} from "vue-router";
import App from './App.vue'
import homePage from './components/homePage.vue'
import coursesList from './components/coursesList.vue'
import signUp from "./components/signUp.vue";
import logIn from "./components/logIn.vue";
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
// Firebase
import '@/plugins/firebaseConfig.js'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi
        }
    }
})

const routes = [
    { path: '/', redirect: '/login'},
    { path: '/home', component: homePage},
    { path: '/courses', component: coursesList},
    { path: '/signUp', component: signUp},
    { path: '/logIn', component: logIn},
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(vuetify).use(router).mount('#app')
