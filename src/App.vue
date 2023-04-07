<template>

  <v-app>
    <v-app-bar color="#384FFE" app>
      <v-row>
        <v-col class="d-flex justify-start align-center">
          <v-img :src="logoPath" ></v-img>
        </v-col>
        <v-spacer class="d-none d-md-block"></v-spacer>

        <v-spacer class="d-none d-md-block"></v-spacer>
        <v-col class="d-flex justify-start align-center"><span v-if="isLoggedIn"
        >
          <v-btn ><router-link to="/home" id="txtBlanco">INICIO</router-link></v-btn>
          <v-btn><router-link to="/courses" id="txtBlanco">LISTA DE MATERIAS</router-link></v-btn>
          <v-btn @click="signOut" variant="text" icon="mdi-logout-variant" color="white" ></v-btn>
      </span>
          <span v-else>
          <router-link to="/logIn"> INICIAR SESIÓN </router-link>
          <router-link to="/signUp"> REGISTRARSE </router-link> |

      </span></v-col>


      </v-row>
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
