<template>

  <v-app>
    <v-app-bar color="#384FFE" app>

      <v-img  class="d-flex justify-start align-center" :src="logoPath" aspect-ratio="16/9" ></v-img>
        <v-spacer class="d-none d-sm-block"></v-spacer>
        <v-spacer class="d-none d-sm-block"></v-spacer>
          <span v-if="isLoggedIn">
            <v-btn><router-link  to="/home" id="txtBlanco">INICIO</router-link></v-btn>
            <v-btn><router-link  to="/courses" id="txtBlanco">LISTA DE MATERIAS</router-link></v-btn>
            <v-btn @click="signOut" icon="mdi-logout"></v-btn>
          </span>
          <span v-else>
          <v-btn ><router-link to="/logIn" id="txtBlanco"> INICIAR SESIÓN </router-link></v-btn>
          <v-btn ><router-link to="/signUp" id="txtBlanco"> REGISTRARSE </router-link></v-btn>
          </span>

    </v-app-bar>
    <RouterView/>
  </v-app>


</template>

<script setup>
  import { ref } from 'vue' // used for conditional rendering
  import firebase from "firebase/compat/app";
  import "firebase/compat/auth"
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const isLoggedIn = ref(true)
  const logoPath = new URL('./assets/logoTec.png', import.meta.url).href
  //./assets/logout_variant.svg
  // runs after firebase is initialized
  firebase.auth().onAuthStateChanged(function(user) {
    isLoggedIn.value = !!user;
  })
  const signOut = () => {
    firebase.auth().signOut()
    router.push('/')
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFFFFF;
  margin-top: 60px;
}
#txtBlanco{
  color: #FFFFFF;
}
.primario {
  color: #384FFE;
}
.secundario {
  color: #787C9D;
}
</style>
