import { createApp } from 'vue'
import { createRouter, createWebHistory} from "vue-router";
import App from './App.vue'
import home from './components/home.vue'
import courses from './components/courses.vue'
import signUp from "./components/signUp.vue";
import login from "./components/login.vue";
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// Firebase
// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyBYp4Rlj3ECtZeeDRLXgo4j4JsuMlxEN1U",

    authDomain: "ideen-a2-69a05.firebaseapp.com",

    projectId: "ideen-a2-69a05",

    storageBucket: "ideen-a2-69a05.appspot.com",

    messagingSenderId: "713420428840",

    appId: "1:713420428840:web:998ef41d7493cdd857071d"

};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const vuetify = createVuetify({
    components,
    directives,
})

const routes = [
    { path: '/', component: home},
    { path: '/courses', component: courses},
    { path: '/signUp', component: signUp},
    { path: '/login', component: login},
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(vuetify).use(router).mount('#app')
