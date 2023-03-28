import { createApp } from 'vue'
import { createRouter, createWebHistory} from "vue-router";
import App from './App.vue'
import home from './components/home.vue'
import courses from './components/courses.vue'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

const routes = [
    { path: '/', component: home},
    { path: '/courses', component: courses},
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(vuetify).use(router).mount('#app')
